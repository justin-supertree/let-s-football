import React from 'react';
import styled from '@emotion/styled';

const CurrentPlayerTableBlock = styled.div`
  width: 30%;
  height: 100%;
  padding: 2rem 1rem;
  border-left: 1px solid white;
  overflow-y: auto;
`;

const PlayerColumnBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  border: 1px solid;
  border-radius: 12px;
  padding: 1rem;
`;

const PlayerImg = styled.div`
  min-width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: lightcyan;
`;

const DetailContainer = styled.div`
  width: 100%;
`;

const DetailInfoBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid;
  font-size: 24px;
`;

const DetailSelectBox = styled.div`
  width: 100%;
  height: 70px;
  border: 1px solid;
`;

const PlayerAddTable = () => {
  return (
    <CurrentPlayerTableBlock>
      <PlayerColumnBlock>
        <PlayerImg />

        <DetailContainer>
          <DetailInfoBlock>
            <DetailSelectBox>이름(나이)</DetailSelectBox>
            <DetailSelectBox>등번호</DetailSelectBox>
          </DetailInfoBlock>

          <DetailInfoBlock>
            <DetailSelectBox>포지션</DetailSelectBox>
            <DetailSelectBox>주발(좌/우)</DetailSelectBox>
            <DetailSelectBox>(공격/수비) 타입</DetailSelectBox>
          </DetailInfoBlock>
        </DetailContainer>
      </PlayerColumnBlock>
    </CurrentPlayerTableBlock>
  );
};

export default PlayerAddTable;
