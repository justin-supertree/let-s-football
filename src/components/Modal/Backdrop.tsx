import styled from '@emotion/styled';
import { motion } from 'framer-motion';

type BackdropProps = {
  children: React.ReactNode;
  onClose: () => void;
};

const Container = styled(motion.div)`
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
  background-color: #131313;
  overflow-y: hidden;
  z-index: 99;
`;

const Backdrop = ({ children, onClose }: BackdropProps) => {
  return (
    <Container
      onClick={onClose}
      className="backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </Container>
  );
};

export default Backdrop;
