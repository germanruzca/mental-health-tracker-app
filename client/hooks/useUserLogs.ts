"use client";

import { useState, useEffect, useCallback } from "react";
import api from "@/lib/api";
import { toast } from "sonner";

export interface DailyLog {
  id: string;
  date: string;
  moodRating: number;
  anxietyLevel: number;
  sleepHours: number;
  sleepQuality: number;
  sleepDisturbance: boolean;
  activityType?: string;
  activityDuration?: number;
  socialFrequency: number;
  stressLevel: number;
  depressionScore: number;
  anxietyScore: number;
}

export function useUserLogs(range?: "week" | "month") {
  const [logs, setLogs] = useState<DailyLog[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const getLogsFromAPI = useCallback(async () => {
    try {
      setLoading(true);
      const { data } = await api.get("/logs", {
        params: range ? { range } : {},
      });
      setLogs(data);
    } catch {
      setError("Failed to fetch logs");
      toast.error("Failed to fetch logs");
    } finally {
      setLoading(false);
    }
  }, [range]);

  useEffect(() => {
    getLogsFromAPI();
  }, [getLogsFromAPI]);

  const addNewLog = (log: DailyLog) => setLogs((prev) => [...prev, log]);

  return { logs, loading, error, addLog: addNewLog };
}
