import styled from '@emotion/styled';

import Button from '../Button';
import Modal from '.';

type Props = {
  title: string;
  desc?: string;
  buttonType?: 'single' | 'double';
  isOpen: boolean;
  handleLogout?: () => void;
  handleOpenModal: () => void;
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: 450px;
  height: 100%;
  overflow: hidden;
  overflow-y: auto;
`;

const ButtonBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const DoubleButton = styled(Button)<{
  isLeft?: boolean;
  isRight?: boolean;
}>`
  width: 193px;
  padding: 16px 0px;
  font-family: Noto Sans KR;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  border-radius: ${({ isLeft }) =>
    isLeft ? '0px 0px 0px 8px' : '0px 0px 8px 0px '};
  border: 1px solid #444;
  border-right: ${({ isLeft }) => isLeft && 'none'};
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

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  font-size: 24px;
  font-weight: 600;
  padding: 32px 24px;
  gap: 8px;
  color: white;
  border: 1px solid var(--secondary-01, #444);
  border-radius: 8px 8px 0 0;
  border-bottom: none;
`;

const ModalTitle = styled.p`
  font-family: Noto Sans KR;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 26px; /* 130% */
`;

const ModalDescription = styled.p`
  font-family: Noto Sans KR;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px;
`;

const CreateTeamModal = ({
  title,
  desc,
  buttonType,
  isOpen,
  handleLogout,
  handleOpenModal,
}: Props) => {
  return (
    <Modal isOpen={isOpen} handleOpenModal={handleOpenModal}>
      <Container>
        <TextBox>
          <ModalTitle>{title}</ModalTitle>
          <ModalDescription>{desc}</ModalDescription>
        </TextBox>

        <div>
          <p>We are waiting for you make New Team!</p>
        </div>

        {buttonType === 'double' && (
          <ButtonBox>
            <DoubleButton
              isLeft={true}
              size="sm"
              variant="ghost"
              onClick={handleLogout}
            >
              확인
            </DoubleButton>
            <DoubleButton
              isLeft={false}
              size="sm"
              variant="ghost"
              onClick={handleOpenModal}
            >
              취소
            </DoubleButton>
          </ButtonBox>
        )}

        {buttonType === 'single' && (
          <ButtonBox>
            <ModalButton
              isLeft={true}
              size="sm"
              buttonType={buttonType === 'single'}
              variant="ghost"
              onClick={handleOpenModal}
            >
              확인
            </ModalButton>
          </ButtonBox>
        )}
      </Container>
    </Modal>
  );
};

export default CreateTeamModal;
