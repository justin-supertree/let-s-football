import React from 'react';
import styled from '@emotion/styled';
import Image from 'next/image';
import { Tooltip } from '@chakra-ui/react';

import { formationData } from '@/data';

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
  border: 3px solid rgba(255, 0, 0, 0);

  &:hover {
    border: 3px solid red;
  }
`;

const MidFieldBlock = styled.div`
  width: 100%;
  height: 30%;
  padding: 2rem;
  z-index: 0;
  transition: all 0.2s ease-in-out;
  border: 3px solid rgba(255, 0, 0, 0);

  &:hover {
    border: 3px solid lightgreen;
  }
`;

const DefenceBlock = styled.div`
  width: 100%;
  height: 30%;
  padding: 2rem;
  z-index: 0;
  transition: all 0.2s ease-in-out;
  border: 3px solid rgba(255, 0, 0, 0);

  &:hover {
    border: 3px solid blue;
  }
`;

const GridBox = styled.div<{ formationCount: number }>`
  display: grid;
  grid-template-columns: repeat(${({ formationCount }) => formationCount}, 1fr);
`;

const GoalKipperBlock = styled.div`
  width: 100%;
  padding: 1rem 2rem;
  z-index: 0;
  transition: all 0.2s ease-in-out;
  border: 3px solid rgba(255, 0, 0, 0);

  &:hover {
    border: 3px solid yellow;
  }
`;

const PlayerIcon = styled.div<{ colors: string }>`
  width: 50px;
  height: 50px;
  margin: auto;
  border-radius: 50%;
  background-color: ${({ colors }) => colors};
`;

type PositionProps = {
  positionData: {
    position: string;
    position_fullName: string;
    color: string;
  }[];
};

const PositionArea = ({ positionData }: PositionProps) => {
  return (
    <GridBox formationCount={positionData.length}>
      {positionData &&
        positionData.map((position, index) => (
          <Tooltip
            width="100%"
            maxWidth="600px"
            backgroundColor="white"
            color="black"
            fontSize={16}
            fontWeight={600}
            padding={2}
            borderRadius={8}
            label={position.position}
            placement="bottom-start"
            key={`${position.position}-${index}`}
          >
            <PlayerIcon colors={position.color} />
          </Tooltip>
        ))}
    </GridBox>
  );
};

const FormationTable = () => {
  return (
    <StrategicTableBlock>
      <StrategicBoard>
        <Image src={EmptyField} alt="football-442" objectFit="contain" />
        <PositionAreaBlock>
          <ForwardBlock>
            <p>ST</p>
            <PositionArea positionData={formationData.striker} />
          </ForwardBlock>

          <MidFieldBlock>
            <p>MD</p>
            <PositionArea positionData={formationData.midfield} />
          </MidFieldBlock>

          <DefenceBlock>
            <p>DF</p>
            <PositionArea positionData={formationData.defence} />
          </DefenceBlock>

          <GoalKipperBlock>
            <p>GK</p>
            <PositionArea positionData={formationData.goalKipper} />
          </GoalKipperBlock>
        </PositionAreaBlock>
      </StrategicBoard>
    </StrategicTableBlock>
  );
};

export default FormationTable;
