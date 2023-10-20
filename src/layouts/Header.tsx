import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { Button } from '@chakra-ui/react';
import { AnimatePresence } from 'framer-motion';

import LoginModal from '@/components/Modal/LoginModal';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import RedirectModal from '@/components/Modal/RedirectModal';

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

const WalletAddress = styled.p`
  max-width: 50px;
  font-family: Sweet Sans Pro;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.28px;
  color: var(--Color-White, #fff);
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: right;
  font-feature-settings: 'case' on;

  @media screen and (min-width: 1024px) {
    max-width: 150px;
  }
`;

const WalletBlock = styled.div`
  display: flex;
  align-items: end;
  gap: 24px;
  cursor: pointer;
`;

const WebSignButton = styled(Button)`
  display: none;

  @media screen and (min-width: 1024px) {
    display: block;
    flex-direction: column;
    width: fit-content;
    padding: 4px 16px;
    font-family: Sweet Sans Pro;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: -0.28px;
    border-radius: 6px;
    border: 1px solid var(--secondary-04, transparent);
    background: var(--secondary-01, #444);
  }

  color: var(--primary-white, var(--Color-White, #fff));
`;

const LoginBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  background-color: #444444;
  border-radius: 4px;
  cursor: pointer;

  @media screen and (min-width: 1024px) {
    display: none;
  }
`;

const LoginButton = styled(Button)``;

const Header = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRedirectModalOpen, setIsRedirectModalOpen] = useState(false);
  const [isError, setIsError] = useState(false);

  const { data: session } = useSession();

  const handleLoginToggle = () => {
    setIsLoginOpen(!isLoginOpen);
  };

  const router = useRouter();
  const { code } = router.query;
  const { status } = useSession();

  // useEffect(() => {
  //   console.log('code >', code);
  //   if (code) {
  //     router.push(`/callback/kakao?code=${code}`);
  //   }
  // }, [code, router]);

  useEffect(() => {
    if (code) {
      (async () => {
        const res = await signIn('kakao-credentials', {
          code,
          redirect: false,
        });
        console.log('res >', res);

        if (res && !res.ok) {
          setIsError(true);
          return;
        }
      })();
    }
  }, [code]);

  return (
    <>
      <Container>
        <LogoBlock>Logo</LogoBlock>

        <ClickBlock>
          <LoginButton>option1</LoginButton>

          {session ? (
            <WalletAddress>
              <WalletBlock>
                <WalletAddress>{session?.userInfo.email}</WalletAddress>
              </WalletBlock>

              <WebSignButton onClick={handleLoginToggle}>LOGOUT</WebSignButton>

              <LoginBlock onClick={handleLoginToggle}>
                {/* <IconUserLogout width="24px" height="24px" /> */}
                IconUserLogout
              </LoginBlock>
            </WalletAddress>
          ) : (
            <div>
              <LoginButton onClick={handleLoginToggle}>Login</LoginButton>
            </div>
          )}
        </ClickBlock>
      </Container>

      <AnimatePresence initial={false} onExitComplete={() => null}>
        {isLoginOpen && (
          <LoginModal
            isOpen={isLoginOpen}
            handleModalClose={handleLoginToggle}
          />
        )}

        {/* {isError && (
          <RedirectModal
            isOpen={isRedirectModalOpen}
            handleOpenModal={() => setIsRedirectModalOpen((prev) => !prev)}
          />
        )} */}
      </AnimatePresence>
    </>
  );
};

export default Header;
