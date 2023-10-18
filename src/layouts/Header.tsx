import React, { useState } from 'react';
import styled from '@emotion/styled';
import { Button } from '@chakra-ui/react';
import { AnimatePresence } from 'framer-motion';

import LoginModal from '@/components/Modal/LoginModal';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 99;
  width: 100%;
  height: 100px;
  padding: 0 16px;
  background-color: #0e1e5b;
`;

const LogoBlock = styled.div`
  border: 1px solid white;
`;

const ClickBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
`;

const LoginButton = styled(Button)``;

const Header = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const handleLoginToggle = () => {
    setIsLoginOpen(!isLoginOpen);
  };

  return (
    <>
      <Container>
        <LogoBlock>Logo</LogoBlock>

        <ClickBlock>
          <LoginButton>option1</LoginButton>
          <LoginButton onClick={handleLoginToggle}>Login</LoginButton>
        </ClickBlock>
      </Container>

      <AnimatePresence initial={false} onExitComplete={() => null}>
        {isLoginOpen && (
          <LoginModal
            isOpen={isLoginOpen}
            handleModalClose={handleLoginToggle}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
