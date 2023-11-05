import Image, { StaticImageData } from 'next/image';
import styled from '@emotion/styled';

const Container = styled.div`
  position: relative;
`;

const ImageBlock = styled.div`
  height: max-content;
  border-radius: 12px;

  & > img {
    max-height: 445px;
    object-fit: cover;
    opacity: 0.8;
    border-radius: 12px;
  }

  & > video {
    max-height: 445px;
    object-fit: cover;
    opacity: 0.8;
    border-radius: 12px;
  }
`;

type Props = {
  videoUrl: string;
  postImage: StaticImageData;
  isHovered: boolean;
};

const HoverVideoPlayer = ({ videoUrl, postImage, isHovered }: Props) => (
  <Container>
    {isHovered ? (
      <video
        autoPlay
        loop
        width="100%"
        height="450px"
        style={{ top: 0, bottom: 0, maxHeight: '445px' }}
      >
        <source src={videoUrl} type="video/mp4" />
      </video>
    ) : (
      <ImageBlock>
        <Image src={postImage} alt="sports-poster-img" layout="responsive" />
      </ImageBlock>
    )}
  </Container>
);

export default HoverVideoPlayer;
