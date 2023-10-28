import React from 'react';
import { NextPageWithLayout } from '../types/next-page';
import Layout from '@/layouts';

const ActivityHub: NextPageWithLayout = () => {
  return (
    <div>
      <p>Welcome Player</p>
      <p>Here is ActivityHub</p>
    </div>
  );
};

ActivityHub.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default ActivityHub;
