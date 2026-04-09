'use client';

import { useState } from 'react';
import api from '@/lib/api';
import {
  Form,
  StepTitle,
  StepSubtitle,
  FieldGroup,
  Field,
  Label,
  ValueBadge,
  Slider,
  CheckboxRow,
  TextInput,
  Footer,
  StepIndicator,
  Dot,
  ButtonRow,
  Button
} from './styled';

const STEPS = [
  {
    title: 'How are you feeling?',
    subtitle: 'Rate your mood and anxiety levels today.',
  },
  {
    title: 'How did you sleep?',
    subtitle: 'Tell us about your sleep last night.',
  },
  {
    title: 'Your day',
    subtitle: 'How was your activity and social life today?',
  },
  {
    title: 'Mental wellness',
    subtitle: 'Honest check-in on stress and symptoms.',
  },
];

const INITIAL_STATE = {
  moodRating: 5,
  anxietyLevel: 5,
  sleepHours: 7,
  sleepQuality: 5,
  sleepDisturbance: false,
  activityType: '',
  activityDuration: 0,
  socialFrequency: 5,
  stressLevel: 5,
  depressionScore: 5,
  anxietyScore: 5,
};

interface Props {
  onCancel: () => void;
}

export default function TrackingForm({ onCancel }: Props) {
  const [step, setStep] = useState(0);
  const [data, setData] = useState(INITIAL_STATE);
  const [loading, setLoading] = useState(false);

  const set = (key: string, value: number | boolean | string) => {
    setData(prev => ({ ...prev, [key]: value }));
  };

  const next = () => setStep(s => s + 1);
  const prev = () => setStep(s => s - 1);

  const submit = async () => {
    try {
      setLoading(true);
      await api.post('/log', {
        ...data,
        activityDuration: data.activityDuration || undefined,
        activityType: data.activityType || undefined,
      });
      alert('Log saved successfully!');
      onCancel();
    } catch {
      console.error('Failed to submit log');
    } finally {
      setLoading(false);
    }
  };

  const isLast = step === STEPS.length - 1;

  return (
    <Form onSubmit={e => e.preventDefault()}>
      <div>
        <StepTitle>{STEPS[step].title}</StepTitle>
        <StepSubtitle>{STEPS[step].subtitle}</StepSubtitle>
      </div>

      <FieldGroup>
        {step === 0 && (
          <>
            <Field>
              <Label>
                Mood
                <ValueBadge>{data.moodRating}/10</ValueBadge>
              </Label>
              <Slider
                type="range" min={1} max={10} step={1}
                value={data.moodRating}
                onChange={e => set('moodRating', Number(e.target.value))}
              />
            </Field>
            <Field>
              <Label>
                Anxiety level
                <ValueBadge>{data.anxietyLevel}/10</ValueBadge>
              </Label>
              <Slider
                type="range" min={1} max={10} step={1}
                value={data.anxietyLevel}
                onChange={e => set('anxietyLevel', Number(e.target.value))}
              />
            </Field>
          </>
        )}

        {step === 1 && (
          <>
            <Field>
              <Label>
                Hours of sleep
                <ValueBadge>{data.sleepHours}h</ValueBadge>
              </Label>
              <Slider
                type="range" min={0} max={12} step={0.5}
                value={data.sleepHours}
                onChange={e => set('sleepHours', Number(e.target.value))}
              />
            </Field>
            <Field>
              <Label>
                Sleep quality
                <ValueBadge>{data.sleepQuality}/10</ValueBadge>
              </Label>
              <Slider
                type="range" min={1} max={10} step={1}
                value={data.sleepQuality}
                onChange={e => set('sleepQuality', Number(e.target.value))}
              />
            </Field>
            <CheckboxRow>
              <input
                type="checkbox"
                checked={data.sleepDisturbance}
                onChange={e => set('sleepDisturbance', e.target.checked)}
              />
              Sleep disturbances last night?
            </CheckboxRow>
          </>
        )}

        {step === 2 && (
          <>
            <Field>
              <Label>
                Social interactions
                <ValueBadge>{data.socialFrequency}/10</ValueBadge>
              </Label>
              <Slider
                type="range" min={1} max={10} step={1}
                value={data.socialFrequency}
                onChange={e => set('socialFrequency', Number(e.target.value))}
              />
            </Field>
            <Field>
              <Label>Activity type (optional)</Label>
              <TextInput
                type="text"
                placeholder="e.g. running, yoga, walking..."
                value={data.activityType}
                onChange={e => set('activityType', e.target.value)}
              />
            </Field>
            <Field>
              <Label>
                Duration (minutes)
                <ValueBadge>{data.activityDuration} min</ValueBadge>
              </Label>
              <Slider
                type="range" min={0} max={180} step={5}
                value={data.activityDuration}
                onChange={e => set('activityDuration', Number(e.target.value))}
              />
            </Field>
          </>
        )}

        {step === 3 && (
          <>
            <Field>
              <Label>
                Stress level
                <ValueBadge>{data.stressLevel}/10</ValueBadge>
              </Label>
              <Slider
                type="range" min={1} max={10} step={1}
                value={data.stressLevel}
                onChange={e => set('stressLevel', Number(e.target.value))}
              />
            </Field>
            <Field>
              <Label>
                Depression symptoms
                <ValueBadge>{data.depressionScore}/10</ValueBadge>
              </Label>
              <Slider
                type="range" min={1} max={10} step={1}
                value={data.depressionScore}
                onChange={e => set('depressionScore', Number(e.target.value))}
              />
            </Field>
            <Field>
              <Label>
                Anxiety symptoms
                <ValueBadge>{data.anxietyScore}/10</ValueBadge>
              </Label>
              <Slider
                type="range" min={1} max={10} step={1}
                value={data.anxietyScore}
                onChange={e => set('anxietyScore', Number(e.target.value))}
              />
            </Field>
          </>
        )}
      </FieldGroup>

      <Footer>
        <StepIndicator>
          {STEPS.map((_, i) => (
            <Dot key={i} $active={i === step} />
          ))}
        </StepIndicator>

        <ButtonRow>
          {step > 0 && (
            <Button $variant="ghost" onClick={prev}>
              Back
            </Button>
          )}
          {step === 0 && (
            <Button $variant="ghost" onClick={onCancel}>
              Cancel
            </Button>
          )}
          {isLast ? (
            <Button $variant="primary" onClick={submit} disabled={loading}>
              {loading ? 'Saving...' : 'Save log'}
            </Button>
          ) : (
            <Button $variant="primary" onClick={next}>
              Next
            </Button>
          )}
        </ButtonRow>
      </Footer>
    </Form>
  );
}