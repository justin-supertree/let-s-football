import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { Input } from '@chakra-ui/react';
import Image from 'next/image';

import { NextPageWithLayout } from '@/types/next-page';

import Layout from '@/layouts';
import Button from '@/components/Button';

import CurrentStep from '@/components/CurrentStep';

type InitialProps = {
  teamName: { value: string; result: false };
  sports: { value: string; result: false };
  trainingPlace: { value: string; result: false };
  teamGender: { value: string; result: false };
  Contact: { value: string; type: string; result: false };
};

const Container = styled.div`
  position: relative;
  height: 100%;
  gap: 6px;
`;

const PageTitle = styled.p`
  font-family: Novarese;
  font-size: 58px;
  font-style: normal;
  font-weight: 800;
  padding-top: 32px;
  color: white;
  text-align: left;
`;

const CurrentPageText = styled.p`
  font-family: Novarese;
  font-size: 24px;
  font-style: normal;
  font-weight: 800;
  padding-top: 32px;
  color: yellow;
`;

const MainBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 45vh;
  font-family: Novarese;
  font-size: 32px;
  font-style: normal;
  font-weight: 800;
  color: white;
`;

const RecruitmentBlock = styled.div`
  width: 40%;
  height: 100%;
  border: 1px solid lightgreen;
`;

const InputBlock = styled.div`
  margin-bottom: 15px;

  & > p {
    font-size: 16px;
    font-weight: 800;
    margin-bottom: 12px;
  }
`;

const ButtonBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  margin-top: 36px;
`;

const InformationBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 450px;
  gap: 35px;
`;

const SubTitle = styled.p`
  font-size: 48px;
  font-weight: 800;
  margin-bottom: 12px;
`;

const CustomInput = styled(Input)`
  width: 100%;
  height: 75px;
`;

const LockerTopBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const CustomButton = styled(Button)<{ color?: string }>`
  width: 20%;
  font-size: 20px;
  font-weight: 800;
  background: ${({ color }) => color};
`;

const initialProps = {
  teamName: '',
  footballType: '',
  teamMember: 0,
  trainingPlace: '',
  equipment: '',
  fotmation: '',
};

const footballTypeData = [
  { type: 'full', name: '풀 코트 축구' },
  { type: 'half', name: '하프 코트 축구' },
  { type: 'futsal', name: '풋살' },
  { type: 'educate', name: '축구강습' },
];

const FootBallTypeBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
`;

const FootBallTypeImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 250px;
  border-radius: 12px;
  background-color: beige;
  color: black;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: lightsalmon;
  }
`;

const ManagerLocker: NextPageWithLayout = () => {
  const [step, setStep] = useState(0);
  const [value, setValue] = useState('1');
  const [recruitmentInfos, setRecruitmentInfos] = useState(initialProps);
  const [createData, setCreateData] = useState<InitialProps>({
    teamName: { value: '', result: false },
    sports: { value: '', result: false },
    trainingPlace: { value: '', result: false },
    teamGender: { value: '', result: false },
    Contact: { value: '', type: '', result: false },
  });

  // const updateCreateData = useCallback((key, value) => {
  //   setCreateData((prevData) => ({
  //     ...prevData,
  //     [key]: { ...prevData[key], value },
  //   }));
  // }, []);

  const handleCurrentPage = (current: number) => {
    setStep(current);
    console.log('handleCurrentPage >', current);
  };

  const handlePrevPage = (prev: number) => {
    setStep(prev);
  };

  const handleNextPage = (next: number) => {
    setStep(next);
  };

  const handleSelectFootballType = (name: string) => {
    alert(`Select ${name}`);
  };

  useEffect(() => {
    if (step < 0) {
      setStep(0);
      alert('you are in First page!');
    }
  }, [step]);

  return (
    <Container>
      <LockerTopBlock>
        <PageTitle>Manager Locker</PageTitle>
        <CustomButton color="lightblue">임시저장</CustomButton>
      </LockerTopBlock>

      <CurrentPageText>Current Page {step}</CurrentPageText>

      <MainBlock>
        {step === 0 && (
          <InformationBlock>
            <SubTitle>Create Your Team Name</SubTitle>
            <CustomInput fontSize={38} />
          </InformationBlock>
        )}

        {step === 1 && (
          <InformationBlock>
            <SubTitle>What Football type Do you find?</SubTitle>

            <FootBallTypeBlock>
              {footballTypeData.map((info, index) => (
                <FootBallTypeImage
                  onClick={() => handleSelectFootballType(info.name)}
                  key={`${info.type}-${index}`}
                >
                  {info.name}
                </FootBallTypeImage>
              ))}
            </FootBallTypeBlock>
          </InformationBlock>
        )}

        {step === 2 && (
          <InformationBlock>
            <SubTitle>집결 장소</SubTitle>
            <CustomInput />
          </InformationBlock>
        )}

        {step === 3 && (
          <InformationBlock>
            <SubTitle>Detail Information(3)</SubTitle>
            <CustomInput />
          </InformationBlock>
        )}

        {step === 4 && (
          <InformationBlock>
            <SubTitle>Detail Information(4)</SubTitle>
            <CustomInput />
          </InformationBlock>
        )}

        {/* <RecruitmentBlock>
          <BlockTitle>Recruitment information</BlockTitle>
          <div>
          1
            <InputBlock>
              <p>Team Name : </p>
              <Input />
            </InputBlock>

            <InputBlock>
              <p>Football Type : </p>
              <Select>
                <option>축구(풀코트)</option>
                <option>축구(하프코드)</option>
                <option>풋살</option>
                <option>축구강습</option>
              </Select>
            </InputBlock>


            <InputBlock>
              <p>Team Member : </p>
              <Input />
            </InputBlock>

            <InputBlock>
              <p>Training Place : </p>
              <Input />
            </InputBlock>

            <InputBlock>
              <p>Personal Equipment Requirements : </p>
              <Input />
            </InputBlock>

            <InputBlock>
              <p>strategic formation : </p>
              <Select>
                <option>442</option>
                <option>4231</option>
                <option>3442</option>
                <option>4321</option>
                <option>433</option>
                <option>3421</option>
              </Select>
            </InputBlock>
          </div>

          <ButtonBlock>
            <CustomButton onClick={handleSubSaving}>임시저장</CustomButton>
            <CustomButton color="red" onClick={handleCreateTeam}>
              만들기
            </CustomButton>
          </ButtonBlock>
        </RecruitmentBlock> */}
      </MainBlock>

      <CurrentStep
        step={step}
        handleCurrentPage={handleCurrentPage}
        handlePrevPage={handlePrevPage}
        handleNextPage={handleNextPage}
      />
    </Container>
  );
};

ManagerLocker.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default ManagerLocker;
