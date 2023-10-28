import React from 'react';
import styled from '@emotion/styled';
import { NextPageWithLayout } from '@/types/next-page';

import Layout from '@/layouts';

const Conatiner = styled.div`
  font-size: 66px;
  color: white;
`;

const Football: NextPageWithLayout = () => {
  return <Conatiner>Here is Football</Conatiner>;
};

Football.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Football;
