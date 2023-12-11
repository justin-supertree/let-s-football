import styled from '@emotion/styled';

import Button from '../Button';
import Modal from './InfoModal';
import { useRouter } from 'next/router';

type Props = {
  title: string;
  desc: string;
  data?: {
    id: number;
    teamName: string;
    footballType: string;
    teamMember: number;
    trainingPlace: string;
    formation: string;
    image: string;
  };
  isOpen: boolean;
  handleOpenModal: () => void;
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: 450px;
  height: 100%;
  border-radius: 1rem;
  overflow: hidden;
  overflow-y: auto;
  background-color: lightskyblue;
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
  width: 100%;
  padding: 16px 0px;
  font-family: Noto Sans KR;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  border-top: 1px solid #444;
  border-radius: 0;
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
  border-radius: 8px 8px 0 0;
  border-bottom: none;
`;

const ModalTitle = styled.p`
  font-family: Noto Sans KR;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 26px;
  color: black;
  text-align: left;
`;

const ModalDescription = styled.p`
  font-family: Noto Sans KR;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px;
  text-align: left;
  color: black;
`;

const DetailInfoBlock = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 2rem;
`;

const InfoImage = styled.div`
  width: 150px;
  height: 150px;
  background-color: white;
  border-radius: 1rem;
`;

const GroupInfo = styled.div`
  margin-top: 0.5rem;
  font-size: 16px;
  color: black;
`;

const InfoDetailBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 6px 0;
`;

const GroupDetailModal = ({
  data,
  title,
  desc,
  isOpen,
  handleOpenModal,
}: Props) => {
  const router = useRouter();

  const handleRouteDetail = () => {
    handleOpenModal();
    router.push(`/activities/football/detail/${data?.id}`);
  };

  return (
    <Modal isOpen={isOpen} handleOpenModal={handleOpenModal}>
      <Container>
        <TextBox>
          <ModalTitle>{title}</ModalTitle>
          <ModalDescription>{desc}</ModalDescription>

          <DetailInfoBlock>
            <InfoImage>Image</InfoImage>

            <GroupInfo>
              <InfoDetailBlock>
                <p>Ticket Id : </p>
                <p>{data && data.id}</p>
              </InfoDetailBlock>

              <InfoDetailBlock>
                <p>Team Name : </p>
                <p>{data && data.teamName}</p>
              </InfoDetailBlock>

              <InfoDetailBlock>
                <p>Members : </p>
                <p>{data && `${data.teamMember}/11`}</p>
              </InfoDetailBlock>

              <InfoDetailBlock>
                <p>Formation : </p>
                <p>{data && data.formation}</p>
              </InfoDetailBlock>
            </GroupInfo>
          </DetailInfoBlock>
        </TextBox>

        <ButtonBox>
          <DoubleButton
            isLeft={false}
            size="sm"
            variant="ghost"
            onClick={handleOpenModal}
          >
            취소
          </DoubleButton>

          <DoubleButton
            onClick={handleRouteDetail}
            isLeft={true}
            size="sm"
            variant="ghost"
          >
            참여하기
          </DoubleButton>
        </ButtonBox>
      </Container>
    </Modal>
  );
};

export default GroupDetailModal;
