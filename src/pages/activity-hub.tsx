import React from 'react';
import styled from '@emotion/styled';
import { NextPageWithLayout } from '../types/next-page';

import Layout from '@/layouts';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  font-family: Novarese;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  color: white;
  gap: 6px;
`;

const ActivityHub: NextPageWithLayout = () => {
  return (
    <Container>
      <p>Welcome Player</p>
      <p>Here is ActivityHub</p>
    </Container>
  );
};

ActivityHub.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default ActivityHub;
