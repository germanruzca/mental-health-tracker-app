"use client";

import { useEffect } from "react";
import { io } from "socket.io-client";
import { DailyLog } from "./useUserLogs";

export function useSocket(
  userId: string | undefined,
  onNewLog: (log: DailyLog) => void,
) {
  useEffect(() => {
    if (!userId) return;

    const socket = io(process.env.NEXT_PUBLIC_WS_URL!, {
      withCredentials: true,
      transports: ["websocket", "polling"],
      query: { userId },
    });

    const event = `new_log:${userId}`;

    socket.on("connect", () => console.log("Connected:", socket.id));
    socket.on(event, onNewLog);

    return () => {
      socket.off(event);
      socket.disconnect();
    };
  }, [userId, onNewLog]);
}
