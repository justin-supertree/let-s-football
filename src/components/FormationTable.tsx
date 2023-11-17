import React from 'react';
import styled from '@emotion/styled';
import Image from 'next/image';

import FourFourTwo from '@/images/football-442.png';

const StrategicTableBlock = styled.div`
  width: 60%;
  height: 100%;
  border: 1px solid lightpink;
`;

const BlockTitle = styled.p`
  font-size: 32px;
  font-weight: 800;
  margin-bottom: 26px;
`;

const StrategicBoard = styled.div`
  width: 100%;
  height: 100%;

  & > img {
    object-fit: contain;
  }
`;

const FormationTable = () => {
  return (
    <StrategicTableBlock>
      <BlockTitle>strategic table</BlockTitle>

      <div>
        <StrategicBoard>
          <Image src={FourFourTwo} alt="football-442" />
        </StrategicBoard>
      </div>
    </StrategicTableBlock>
  );
};

export default FormationTable;
