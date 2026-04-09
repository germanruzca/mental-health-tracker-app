'use client';

import { useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import {
  GridContainer,
  Container,
  Header,
  Title,
  Subtitle,
  RangeSelector,
  RangeButton,
  LogsTitle,
  AvgContainer,
  AvgItem,
  AvgValue,
  AvgLabel,
  GridContainerList,
  StatusLabel,
} from './styled';
import { DailyLog, useUserLogs } from '@/hooks/useUserLogs';
import TrackingChart from '@/components/tracking/TrackingChart';
import TrackingFormModal from '@/components/tracking/LogForm/modal';


export default function DashboardPage() {
  const [showForm, setShowForm] = useState(false);
  const { user } = useAuth();
  const [range, setRange] = useState<'week' | 'month'>('week');
  const { logs, loading, refetch } = useUserLogs(range);

  if (loading) return <div>Loading...</div>;

  const avg = (key: keyof DailyLog) =>
    (logs.reduce((sum, log) => sum + (log[key] as number), 0) / logs.length).toFixed(1) || '-';

  const getAverages = (logs: DailyLog[]) => {
    if (!logs.length) return null;
    return {
      'Mood': avg('moodRating'),
      'Anxiety': avg('anxietyLevel'),
      'Sleep': avg('sleepHours'),
      'Sleep Quality': avg('sleepQuality'),
      'Stress': avg('stressLevel'),
      'Social Frequency': avg('socialFrequency'),
      'Depression Score': avg('depressionScore'),
      'Anxiety Score': avg('anxietyScore'),
    };
  };

  const averagesValuesToPrint = [
    { label: 'Mood', value: avg('moodRating') },
    { label: 'Sleep Hours', value: avg('sleepHours') },
    { label: 'Stress Level', value: avg('stressLevel') },
  ]

  const generalStatus = getAverages(logs);
  return (
    <GridContainer>
      <Container>
        <Header>
          <Title>Good morning, {user?.name?.split(' ')[0]}!</Title>
          <Subtitle>{`Let's see how your progress is going`}</Subtitle>
        </Header>

        <RangeSelector>
          <RangeButton
            $isActive={range === 'week'}
            onClick={() => setRange('week')}
          >
            This week
          </RangeButton>
          <RangeButton
            $isActive={range === 'month'}
            onClick={() => setRange('month')}
          >
            This month
          </RangeButton>
        </RangeSelector>

        <LogsTitle>Average Statistics</LogsTitle>
        <AvgContainer>
          {
            averagesValuesToPrint.map(({ label, value }) => (
              <AvgItem key={label}>
                <AvgValue>{value}</AvgValue>
                <AvgLabel>{label}</AvgLabel>
              </AvgItem>
            ))
          }
        </AvgContainer>

        <LogsTitle>General Status</LogsTitle>
        <GridContainerList>
          {generalStatus && Object.entries(generalStatus).map(([label, value]) =>
            <StatusLabel key={label}>
              <AvgValue>{value}</AvgValue>
              <AvgLabel>{label}</AvgLabel>
            </StatusLabel>
          )}
        </GridContainerList>
      </Container>
      <Container>
        <TrackingChart logs={logs} setShowForm={setShowForm} />
      </Container>
      {showForm && (
        <TrackingFormModal
          onClose={() => setShowForm(false)}
        />
      )}
    </GridContainer >
  );
}