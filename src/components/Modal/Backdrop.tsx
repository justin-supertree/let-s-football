import styled from '@emotion/styled';
import { motion } from 'framer-motion';

import { getBackground } from '@/styles/bgcolor';

type BackdropProps = {
  bgColor?: string;
  children: React.ReactNode;
  onClose: () => void;
};

const Container = styled(motion.div)<{ bgColor?: string }>`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: ${({ bgColor }) => getBackground(bgColor)};
  overflow-y: hidden;
  z-index: 99;
`;

const Backdrop = ({ bgColor, children, onClose }: BackdropProps) => {
  return (
    <Container
      onClick={onClose}
      className="backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      bgColor={bgColor}
    >
      {children}
    </Container>
  );
};

export default Backdrop;
