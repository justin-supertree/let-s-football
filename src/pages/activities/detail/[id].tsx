import { NextPageWithLayout } from '@/types/next-page';
import styled from '@emotion/styled';

import Layout from '@/layouts';

const Container = styled.div`
  min-height: 100vh;
  max-width: 1440px;
  margin: auto;
  background-color: bisque;
`;

const MainBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 70vh;
  font-size: 2rem;
  font-weight: 800;
  background-color: azure;
`;

const DetailTitle = styled.p`
  font-size: 2rem;
  font-weight: 700;
`;

const GraphTableBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40%;
  height: 100%;
`;

const PlayerInfoBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60%;
  height: 100%;
  border: 1px solid red;
`;

const SportsDetail: NextPageWithLayout = () => {
  return (
    <Container>
      <DetailTitle>생성된 Detail Page</DetailTitle>

      <MainBlock>
        <GraphTableBlock>Table</GraphTableBlock>
        <PlayerInfoBlock>Info</PlayerInfoBlock>
      </MainBlock>
    </Container>
  );
};

SportsDetail.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default SportsDetail;
