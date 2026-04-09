'use client';

import { Wrapper, Moon, Title, Subtitle, Button } from './styled';

interface Props {
  setShowForm: React.Dispatch<React.SetStateAction<boolean>>
}

export function EmptyState({ setShowForm }: Props) {
  return (
    <Wrapper>
      <Moon>🧠</Moon>
      <Title>No logs yet</Title>
      <Subtitle>
        Start tracking your daily mental health.
      </Subtitle>
      <Button onClick={() => setShowForm(true)}>Log your first day</Button>
    </Wrapper>
  );
}