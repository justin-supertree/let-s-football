import { useState } from 'react';

type Props = {
  videoUrl: string;
};
const HoverVideoPlayer = ({ videoUrl }: Props) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ position: 'relative', width: '100%', height: '100%' }}
    >
      {isHovered && (
        <video autoPlay muted loop style={{ width: '100%', height: '100%' }}>
          <source src={videoUrl} type="video/mp4" />
        </video>
      )}
    </div>
  );
};

export default HoverVideoPlayer;
