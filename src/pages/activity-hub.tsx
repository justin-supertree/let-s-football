import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import styled from '@emotion/styled';
import { NextPageWithLayout } from '../types/next-page';
// import { AnimatePresence } from 'framer-motion';

import Layout from '@/layouts';
import Button from '@/components/Button';
import HoverVideoPlayer from '@/components/HoverVideoPlayer';
// import CreateTeamModal from '@/components/Modal/CreateTeamModal';

import EplLogo from '../../public/image/epl-logo-1.png';
import EplPoster from '../../public/image/football-poster.png';
import MlbLogo from '../../public/image/mlb-logo-1.png';
import MlbPoster from '../../public/image/baseball-poster.png';
import TennisLogo from '../../public/image/tennis-logo-1.png';
import TennisPoster from '../../public/image/tennis-poster-4.png';

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
  text-align: center;

  & > p {
    margin-top: 48px;
    font-size: 54px;
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
    height: 100%;
    border: 2px solid black;
  }

  /* 비디오 초기 상태 설정 */
  video {
    opacity: 0;
    object-fit: cover;
    transition: opacity 0.3s ease-in-out;
    border-radius: 12px;
  }
`;

const ActivityContents = styled.div<{ isDisActive?: boolean }>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 450px;
  gap: 24px;
  border-radius: 16px;
  padding: 24px;
  background-color: ${({ isDisActive }) =>
    isDisActive ? 'lightgray' : 'lightslategray'};
  transition: 0.3s all ease-in-out;
  font-size: 44px;
  font-family: 600;
  border: 2px solid;
  cursor: pointer;

  :hover {
    opacity: ${({ isDisActive }) => !isDisActive && 0.8};
    box-shadow: 0px 24px 32px -22px #0000001a;
  }
`;

const ActivityInfoWrap = styled.div`
  position: relative;
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
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: column;

  height: 100%;
  border-radius: 12px;
  z-index: 11;

  & > img {
    max-width: 180px;
    max-height: 100%;
    min-height: 160px;
    border-radius: 36px;
  }

  & > button {
    width: 100%;
    margin-top: 12px;
  }
`;

const VideoBlock = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  padding: 0;
  margin: 0;
  z-index: 0;
`;

const SelectButton = styled(Button)`
  z-index: 10;
`;

const ActivityHub: NextPageWithLayout = () => {
  const [hoveredVideos, setHoveredVideos] = useState<string[]>([]);

  const router = useRouter();

  const handleSelectContents = () => {
    router.push('/activities/football');
  };

  const handleMouseEnter = (sports: string) => {
    setHoveredVideos((prev) => [...prev, sports]);
  };

  const handleMouseLeave = (sports: string) => {
    setHoveredVideos((prev) => prev.filter((item) => item !== sports));
  };

  const info = [
    {
      id: 1,
      name: 'football',
      img: EplLogo,
      video: '/videos/football-video-1.mp4',
      poster: EplPoster,
      isDisActive: false,
    },
    {
      id: 2,
      name: 'baseball',
      img: MlbLogo,
      video: '/videos/baseball-video-1.mp4',
      poster: MlbPoster,
      isDisActive: true,
    },
    {
      id: 3,
      name: 'tennis',
      img: TennisLogo,
      video: '/videos/tennis-video-1.mp4',
      poster: MlbPoster,
      isDisActive: true,
    },
  ];

  return (
    <Container>
      <ContentsHubBlock>
        <ContentsWrap>
          <p>
            If you fail to prepare, you&apos;ve prepared to fail. - Mark Spitz
          </p>
        </ContentsWrap>
      </ContentsHubBlock>

      <ActiveBlock>
        {info.map((info, index) => (
          <ActivityContents
            key={`${info.name}-${index}`}
            isDisActive={info.isDisActive}
            onMouseEnter={() => handleMouseEnter(info.name)}
            onMouseLeave={() => handleMouseLeave(info.name)}
          >
            <MyTeamImageBlock>
              <Image src={info.img} alt={`${info.name}`} />
            </MyTeamImageBlock>

            <VideoBlock className="video-max-width">
              <HoverVideoPlayer
                videoUrl={info.video as string}
                postImage={info.poster}
                isHovered={hoveredVideos.includes(info.name)}
              />
            </VideoBlock>

            <ActivityInfoWrap>
              <ContentInfoWrap>
                {/* <p>만든 모임: </p>
                <p>활동 경험치: </p>
                <p>축구란?</p> */}
              </ContentInfoWrap>

              <SelectButton onClick={handleSelectContents}>선택</SelectButton>
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
