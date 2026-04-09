'use client';

import { useState } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { GridContainer, MetricSelector, MetricButton, LogButton, LogButtonContainer, ChartContainer } from './styled';
import { DailyLog } from '@/hooks/useUserLogs';

const METRICS = [
  { key: 'moodRating', label: 'Mood', color: '#7C3AED' },
  { key: 'sleepHours', label: 'Sleep hours', color: '#10B981' },
  { key: 'sleepQuality', label: 'Sleep quality', color: '#3B82F6' },
  { key: 'stressLevel', label: 'Stress', color: '#F59E0B' },
  { key: 'anxietyLevel', label: 'Anxiety', color: '#EF4444' },
  { key: 'socialFrequency', label: 'Social', color: '#06B6D4' },
];


export default function TrackingChart({ logs, setShowForm }: { logs: DailyLog[], setShowForm: React.Dispatch<React.SetStateAction<boolean>> }) {
  const [selectedMetrics, setSelectedMetrics] = useState([
    'moodRating',
    'sleepHours',
    'sleepQuality',
  ]);

  const toggleMetric = (key: string) => {
    setSelectedMetrics(prev =>
      prev.includes(key)
        ? prev.length > 1 ? prev.filter(m => m !== key) : prev
        : prev.length < 3 ? [...prev, key] : prev,
    );
  };

  const chartData = logs.map(log => ({
    date: new Date(log.date).toLocaleDateString('en', {
      month: 'short',
      day: 'numeric',
    }),
    moodRating: log.moodRating,
    sleepHours: log.sleepHours,
    sleepQuality: log.sleepQuality,
    stressLevel: log.stressLevel,
    anxietyLevel: log.anxietyLevel,
    socialFrequency: log.socialFrequency,
  }));

  return (
    <GridContainer>
      <MetricSelector>
        {METRICS.map(metric => (
          <MetricButton
            key={metric.key}
            $active={selectedMetrics.includes(metric.key)}
            $color={metric.color}
            onClick={() => toggleMetric(metric.key)}
          >
            {metric.label}
          </MetricButton>
        ))}
      </MetricSelector>
      <LogButtonContainer>
        <LogButton onClick={() => setShowForm(true)}>+ Add Log</LogButton>
      </LogButtonContainer>
      <ChartContainer>
        <ResponsiveContainer width="100%" height={580}>
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#F3F4F6" />
            <XAxis
              dataKey="date"
              tick={{ fontSize: 12, fill: '#9CA3AF' }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              tick={{ fontSize: 12, fill: '#9CA3AF' }}
              axisLine={false}
              tickLine={false}
              domain={[0, 10]}
            />
            <Tooltip
              contentStyle={{
                borderRadius: '8px',
                border: '1px solid #E5E7EB',
              }}
            />
            <Legend />
            {METRICS.filter(m => selectedMetrics.includes(m.key)).map(metric => (
              <Line
                key={metric.key}
                type="monotone"
                dataKey={metric.key}
                name={metric.label}
                stroke={metric.color}
                strokeWidth={2}
                dot={{ r: 4, fill: metric.color }}
                activeDot={{ r: 6 }}
              />
            ))}
          </LineChart>
        </ResponsiveContainer>
      </ChartContainer>
    </GridContainer>
  );
}