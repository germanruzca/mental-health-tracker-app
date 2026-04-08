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
} from './styled';

export default function DashboardPage() {
  const { user } = useAuth();
  const [range, setRange] = useState<'week' | 'month'>('week');

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

    </Container>
  );
}