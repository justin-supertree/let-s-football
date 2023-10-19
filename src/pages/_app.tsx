import React from 'react';
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { SessionProvider } from 'next-auth/react';

import type { AppProps } from 'next/app';
import type { Session } from 'next-auth';
import type { DehydratedState } from '@tanstack/react-query';
import type { NextPageWithLayout } from '@/types/next-page';

import AppProvider from '@/components/AppProvider';

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const { dehydratedState } = pageProps as {
    dehydratedState: DehydratedState;
    session: Session;
  };

  const [queryClient] = React.useState(() => new QueryClient());
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <SessionProvider session={pageProps.session}>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={dehydratedState}>
          <AppProvider>{getLayout(<Component {...pageProps} />)}</AppProvider>
        </Hydrate>
      </QueryClientProvider>
    </SessionProvider>
  );
}
