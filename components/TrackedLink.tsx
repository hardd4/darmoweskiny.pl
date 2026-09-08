'use client';

import type { AnchorHTMLAttributes, ReactNode } from 'react';
import { trackMetaEvent, type MetaEventName } from '@/lib/meta-events';

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  eventName: MetaEventName;
  eventData?: Record<string, string | number>;
};

export default function TrackedLink({ children, eventName, eventData, onClick, ...props }: Props) {
  return (
    <a
      {...props}
      onClick={(event) => {
        trackMetaEvent(eventName, eventData);
        onClick?.(event);
      }}
    >
      {children}
    </a>
  );
}
