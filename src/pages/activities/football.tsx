import React, { useState } from 'react';
import styled from '@emotion/styled';
import { NextPageWithLayout } from '@/types/next-page';
import { Input } from '@chakra-ui/react';
import Link from 'next/link';

import Layout from '@/layouts';
import Button from '@/components/Button';
import GroupTicket from '@/components/GroupTicket';

import FourFourTwo from '@/images/football-442.png';

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

const Title = styled.p`
  width: 100%;
  font-size: 45px;
  font-weight: 800;
  padding: 20px 0;
  text-align: center;
`;

const CategoryBlock = styled.div`
  position: relative;
  width: 100%;
  min-height: 40vh;
  padding: 36px;
  margin-bottom: 36px;
`;

const CategoryTitleBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 32px;
`;

const SearchTeamInput = styled(Input)`
  width: 40%;
  max-width: 350px;
`;

const TeamGraphBlock = styled.div`
  position: relative;
  width: 100%;
  min-height: 200px;
  padding: 36px;
  border-radius: 24px;
  background-color: black;
  /* opacity: 0.7; */
`;

const InitialState = {
  teamName: '',
  footballType: '',
  teamMember: 0,
  trainingPlace: '',
  equipment: '',
  formation: '',
};

const myDemoData = [
  {
    teamName: 'Justin',
    footballType: 'Full',
    teamMember: 11,
    trainingPlace: '홍대',
    formation: '433',
  },
];

const recruitDemodata = [
  {
    teamName: 'Justin',
    footballType: 'Full',
    teamMember: 11,
    trainingPlace: '홍대',
    formation: '433',
  },
];

const Football: NextPageWithLayout = () => {
  const [recruitmentInfos, setRecruitmentInfos] = useState(InitialState);

  return (
    <>
      <Container>
        <Title>Welcome to FootBall Stadium</Title>
        <MainBlock>
          <CategoryBlock>
            <CategoryTitleBlock>
              <p>팀원을 찾고있는 모임</p>
              <SearchTeamInput placeholder="찾고 싶은 모임이름을 검색해주세요." />
            </CategoryTitleBlock>

            <TeamGraphBlock>
              {recruitDemodata ? (
                <GroupTicket />
              ) : (
                <p>현재까지 팀원을 찾는 모임이 없습니다.</p>
              )}
            </TeamGraphBlock>
          </CategoryBlock>

          <CategoryBlock>
            <CategoryTitleBlock>
              <p>내가만든 모임</p>

              <SearchTeamInput placeholder="찾고 싶은 모임이름을 검색해주세요." />

              <Link href="/manager-locker">
                <Button>Create Team</Button>
              </Link>
            </CategoryTitleBlock>

            <TeamGraphBlock>
              {myDemoData ? (
                <GroupTicket />
              ) : (
                <p>현재까지 만든팀이 없습니다.</p>
              )}
            </TeamGraphBlock>
          </CategoryBlock>
        </MainBlock>
      </Container>
    </>
  );
};

Football.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Football;
