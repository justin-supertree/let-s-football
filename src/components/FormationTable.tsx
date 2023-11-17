import React from 'react';
import styled from '@emotion/styled';
import Image from 'next/image';

import EmptyField from '@/images/soccer-field-empty.png';

const StrategicTableBlock = styled.div`
  position: relative;
  height: 100%;
  border: 1px solid lightpink;
  overflow: hidden;
`;

const StrategicBoard = styled.div`
  height: 650px;

  & > img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const FormationTable = () => {
  return (
    <StrategicTableBlock>
      <StrategicBoard>
        <Image src={EmptyField} alt="football-442" objectFit="contain" />
      </StrategicBoard>
    </StrategicTableBlock>
  );
};

export default FormationTable;
