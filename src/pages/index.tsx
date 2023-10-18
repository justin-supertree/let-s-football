import React from 'react';
import styled from '@emotion/styled';
import { NextPageWithLayout } from '@/types/next-page';

import Layout from '@/layouts';

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: white;
  font-family: Novarese;
  font-size: 35px;
  font-weight: 800;
`;

const TitleBlock = styled.div`
  text-align: center;
`;

const Title1 = styled.p``;
const Title2 = styled.p``;

const Home: NextPageWithLayout = () => {
  return (
    <Container>
      <TitleBlock>
        {/* <Title1>Welcome to Custom</Title1>
        <p>CHAMPIONS LEAGUE</p> */}
        <Title1>Main</Title1>
      </TitleBlock>
    </Container>
  );
};

Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Home;
