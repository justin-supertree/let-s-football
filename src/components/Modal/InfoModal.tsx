import styled from '@emotion/styled';
import { motion } from 'framer-motion';

import InfoBackdrop from './InfoBackdrop';

type Props = {
  isOpen: boolean;
  children: React.ReactNode;
  handleOpenModal: () => void;
};

const ModalBlock = styled(motion.div)`
  margin: auto;
  text-align: center;
  border-radius: 8px;
  max-width: 90%;
  background-color: #000000;

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

const InfoModal = ({ children, isOpen, handleOpenModal }: Props) => {
  const handleContentClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    e.stopPropagation();
  };

  return (
    <InfoBackdrop handleOpenModal={handleOpenModal}>
      <ModalBlock onClick={handleContentClick} variants={dropIn}>
        {children}
      </ModalBlock>
    </InfoBackdrop>
  );
};

export default InfoModal;
