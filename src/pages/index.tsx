import React from 'react';
import dynamic from 'next/dynamic';

import Layout from '../layouts';
import { NextPageWithLayout } from '../types/next-page';

const HomeContent = dynamic(() => import('../contents/SiteLanding'), {
  ssr: false,
});
const Page: NextPageWithLayout = () => <HomeContent />;

// Page.getLayout = function getLayout(page) {
//   return <Layout>{page}</Layout>;
// };

export default Page;
