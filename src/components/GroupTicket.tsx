import styled from '@emotion/styled';
import Image from 'next/image';

import Button from '@/components/Button';
import { useState } from 'react';
import GroupDetailModal from './Modal/GroupDetailModal';

const GroupBlock = styled.div`
  width: 300px;
  height: 450px;
  padding: 1rem;
  border: 1px solid;
  border-radius: 1rem;
  background-color: wheat;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    border: 1px solid red;
    opacity: 0.9;
  }
`;

const GroupImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 250px;
  height: 250px;
  border-radius: 1rem;
  background-color: lightgray;
  margin: auto;
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

const EnterButton = styled(Button)`
  width: 100%;
`;

const GroupTicket = () => {
  const [isDetailModal, setIsDetailModal] = useState(false);
  const handleDetailModalOpen = () => {
    setIsDetailModal(!isDetailModal);
  };
  return (
    <>
      <GroupBlock onClick={handleDetailModalOpen}>
        <GroupImage>Image</GroupImage>

        <GroupInfo>
          <InfoDetailBlock>
            <p>Team Name : </p>
            <p>aaa</p>
          </InfoDetailBlock>

          <InfoDetailBlock>
            <p>Members : </p>
            <p>(1/10)</p>
          </InfoDetailBlock>

          <InfoDetailBlock>
            <p>Formation : </p>
            <p>433</p>
          </InfoDetailBlock>

          <EnterButton variant="ghost">입장</EnterButton>
        </GroupInfo>
      </GroupBlock>

      {isDetailModal && (
        <GroupDetailModal
          isOpen={isDetailModal}
          title="Detail Info"
          desc="모임의 상제 정보입니다."
          handleOpenModal={() => setIsDetailModal(false)}
        />
      )}
    </>
  );
};

export default GroupTicket;
