import { MouseEvent, useState } from 'react';
import { useRouter } from 'next/router';
import styled from '@emotion/styled';
import { Button } from '@chakra-ui/react';

import type { MeetingResponse } from '@/types/meeting';

type Props = {
  data?: MeetingResponse;
};

const GroupBlock = styled.div<{ isOpenDetail: boolean }>`
  width: 100%;
  height: ${({ isOpenDetail }) => (isOpenDetail ? '350px' : 'auto')};
  padding: 1rem;
  border: 1px solid white;
  background-color: ${({ isOpenDetail }) =>
    isOpenDetail ? 'lightgray' : 'white'};
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    border-bottom: 1px solid red;
    opacity: 0.6;
  }
`;

const GroupImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 250px;
  height: 250px;
  border-radius: 1rem;
  margin: auto;
`;

const GroupInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
  padding: 6px 0;
`;

const InfoDetailBlock = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const EnterButton = styled(Button)`
  width: 100px;
`;

const GroupTicket = ({ data }: Props) => {
  const [isContentDetail, setIsContentDetail] = useState(false);

  const router = useRouter();

  const handleContentDetailOpen = () => {
    setIsContentDetail((prevState) => !prevState);
  };

  const handleEnterDetail =
    (id?: number) => (e: MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();
      router.push(`/activities/football/detail/${id}`);
      console.log('handleEnterDetail >', id);
    };

  return (
    <>
      <GroupBlock
        role="button"
        isOpenDetail={isContentDetail}
        onClick={handleContentDetailOpen}
      >
        <GroupInfo>
          <InfoDetailBlock>
            <p>Ticket Id : </p>
            <p>{data && data.id}</p>
          </InfoDetailBlock>

          <InfoDetailBlock>
            <p>Team Name : </p>
            <p>{data && data.title}</p>
          </InfoDetailBlock>

          <InfoDetailBlock>
            <p>Members : </p>
            <p>{data && `${data.participants}/${data.participantsMax}`}</p>
          </InfoDetailBlock>

          <InfoDetailBlock>
            <p>Formation : </p>
            <p>{data && data.content?.formation.FORMATION_4231}</p>
          </InfoDetailBlock>

          <EnterButton variant="solid" onClick={handleEnterDetail(data?.id)}>
            입장
          </EnterButton>
        </GroupInfo>
      </GroupBlock>

      {/* {isDetailModal && (
        <GroupDetailModal
          isOpen={isDetailModal}
          data={data}
          title="Detail Info"
          desc="모임의 상제 정보입니다."
          handleOpenModal={() => setIsDetailModal(false)}
        />
      )} */}
    </>
  );
};

export default GroupTicket;
