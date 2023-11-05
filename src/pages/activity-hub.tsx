import React from 'react';
import styled from '@emotion/styled';
import { NextPageWithLayout } from '../types/next-page';

import Layout from '@/layouts';
import { useRouter } from 'next/router';

// import { AnimatePresence } from 'framer-motion';
// import CreateTeamModal from '@/components/Modal/CreateTeamModal';
import Button from '@/components/Button';

import EplLogo from '@/images/image/epl-logo-1.png';
import MlbLogo from '@/images/image/mlb-logo-1.png';
import TennisLogo from '@/images/image/tennis-logo-1.png';

import HoverVideoPlayer from '@/components/HoverVideoPlayer';
import Image from 'next/image';
import Videos from '@/components/Video';

const Container = styled.div`
  min-height: 100vh;
  height: 100%;
  font-family: Novarese;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  color: white;
  gap: 6px;
`;

const ContentsHubBlock = styled.div`
  margin-bottom: 16px;
`;

const ContentsWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 150px;
  padding: 16px;
  text-align: center;

  & > p {
    font-size: 52px;
    font-weight: 800;
    font-family: Novarese;
  }
`;

const ActiveBlock = styled.div`
  position: relative;
  display: grid;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 102px 32px;
  gap: 24px;
  grid-template-columns: repeat(2, 1fr);

  @media (max-width: 1024px) {
    grid-template-columns: repeat(1, 1fr);
  }

  /* 마우스 오버 시 동영상이 나타나도록 스타일 추가 */
  &:hover video {
    opacity: 1;
  }

  /* 비디오 초기 상태 설정 */
  video {
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  }
`;

const ActivityContents = styled.div<{ isDisActive?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
  border-radius: 16px;
  padding: 24px;
  background-color: ${({ isDisActive }) =>
    isDisActive ? 'lightgray' : 'lightslategray'};
  transition: 0.3s all ease-in-out;
  font-size: 44px;
  font-family: 600;
  border: 2px solid;

  :hover {
    opacity: ${({ isDisActive }) => !isDisActive && 0.8};
    border: 2px solid yellow;
    box-shadow: 0px 24px 32px -22px #0000001a;
  }
`;

const ActivityInfoWrap = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
  height: 100%;
  gap: 24px;
  font-size: 24px;
`;

const ContentInfoWrap = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  padding: 12px;
  width: 100%;
  height: 100%;
  gap: 12px;
`;

const MyTeamImageBlock = styled.div`
  max-width: 280px;
  max-height: 300px;
  min-height: 240px;
  border-radius: 12px;

  & > button {
    width: 100%;
    margin-top: 12px;
  }
`;

const VideoBlock = styled.div`
  width: 350px;
  height: 250px;
  border: 1px solid;
  z-index: 0;
  background-color: white;
`;

const ActivityHub: NextPageWithLayout = () => {
  const router = useRouter();

  const handleSelectContents = () => {
    router.push('/activities/football');
  };

  const info = [
    {
      id: 1,
      name: 'football',
      img: EplLogo,
      video: '/videos/football-video-1.mp4',
      isDisActive: false,
    },
    {
      id: 2,
      name: 'baseball',
      img: MlbLogo,
      video: '/videos/baseball-video-1.mp4',
      isDisActive: true,
    },
    {
      id: 3,
      name: 'tennis',
      img: TennisLogo,
      video: '/videos/tennis-video-1.mp4',
      isDisActive: true,
    },
  ];

  return (
    <Container>
      <ContentsHubBlock>
        <ContentsWrap>
          <p>Welcome Player</p>
          <p>Here is ActivityHub</p>
        </ContentsWrap>
      </ContentsHubBlock>

      <ActiveBlock>
        {info.map((info, index) => (
          <ActivityContents
            key={`${info.name}-${index}`}
            isDisActive={info.isDisActive}
          >
            <MyTeamImageBlock>
              <Image src={info.img} alt={`${info.name}`} />
              <Button onClick={handleSelectContents}>선택</Button>
            </MyTeamImageBlock>
            <ActivityInfoWrap>
              <ContentInfoWrap>
                <p>만든 모임: </p>
                <p>활동 경험치: </p>
                <p>축구란?</p>
              </ContentInfoWrap>

              <VideoBlock>
                <HoverVideoPlayer videoUrl={info.video as string} />
              </VideoBlock>
            </ActivityInfoWrap>
          </ActivityContents>
        ))}
      </ActiveBlock>

      {/* <AnimatePresence initial={false} onExitComplete={() => null}>
        {isCreateTeam && (
          <CreateTeamModal
            title="Create Team!"
            desc="Let's Create your Team!"
            buttonType="double"
            isOpen={isCreateTeam}
            handleOpenModal={() => setIsCreateTeam(!isCreateTeam)}
          />
        )}
      </AnimatePresence> */}
    </Container>
  );
};

ActivityHub.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default ActivityHub;
