import React from 'react';

interface Gtag {
  (command: 'config', targetId: string, config?: unknown): void;
  (command: 'set', config: unknown): void;
  (command: 'event', eventName: string, eventParams?: unknown): void;
}

declare global {
  interface Window {
    gtag: Gtag;
  }
}

declare module '*.svg' {
  export const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGElement>
  >;
  export default ReactComponent;
}
