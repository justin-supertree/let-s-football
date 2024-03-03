import React, { useEffect, useState } from 'react';
import { signIn, signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from '@emotion/styled';
import { Input } from '@chakra-ui/react';
import { AnimatePresence } from 'framer-motion';

import palette from '@/styles/palette';

import { kakaoUserLogin } from '@/api/auth';
import { IconGoogle, IconKakao } from '@/images';

import Button from '@/components/Button';
import BaseModal from '@/components/Modal/BaseModal';

const Container = styled.div`
  position: relative;
  color: white;
  height: 100%;
  font-size: 35px;
  font-weight: 800;
  background-color: #091442;
  overflow-y: scroll;
`;

const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  border: 1px solid white;
  background-color: #4562d6;
`;

const TitleBlock = styled.div`
  text-align: center;
`;

const Title1 = styled.p`
  font-size: 80px;
  font-weight: 800;
`;

const Title2 = styled.p`
  font-size: 40px;
  font-weight: 600;
`;

const FloatingButton = styled.div`
  position: fixed;
  right: 0;
  margin: 16px;
  padding: 16px;
  border-radius: 16px;
  background-color: red;
  cursor: pointer;
`;

const SocialLoginButtonBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  & > a {
    width: 100%;
  }
`;

const SocialLoginButton = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 12px;
  padding: 16px;
  border-radius: 8px;
  border: 2px solid ${palette.neutrals700};
  background-color: black;
  cursor: pointer;

  span {
    color: ${palette.neutrals900};
    font-family: Novarese;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: -0.4px;
    text-transform: uppercase;
  }
`;

const EmailLoginBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 16px;
  margin: 24px 0;
  border-radius: 12px;
  border: 2px solid black;
`;

const LoginInfoText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  font-family: Novarese;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  margin: 12px 0;

  & > p {
    white-space: pre;
  }
`;

const CustomButton = styled(Button)`
  width: 100%;
  margin: 24px 0;
`;

const LogoutButton = styled(Button)`
  width: 100%;
`;

const SignInTextBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
`;

const SignInText = styled.p`
  font-size: 14px;
  font-family: 400;
  color: aqua;
`;

const text = {
  kor: {
    title: 'MaestroPitch Login',
    desc: 'MembersPlus 서비스 이용을 위해 로그인 해주세요.',
    kakao: 'kakao로 계속',
    naver: 'naver로 계속',
    google: 'google로 계속',
  },
  eng: {
    title: 'MaestroPitch Login',
    desc: 'Please log in to use the MembersPlus service.',
    kakao: 'Continue with kakao',
    naver: 'Continue with naver',
    google: 'Continue with google',
  },
};

const SiteLanding = () => {
  const [isConfirmLogout, setIsConfirmLogout] = useState(false);
  const [isError, setIsError] = useState(false);

  const { data: session } = useSession();
  const router = useRouter();
  const { code } = router.query;

  const handleLogoutButton = () => {
    setIsConfirmLogout(false);
    signOut({ redirect: false });
    router.push('/');
  };

  const handleScrollToButton = () => {
    alert('click scroll button');
  };

  const handleKakaoLogin = async () => {
    try {
      console.log('!');
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (code) {
      console.log('code >', JSON.stringify(code));
      const codeString = JSON.stringify(code);
      // try {
      //   kakaoUserLogin({
      //     code,
      //     redirect: 'https://localhost:3000',
      //   });
      // } catch (error) {
      //   console.log(error);
      // }

      (async () => {
        const res = await kakaoUserLogin({
          code: codeString,
          redirect: '',
        });
        console.log('res >', res);

        // if (res?.error && !res.ok) {
        //   setIsError(true);
        //   return;
        // }
      })();

      // (async () => {
      //   alert('sign in 접근전 !');

      //   const res = await signIn('social-credentials', {
      //     code,
      //     redirect: false,
      //   });

      //   if (res?.error && !res.ok) {
      //     setIsError(true);
      //     return;
      //   }
      // })();
    }
  }, [code]);

  return (
    <Container>
      <FloatingButton onClick={handleScrollToButton}>To Bottom</FloatingButton>

      <Section>
        <TitleBlock>
          <Title1>반갑습니다</Title1>
          <Title2>마에스트로 피치에 오신것을 환영합니다.</Title2>
        </TitleBlock>
      </Section>

      <Section>
        <TitleBlock>
          <Title1>Section1</Title1>
          <Title2>열정과 협동심으로</Title2>
        </TitleBlock>
      </Section>

      <Section>
        <TitleBlock>
          <Title1>Section2</Title1>
          <Title2>나 자신의 마에스트로를 만들어보세요!</Title2>
        </TitleBlock>
      </Section>

      <Section>
        <TitleBlock>
          <Title1>Section2</Title1>
          <Title2>내가 만든팀의 마에스트로가 되어보세요!</Title2>
        </TitleBlock>
      </Section>

      <Section>
        <TitleBlock>
          <Title2>
            {session ? `마에스트로님 반갑습니다.` : '로그인을 진행해주세요!'}
          </Title2>

          {!session && (
            <div>
              <EmailLoginBlock>
                <LoginInfoText>
                  <p>이메일 :</p> <Input />
                </LoginInfoText>

                <LoginInfoText>
                  <p>비밀번호 :</p>
                  <Input />
                </LoginInfoText>

                <SignInTextBlock>
                  <SignInText>아이디/비밀번호찾기</SignInText>
                  <SignInText>회원가입</SignInText>
                </SignInTextBlock>
              </EmailLoginBlock>

              <SocialLoginButtonBlock>
                {/* <a
                  href={`https://kauth.kakao.com/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID}&redirect_uri=${process.env.NEXT_PUBLIC_URL}&response_type=code`}
                > */}
                {/* // https://kauth.kakao.com/oauth/authorize?client_id=a22d2982d2b7327e97be5ed6b847b42b&response_type=code&redirect_uri=https://maestro-api.patkid.kr/health */}

                <a
                  href={`https://kauth.kakao.com/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID}&redirect_uri=${process.env.NEXT_PUBLIC_URL}&response_type=code`}
                >
                  <SocialLoginButton>
                    <figure>
                      <IconKakao />
                    </figure>
                    <span>{text.kor.kakao}</span>
                  </SocialLoginButton>
                </a>
                {/* </a> */}

                {/* <a
                  href={`https://accounts.google.com/o/oauth2/v2/auth?access_type=offline&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email&include_granted_scopes=true&response_type=code&client_id=${process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}&redirect_uri=${process.env.NEXT_PUBLIC_URL}/callback/google`}
                >
                  <SocialLoginButton>
                    <figure>
                      <IconGoogle />
                    </figure>
                    <span>{text.kor.google}</span>
                  </SocialLoginButton>
                </a> */}
              </SocialLoginButtonBlock>
            </div>
          )}

          {session && (
            <div>
              <Link href="/activity-hub">
                <CustomButton variant="solid">Team Locker</CustomButton>
              </Link>

              <LogoutButton
                variant="ghost"
                onClick={() => setIsConfirmLogout(true)}
              >
                Logout
              </LogoutButton>
            </div>
          )}
        </TitleBlock>
      </Section>

      <AnimatePresence initial={false} onExitComplete={() => null}>
        {isConfirmLogout && (
          <BaseModal
            title="로그아웃 성공"
            desc="다음에 또 봐요~"
            buttonType="single"
            isOpen={isConfirmLogout}
            handleOpenModal={handleLogoutButton}
          />
        )}
      </AnimatePresence>
    </Container>
  );
};

export default SiteLanding;
