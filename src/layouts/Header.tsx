import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import styled from '@emotion/styled';
import { Button } from '@chakra-ui/react';
import { AnimatePresence } from 'framer-motion';
import { signIn, signOut, useSession } from 'next-auth/react';

import { userInformation } from '@/api/user';

import BaseModal from '@/components/Modal/BaseModal';
import LoginModal from '@/components/Modal/LoginModal';
import RedirectModal from '@/components/Modal/RedirectModal';

import MainLogo from '@/images/main-logo.png';

const Container = styled.div`
  position: sticky;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 99;
  width: 100%;
  height: 100px;
  top: 0;
  padding: 0 16px;
  background-color: transparent;
`;

const RoutingBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
`;

const LogoBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 120px;
  height: 45px;
  font-size: 24px;
  font-weight: 900;
  color: black;
  transition: 0.2s all ease-in-out;

  & > img {
    border-radius: 12px;
  }

  :hover {
    color: red;
  }
`;

const ClickBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
`;

const HeaderLoginBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
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
`;

const UserInfoText = styled.p`
  font-family: Sweet Sans Pro;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  color: black;
  white-space: pre;
`;

const WebSignButton = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
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
  const [isConfirmLogout, setIsConfirmLogout] = useState(false);
  const [isRedirectModalOpen, setIsRedirectModalOpen] = useState(false);
  const [isError, setIsError] = useState(false);

  const { data: session } = useSession();
  const accessToken = session?.accessToken;

  const handleLogoutButton = () => {
    setIsConfirmLogout(false);
    signOut({ redirect: false });
    router.push('/');
  };

  const handleLoginToggle = () => {
    setIsLoginOpen(!isLoginOpen);
  };

  const router = useRouter();
  const { code } = router.query;

  const handleUserDataInfo = async () => {
    if (accessToken) {
      try {
        console.log('handleUserDataInfo', accessToken);
        await userInformation({ token: accessToken, snsType: 'kakao' });
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    handleUserDataInfo();
  }, []);

  useEffect(() => {
    if (code) {
      (async () => {
        const res = await signIn('kakao-credentials', {
          code,
          redirect: false,
        });

        if (res?.error && !res.ok) {
          setIsError(true);
          return;
        }
      })();
    }
  }, [code]);

  return (
    <>
      <Container>
        <RoutingBlock>
          <Link href="/">
            <LogoBlock>
              <Image src={MainLogo} alt="main-logo" />
            </LogoBlock>
          </Link>
          <Link href="/activity-hub">
            <LogoBlock>종목</LogoBlock>
          </Link>

          <Link href={`/activities/football`}>
            <LogoBlock>팀현황</LogoBlock>
          </Link>
        </RoutingBlock>

        <ClickBlock>
          {session ? (
            <HeaderLoginBlock>
              <UserInfoText>
                <span>
                  로그인 이메일 :{' '}
                  {session.user.email ? session.user.email : '사용자'}
                </span>
              </UserInfoText>

              <WebSignButton onClick={() => setIsConfirmLogout(true)}>
                LOGOUT
              </WebSignButton>
            </HeaderLoginBlock>
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

        {isConfirmLogout && (
          <BaseModal
            title="로그아웃 성공"
            desc="다음에 또 봐요~"
            buttonType="single"
            isOpen={isConfirmLogout}
            handleOpenModal={handleLogoutButton}
          />
        )}

        {isError && (
          <RedirectModal
            isOpen={isRedirectModalOpen}
            handleOpenModal={() => setIsRedirectModalOpen((prev) => !prev)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
