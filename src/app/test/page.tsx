"use client";
import { useEffect, useState } from "react";

type WebhookEvent = {
  name: string;
  contact: string;
  age: number;
  emrgencyContactName: string;
  emergencyContactNumber: number;
  emergencyContactRelationship: string;
  gender: string;
  bloodType: string;
  allergies: string;
  weight: string;
  height: string;
  patientId?: string
};

export default function WebhookRealtime() {
  const [events, setEvents] = useState<WebhookEvent[]>([]);

  //test

  useEffect(() => {
    const evtSource = new EventSource("/api/webhook");

    evtSource.onmessage = (e) => {
      if (e.data !== "ping") {
        const payload: WebhookEvent = JSON.parse(e.data);
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
