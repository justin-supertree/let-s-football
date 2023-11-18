import styled from '@emotion/styled';
import Image from 'next/image';

import EmptyField from '@/images/soccer-field-empty.png';

const StrategicTableBlock = styled.div`
  position: relative;
  height: 100%;
  overflow: hidden;
`;

const StrategicBoard = styled.div`
  height: 650px;
  z-index: 10;

  & > img {
    width: 100%;
    max-height: 640px;
    min-height: 640px;
  }
`;
const PositionAreaBlock = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
`;

const ForwardBlock = styled.div`
  width: 100%;
  height: 25%;
  padding: 2rem;
  transition: all 0.2s ease-in-out;
  z-index: 0;

  &:hover {
    border: 3px solid red;
  }
`;

const MidFieldBlock = styled.div`
  width: 100%;
  height: 35%;
  padding: 2rem;
  z-index: 0;
  transition: all 0.2s ease-in-out;

  &:hover {
    border: 3px solid mintcream;
  }
`;

const DefenceBlock = styled.div`
  width: 100%;
  height: 30%;
  padding: 2rem;
  z-index: 0;
  transition: all 0.2s ease-in-out;

  &:hover {
    border: 3px solid blue;
  }
`;

const GoaleKipperBlock = styled.div`
  width: 100%;
  height: 10%;
  padding: 1rem 2rem;
  z-index: 0;
  transition: all 0.2s ease-in-out;

  &:hover {
    border: 3px solid yellow;
  }
`;

const FormationTable = () => {
  return (
    <StrategicTableBlock>
      <StrategicBoard>
        <Image src={EmptyField} alt="football-442" objectFit="contain" />
        <PositionAreaBlock>
          <ForwardBlock>ST</ForwardBlock>
          <MidFieldBlock>MD</MidFieldBlock>
          <DefenceBlock>DF</DefenceBlock>
          <GoaleKipperBlock>GK</GoaleKipperBlock>
        </PositionAreaBlock>
      </StrategicBoard>
    </StrategicTableBlock>
  );
};

export default FormationTable;
