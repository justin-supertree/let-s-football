import { NextPageWithLayout } from '@/types/next-page';
import styled from '@emotion/styled';

import Layout from '@/layouts';

const Container = styled.div`
  color: white;
`;

const MainBlock = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  min-height: 70vh;
  font-family: Novarese;
  font-size: 32px;
  font-style: normal;
  font-weight: 800;
  color: white;
`;

const SportsDetail: NextPageWithLayout = () => {
  return (
    <Container>
      <MainBlock>SportsDetail</MainBlock>
    </Container>
  );
};

SportsDetail.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default SportsDetail;
