// Video.tsx

import { useEffect, useRef, useState } from 'react';

type Props = {
  videoUrl: string;
};

const HoverVideoPlayer = ({ videoUrl }: Props) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      if (isHovered) {
        videoRef.current.play(); // 마우스 오버 시 동영상 재생
      } else {
        videoRef.current.pause(); // 마우스 아웃 시 동영상 일시정지
        videoRef.current.currentTime = 0; // 동영상을 처음으로 되감기
      }
    }
  }, [isHovered]);

  return (
    <video
      ref={videoRef}
      autoPlay={true}
      muted={true}
      loop={true}
      style={{ width: '100%', height: '100%' }}
      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
    >
      <source src={videoUrl} type="video/mp4" />
    </video>
  );
};

export default HoverVideoPlayer;
