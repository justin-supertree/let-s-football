import React, { useState } from 'react';
import Link from 'next/link';
import type { NextPageWithLayout } from '@/types/next-page';
import styled from '@emotion/styled';
import { Button, Input } from '@chakra-ui/react';

import Layout from '@/layouts';
import GroupTicket from '@/components/GroupTicket';
import CardSlider from '@/components/CardSlider';

const Container = styled.div`
  max-width: 1440px;
  margin: auto;
  color: white;
`;

const MainBlock = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  min-height: 70vh;
  font-size: 32px;
  font-style: normal;
  font-weight: 800;
  color: black;
`;

const BannerContainer = styled.div`
  width: 100%;
  height: 700px;
  padding: 36px;
`;

const BannerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const BannerBlock = styled.div`
  position: relative;
  width: 65%;
  height: 100%;
  color: white;
  overflow: hidden;

  &.slick-slide {
    &.slick-active {
      &.slick-current {
        display: flex;
        align-content: center;
        justify-content: center;
        background-color: antiquewhite;
      }
    }
  }

  &.slick-dots {
    &.slick-active {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;

      &button::before {
        color: #c1c1c1;
      }
    }
    button::before {
      color: #e9e9e9;
    }
  }
`;

const RealTimeBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 35%;
  height: 100%;
  background-color: bisque;
`;

const Title = styled.p`
  width: 100%;
  font-size: 45px;
  font-weight: 800;
  padding: 20px 0;
  text-align: center;
  color: black;
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

const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

const SearchTeamInput = styled(Input)`
  width: 40%;
  max-width: 350px;
  min-width: 250px;
`;

const TeamGraphBlock = styled.div`
  position: relative;
  width: 100%;

  & > div {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
  }
`;

const CustomButton = styled(Button)``;

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
    id: 1,
    teamName: 'Team Justin',
    footballType: 'Full',
    teamMember: 5,
    trainingPlace: '홍대',
    formation: '433',
    image: '',
  },
];

const recruitDemoData = [
  {
    id: 1,
    teamName: 'Demo Team',
    footballType: 'Full',
    teamMember: 5,
    trainingPlace: '홍대',
    formation: '433',
    image: '',
  },
  {
    id: 2,
    teamName: 'Team Justin',
    footballType: 'Full',
    teamMember: 5,
    trainingPlace: '홍대',
    formation: '433',
    image: '',
  },
  {
    id: 3,
    teamName: 'Team Justin',
    footballType: 'Full',
    teamMember: 5,
    trainingPlace: '홍대',
    formation: '433',
    image: '',
  },
];

const BannerContents = styled.div`
  width: 100%;
  height: 628px;

  & > div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background-color: yellowgreen;
  }
`;

const Football: NextPageWithLayout = () => {
  const [bannerData, setBannerData] = useState([1, 2, 3, 4, 5]);

  return (
    <>
      <Container>
        <Title>Welcome to FootBall Stadium</Title>
        <MainBlock>
          <BannerContainer>
            <BannerWrapper>
              <BannerBlock>
                <CardSlider>
                  {bannerData.map((info, index) => (
                    <BannerContents key={index}>
                      <div>{info} banner</div>
                    </BannerContents>
                  ))}
                </CardSlider>
              </BannerBlock>

              <RealTimeBlock>Real Time</RealTimeBlock>
            </BannerWrapper>
          </BannerContainer>

          <CategoryBlock>
            <CategoryTitleBlock>
              <p>팀원을 찾고있는 모임</p>
              <SearchTeamInput placeholder="찾고 싶은 모임이름을 검색해주세요." />
            </CategoryTitleBlock>

            <TeamGraphBlock>
              {recruitDemoData ? (
                <div>
                  {recruitDemoData.map((info, index) => (
                    <GroupTicket
                      data={info}
                      key={`football-${info.teamName}-${index}`}
                    />
                  ))}
                </div>
              ) : (
                <p>현재까지 팀원을 찾는 모임이 없습니다.</p>
              )}
            </TeamGraphBlock>
          </CategoryBlock>

          <CategoryBlock>
            <CategoryTitleBlock>
              <p>내가만든 모임</p>

              <SearchWrapper>
                <SearchTeamInput placeholder="찾고 싶은 모임이름을 검색해주세요." />

                <Link href="/manager-locker">
                  <CustomButton>Create Team</CustomButton>
                </Link>
              </SearchWrapper>
            </CategoryTitleBlock>

            <TeamGraphBlock>
              {myDemoData ? (
                <div>
                  {myDemoData.map((info, index) => (
                    <GroupTicket
                      data={info}
                      key={`my-${info.teamName}-${index}`}
                    />
                  ))}
                </div>
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
