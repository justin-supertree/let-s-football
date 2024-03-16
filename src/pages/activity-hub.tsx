import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useQuery } from '@tanstack/react-query';
import styled from '@emotion/styled';
import { AnimatePresence, motion } from 'framer-motion';
import { useDisclosure } from '@chakra-ui/react';

import { getCategoryInformation } from '@/api/category';

import type { NextPageWithLayout } from '@/types/next-page';

import Image from '@/components/Image';
import Layout from '@/layouts';
import Button from '@/components/Button';
import HoverVideoPlayer from '@/components/HoverVideoPlayer';
import CreateTeamModal from '@/components/Modal/CreateTeamModal';
import TennisPoster from '../../public/image/tennis-poster-4.png';
import { getAnimate, setCategory } from '@/lib/util';

const Container = styled.div`
  display: flex;
  justify-content: center;
  min-height: 100vh;
  height: 100%;
  font-family: Novarese;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  gap: 6px;
`;

const ContentsWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 150px;
  text-align: center;
  margin-bottom: 16px;

  & > p {
    font-size: 32px;
    font-weight: 800;
    font-family: Novarese;
  }
`;

const ActiveBlock = styled.div`
  max-width: 1440px;
  position: relative;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 102px 32px;
  gap: 24px;
  /* grid-template-columns: repeat(2, 1fr);

  @media (max-width: 1024px) {
    grid-template-columns: repeat(1, 1fr);
  } */

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

const ContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ActivityContents = styled(motion.div)<{ isTurnOnContents?: boolean }>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 450px;
  gap: 24px;
  border-radius: 16px;
  padding: 24px;
  background-color: ${({ isTurnOnContents }) =>
    isTurnOnContents ? 'lightgray' : 'lightslategray'};
  transition: 0.3s all ease-in-out;
  font-size: 44px;
  font-family: 600;
  cursor: pointer;

  :hover {
    opacity: ${({ isTurnOnContents }) => !isTurnOnContents && 0.8};
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

const ImageBlock = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  padding: 0;
  margin: 0;
  z-index: 0;
  border-radius: 12px;
  background-color: white;
  overflow: hidden;
`;

// const VideoBlock = styled.div`
//   position: absolute;
//   width: 100%;
//   height: 100%;
//   left: 0;
//   top: 0;
//   padding: 0;
//   margin: 0;
//   z-index: 0;
// `;

const SelectButton = styled(Button)`
  z-index: 10;
`;

const initialCategory = [
  {
    id: 1,
    name: 'football',
    isOpen: false,
  },
  {
    id: 2,
    name: 'baseball',
    isOpen: false,
  },
  {
    id: 3,
    name: 'tennis',
    isOpen: false,
  },
];

const ActivityHub: NextPageWithLayout = () => {
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [isTurnOnContents, setIsTurnOnContents] = useState(false);
  const [hoveredVideos, setHoveredVideos] = useState<string[]>([]);

  const router = useRouter();

  const {
    isOpen: isCreateOpen,
    onOpen: onCreateOpen,
    onClose: onCreateClose,
  } = useDisclosure();

  const { isLoading, isError, data } = useQuery(
    ['getChartData'],
    () => getCategoryInformation(),
    {
      refetchOnWindowFocus: false,
      keepPreviousData: true,
    },
  );

  const handleSelectContents = (title: string) => () => {
    if (title) {
      setCategory(title);
      router.push('/activities/football');
    }
  };

  const handleMouseEnter = (sports: string) => {
    setHoveredVideos((prev) => [...prev, sports]);
  };

  const handleMouseLeave = (sports: string) => {
    setHoveredVideos((prev) => prev.filter((item) => item !== sports));
  };

  useEffect(() => {
    console.log('data >', data);
  }, [data]);

  return (
    <Container>
      <ActiveBlock>
        <ContentsWrap>
          <p>
            If you fail to prepare, you&apos;ve prepared to fail. - Mark Spitz
          </p>
        </ContentsWrap>

        <ContentsWrapper>
          {data?.list.map((info, index) => (
            <ActivityContents
              key={`${info.title}-${index}`}
              isTurnOnContents={isTurnOnContents}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ease: 'easeOut', delay: 0.5 * index }}
            >
              <MyTeamImageBlock>
                <Image src={info.logo} alt={`${info.title}`} />
              </MyTeamImageBlock>

              <ImageBlock className="video-max-width">
                <HoverVideoPlayer
                  videoUrl={info.video as string}
                  postImage={info.image}
                  isHovered={hoveredVideos.includes(info.title)}
                />
              </ImageBlock>

              <ActivityInfoWrap>
                <ContentInfoWrap>Category Card</ContentInfoWrap>

                <SelectButton onClick={handleSelectContents(info.title)}>
                  선택
                </SelectButton>
              </ActivityInfoWrap>
            </ActivityContents>
          ))}
        </ContentsWrapper>
      </ActiveBlock>

      <AnimatePresence initial={false} onExitComplete={() => null}>
        {isCreateOpen && (
          <CreateTeamModal
            title="Create Team!"
            desc="Let's Create your Team!"
            buttonType="double"
            isOpen={isCreateOpen}
            onCancel={onCreateClose}
          />
        )}
      </AnimatePresence>
    </Container>
  );
};

ActivityHub.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default ActivityHub;
