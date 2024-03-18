import styled from '@emotion/styled';
import { motion } from 'framer-motion';

import Backdrop from './Backdrop';

type Props = {
  isOpen: boolean;
  children: React.ReactNode;
  onClose: () => void;
};

const ModalBlock = styled(motion.div)`
  margin: auto;
  text-align: center;
  border-radius: 8px;
  max-width: 90%;
  background-color: black;

  @media screen and (min-width: 768px) {
    max-width: 80%;
  }
`;

const dropIn = {
  hidden: {
    opacity: 0,
  },
  visible: {
    y: '0',
    opacity: 1,
    transition: {
      duration: 0.1,
      type: 'spring',
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    opacity: 0,
  },
};

const Modal = ({ children, isOpen, onClose }: Props) => {
  const handleContentClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    e.stopPropagation();
  };

  return (
    <Backdrop onClose={onClose}>
      <ModalBlock onClick={handleContentClick} variants={dropIn}>
        {children}
      </ModalBlock>
    </Backdrop>
  );
};

export default Modal;
