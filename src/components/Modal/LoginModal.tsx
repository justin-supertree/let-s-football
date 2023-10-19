import styled from '@emotion/styled';
import { MdClose } from 'react-icons/md';

import palette from '@/styles/palette';

import Modal from '.';
import { IconGoogle, IconKakao } from '@/images';

type Props = {
  isOpen: boolean;
  handleModalClose: () => void;
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 450px;
  height: 100%;
  padding: 2rem;
  gap: 2rem;
  overflow: hidden;
  overflow-y: auto;
  z-index: 0;

  @media screen and (min-height: 500px) {
    height: auto;
  }
`;

const TitleBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 0.5rem;
`;

const Title = styled.p`
  max-width: 200px;
  color: ${palette.neutrals100};
  font-family: Novarese;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 44px;
  letter-spacing: -0.5px;
  font-weight: 800;

  @media screen and (min-width: 768px) {
    max-width: none;
  }
`;

const CloseButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  outline: none;
  background-color: transparent;
  border-radius: 69.444px;
  border: 2px solid ${palette.neutrals300};
  transition: all 0.12s ease-in-out;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

const Desc = styled.p`
  color: ${palette.neutrals400};
  font-family: Novarese;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.4px;
`;

const SocialLoginButtonBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  & > a {
    width: 100%;
  }
`;

const SocialLoginButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 12px;
  padding: 16px;
  border-radius: 8px;
  border: 2px solid ${palette.neutrals700};
  background-color: inherit;
  cursor: pointer;
  transition: all 0.12s ease-in-out;

  &:hover {
    background: ${palette.neutrals700};
  }

  span {
    color: ${palette.neutrals400};
    font-family: Novarese;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: -0.4px;
    text-transform: uppercase;
  }
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

const LoginModal = ({ isOpen, handleModalClose }: Props) => {
  return (
    <Modal isOpen={isOpen} handleOpenModal={handleModalClose}>
      <Container>
        <TitleBlock>
          <Title>{text.kor.title}</Title>
          {/* <CloseButton type="button" onClick={handleModalClose}>
            <MdClose size={24} color="white" />
          </CloseButton> */}
        </TitleBlock>
        <Desc>{text.kor.desc}</Desc>
        <SocialLoginButtonBlock>
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

          <a
            href={`https://accounts.google.com/o/oauth2/v2/auth?access_type=offline&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email&include_granted_scopes=true&response_type=code&client_id=${process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}&redirect_uri=${process.env.NEXT_PUBLIC_URL}/callback/google`}
          >
            <SocialLoginButton>
              <figure>
                <IconGoogle />
              </figure>
              <span>{text.kor.google}</span>
            </SocialLoginButton>
          </a>
        </SocialLoginButtonBlock>
      </Container>
    </Modal>
  );
};

export default LoginModal;
