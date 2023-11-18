import React from 'react';
import styled from '@emotion/styled';

import { IconCheck } from '@/images';
import Button from './Button';

type Props = {
  step: number;
  handleCurrentPage: (current: number) => void;
  handlePrevPage: (prev: number) => void;
  handleNextPage: (next: number) => void;
};

const CreateProgressBlock = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 36px;
  font-size: larger;
  font-weight: 800;
  font-family: Novarese;
  color: white;
  padding: 32px;
  z-index: 100;
`;

const LeftButton = styled(Button)`
  width: 100px;
  height: 50px;
  border: 1px solid white;
`;

const RightButton = styled(Button)`
  width: 100px;
  height: 50px;
  border: 1px solid white;
`;

const StepButtonBlock = styled.div<{ isCurrent: boolean }>`
  width: fit-content;
  border-radius: 50%;
  background-color: ${({ isCurrent }) => (isCurrent ? 'red' : 'blue')};
  cursor: pointer;
`;

const PaginationBlock = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding-bottom: 35px;
  gap: 12px;
  z-index: 100;
`;

const CurrentStep = ({
  step,
  handleCurrentPage,
  handlePrevPage,
  handleNextPage,
}: Props) => {
  console.log('CurrentStep >', step);
  return (
    <>
      <CreateProgressBlock>
        <StepButtonBlock
          isCurrent={step === 0}
          onClick={() => handleCurrentPage(0)}
        >
          <IconCheck
            key={`current-team-make-0`}
            width={30}
            height={30}
            fill="white"
          />
        </StepButtonBlock>

        <StepButtonBlock
          isCurrent={step === 1}
          onClick={() => handleCurrentPage(1)}
        >
          <IconCheck
            key={`current-team-make-1`}
            width={30}
            height={30}
            fill="white"
          />
        </StepButtonBlock>
        <StepButtonBlock
          isCurrent={step === 2}
          onClick={() => handleCurrentPage(2)}
        >
          <IconCheck
            key={`current-team-make-2`}
            width={30}
            height={30}
            fill="white"
          />
        </StepButtonBlock>
        <StepButtonBlock
          isCurrent={step === 3}
          onClick={() => handleCurrentPage(3)}
        >
          <IconCheck
            key={`current-team-make-3`}
            width={30}
            height={30}
            fill="white"
          />
        </StepButtonBlock>
        <StepButtonBlock
          isCurrent={step === 4}
          onClick={() => handleCurrentPage(4)}
        >
          <IconCheck
            key={`current-team-make-4`}
            width={30}
            height={30}
            fill="white"
          />
        </StepButtonBlock>
      </CreateProgressBlock>

      <PaginationBlock>
        {step > 0 && (
          <LeftButton onClick={() => handlePrevPage(step - 1)}>Prev</LeftButton>
        )}
        {step < 4 && (
          <RightButton onClick={() => handleNextPage(step + 1)}>
            Next
          </RightButton>
        )}
      </PaginationBlock>
    </>
  );
};

export default CurrentStep;
