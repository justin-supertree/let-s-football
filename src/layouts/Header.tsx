import { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import styled from '@emotion/styled';
import { Button, useDisclosure } from '@chakra-ui/react';
import { AnimatePresence } from 'framer-motion';
import { signIn, signOut, useSession } from 'next-auth/react';

import { clearCategory, getCategory } from '@/lib/util';
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

const LogoBlock = styled.div<{ isActive?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 120px;
  height: 45px;
  font-size: 24px;
  font-weight: 900;
  color: ${({ isActive }) => (isActive ? 'red' : '')};
  transition: 0.2s all ease-in-out;
  cursor: pointer;

  & > img {
    border-radius: 12px;
  }

  &:hover {
    color: brown;
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
  const [isError, setIsError] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRedirectModalOpen, setIsRedirectModalOpen] = useState(false);

  const { data: session } = useSession();
  const router = useRouter();
  const category = getCategory();
  const accessToken = session?.accessToken;
  const { code } = router.query;

  const currentPage = useMemo(() => {
    return (
      router.asPath.includes('/activities') ||
      router.asPath.includes('/activity-hub')
    );
  }, [router.asPath]);

  const {
    isOpen: isLogoutOpen,
    onOpen: onLogoutOpen,
    onClose: onLogoutClose,
  } = useDisclosure();

  const handleLogoutButton = () => {
    onLogoutClose();
    signOut({ redirect: false });
    router.replace('/');
  };

  const handleRouterPage = (page: string) => () => {
    router.push(page);
  };

  const handleLoginToggle = () => {
    setIsLoginOpen(!isLoginOpen);
  };

  const handleUserDataInfo = useMemo(
    () => async () => {
      if (accessToken) {
        try {
          await userInformation({ token: accessToken, snsType: 'kakao' });
        } catch (error) {
          console.log(error);
        }
      }
    },
    [accessToken],
  );

  useEffect(() => {
    handleUserDataInfo();
  }, [handleUserDataInfo]);

  useEffect(() => {
    if (code) {
      (async () => {
        const res = await signIn('kakao-credentials', {
          code,
          redirect: false,
        });
        clearCategory();

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
          <LogoBlock onClick={handleRouterPage('/')}>
            <Image src={MainLogo} alt="main-logo" />
          </LogoBlock>
          <LogoBlock onClick={handleRouterPage('/activity-hub')}>
            종목
          </LogoBlock>

          <LogoBlock onClick={handleRouterPage(`/activities/${category}`)}>
            팀현황
          </LogoBlock>
        </RoutingBlock>

        <ClickBlock>
          {session ? (
            <HeaderLoginBlock>
              <UserInfoText>
                로그인 이메일 :{' '}
                {session.user.usersInfo.email
                  ? session.user.usersInfo.email
                  : '사용자'}
              </UserInfoText>

              <WebSignButton onClick={onLogoutOpen}>LOGOUT</WebSignButton>
            </HeaderLoginBlock>
          ) : (
            <LoginButton onClick={handleLoginToggle}>Login</LoginButton>
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

        {isLogoutOpen && (
          <BaseModal
            title="로그아웃 성공"
            desc="다음에 또 봐요~"
            buttonType="single"
            isOpen={isLogoutOpen}
            onClose={handleLogoutButton}
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
