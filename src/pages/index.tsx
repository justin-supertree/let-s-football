import React from 'react';
import dynamic from 'next/dynamic';

import { NextPageWithLayout } from '../types/next-page';

const HomeContent = dynamic(() => import('../contents/SiteLanding'), {
  ssr: false,
});
const Page: NextPageWithLayout = () => <HomeContent />;

export default Page;
