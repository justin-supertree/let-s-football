import React from 'react';
import { NextPageWithLayout } from '@/types/next-page';

import Layout from '@/layouts/Layout';

const Home: NextPageWithLayout = () => {
  return <div></div>;
};

Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Home;
