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
  patientId?: string;
};

export default function WebhookRealtime() {
  const [events, setEvents] = useState<WebhookEvent[]>([]);

  useEffect(() => {
    // 👇 Point directly to your backend SSE endpoint
    const evtSource = new EventSource(
      "https://sickle-aid-backend.onrender.com/api/auth/webhook-stream"
    );

    evtSource.onmessage = (e) => {
      if (e.data !== "ping") {
        try {
          const payload: WebhookEvent = JSON.parse(e.data);
          setEvents((prev) => [payload, ...prev]);
        } catch (err) {
          console.error("Invalid SSE payload:", e.data, err);
        }
      }
    };

    evtSource.onerror = (err) => {
      console.error("SSE connection error:", err);
    };

    return () => {
      evtSource.close();
    };
  }, []);

  return (
    <div className="p-4">
      <h2 className="font-bold text-lg mb-2">Realtime Webhook Events</h2>
      {events.length === 0 ? (
        <p className="text-gray-500">No events yet...</p>
      ) : (
        <ul className="space-y-2">
          {events.map((e, i) => (
            <li
              key={i}
              className="rounded-md border p-2 text-sm font-mono bg-gray-50"
            >
              {JSON.stringify(e)}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
