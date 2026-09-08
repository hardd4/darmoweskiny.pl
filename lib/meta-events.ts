'use client';

export type MetaEventName =
  | 'BonusClick'
  | 'GiveawayClick'
  | 'ActiveGiveawayClick'
  | 'SocialClick';

type EventData = Record<string, string | number>;

declare global {
  interface Window {
    fbq?: (command: string, eventName: string, data?: EventData, options?: { eventID: string }) => void;
  }
}

export function trackMetaEvent(eventName: MetaEventName, data: EventData = {}) {
  if (window.localStorage.getItem('analytics-consent') !== 'accepted') return;

  const eventId = window.crypto.randomUUID();
  window.fbq?.('trackCustom', eventName, data, { eventID: eventId });

  void fetch('/api/meta-event', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ eventName, eventId, eventSourceUrl: window.location.href, data }),
    keepalive: true,
  });
}
