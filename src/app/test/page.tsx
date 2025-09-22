"use client";
import { useEffect, useState } from "react";

export default function WebhookRealtime() {
  const [events, setEvents] = useState<any[]>([]);

  //test

  useEffect(() => {
    const evtSource = new EventSource("/api/webhook"); 

    evtSource.onmessage = (e) => {
      if (e.data !== "ping") {
        const payload = JSON.parse(e.data);
        setEvents((prev) => [payload, ...prev]);
      }
    };

    return () => {
      evtSource.close();
    };
  }, []);

  return (
    <div>
      <h2 className="font-bold">Realtime Webhook Events</h2>
      <ul>
        {events.map((e, i) => (
          <li key={i}>{JSON.stringify(e)}</li>
        ))}
      </ul>
    </div>
  );
}
