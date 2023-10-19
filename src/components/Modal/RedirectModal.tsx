import Link from 'next/link';
import styled from '@emotion/styled';
import palette from '@/styles/palette';

import Button from '../Button';
import Modal from '.';
import Image from '../Image';

type Props = {
  isOpen: boolean;
  buttonType?: 'single' | 'dubble';
  handleOpenModal: () => void;
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 450px;
  height: 100%;
  overflow: hidden;
  overflow-y: auto;

  @media screen and (min-height: 500px) {
    height: auto;
  }
`;

const TitleBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  padding: 24px;
  gap: 0.5rem;
`;

const Title = styled.p`
  max-width: 230px;
  color: ${palette.neutrals100};
  font-family: Noto Sans KR;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 44px;
  letter-spacing: -0.5px;

  @media screen and (min-width: 768px) {
    max-width: none;
  }
`;

const Desc = styled.p`
  color: ${palette.neutrals400};
  font-family: Noto Sans KR;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.4px;
`;

const ImageBlock = styled.div`
  position: relative;
  height: 111.875px;

  & > img {
    object-fit: cover;
    width: 386px;
    height: 100%;
  }
`;

const ButtonBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalButton = styled(Button)<{
  isLeft?: boolean;
  isRight?: boolean;
  buttonType: boolean;
}>`
  width: 100%;
  padding: 16px 0px;
  font-family: Noto Sans KR;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  border-radius: 0px 0px 8px 8px;
  border: 1px solid #444;
`;

const RedirectModal = ({ isOpen, buttonType, handleOpenModal }: Props) => {
  const text = {
    kor: {
      title: '미인증 이메일',
      desc: '미인증 이메일입니다, 다시 로그인해주세요.',
      confirm: '확인',
    },
    eng: {
      title: 'Unauthenticated Email',
      desc: 'This is an unauthenticated email, please log in again.',
      confirm: 'Confirm',
    },
  };

  return (
    <Modal isOpen={isOpen} handleOpenModal={() => isOpen && handleOpenModal}>
      <Container>
        <TitleBlock>
          <Title>text[language].title</Title>
        </TitleBlock>
        <Desc>text[language].desc</Desc>

        <ImageBlock>
          <Image src="main-content.png" alt="main-content" />
        </ImageBlock>

        <ButtonBox>
          <Link href="/">
            <ModalButton
              isLeft={true}
              size="sm"
              buttonType={buttonType === 'single'}
              variant="ghost"
              onClick={handleOpenModal}
            >
              text[language].confirm
            </ModalButton>
          </Link>
        </ButtonBox>
      </Container>
    </Modal>
  );
};

export default RedirectModal;
