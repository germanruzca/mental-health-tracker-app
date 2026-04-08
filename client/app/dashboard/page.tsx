'use client';

import { useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import {
  Container,
  Header,
  Title,
  Subtitle,
  RangeSelector,
  RangeButton,
  AvgTitle,
  AvgContainer,
  AvgItem,
  AvgValue,
  AvgLabel,
} from './styled';
import { useUserLogs } from '@/hooks/useUserLogs';

export default function DashboardPage() {
  const { user } = useAuth();
  const [range, setRange] = useState<'week' | 'month'>('week');
  const { logs, loading } = useUserLogs(range);

  const isEmpty = !loading && logs.length === 0;
  const avgMood = !isEmpty
    ? (logs.reduce((sum, currentLog) => sum + currentLog.moodRating, 0) / logs.length).toFixed(1)
    : '-';
  const avgSleep = !isEmpty
    ? (logs.reduce((sum, currentLog) => sum + currentLog.sleepHours, 0) / logs.length).toFixed(1)
    : '-';
  const avgStress = !isEmpty
    ? (logs.reduce((sum, currentLog) => sum + currentLog.stressLevel, 0) / logs.length).toFixed(1)
    : '-';

  const labelsToPrint = [
    { label: 'Mood', value: avgMood },
    { label: 'Sleep Hours', value: avgSleep },
    { label: 'Stress Level', value: avgStress },
  ]

  return (
    <Container>
      <Header>
        <Title>Good morning, {user?.name?.split(' ')[0]}!</Title>
        <Subtitle>Let's see how your progress is going</Subtitle>
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

      <AvgTitle>Average Statistics</AvgTitle>
      <AvgContainer>
        {
          labelsToPrint.map(({ label, value }) => (
            <AvgItem key={label}>
              <AvgValue>{value}</AvgValue>
              <AvgLabel>{label}</AvgLabel>
            </AvgItem>
          ))
        }
      </AvgContainer>
    </Container>
  );
}