import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { Input, Select, keyframes } from '@chakra-ui/react';
import Image, { StaticImageData } from 'next/image';

import { NextPageWithLayout } from '@/types/next-page';

import Layout from '@/layouts';
import Button from '@/components/Button';

import CurrentStep from '@/components/CurrentStep';
import FormationTable from '@/components/\bFormationTable';
import FieldOne from '@/images/field-1.jpg';
import FieldTwo from '@/images/field-2.jpg';
import FieldThree from '@/images/field-3.jpg';
import { css } from '@emotion/react';

type InitialProps = {
  teamName: { value: string; result: false };
  sports: { value: string; result: false };
  trainingPlace: { value: string; result: false };
  teamGender: { value: string; result: false };
  Contact: { value: string; type: string; result: false };
};

type ImageState = StaticImageData | string;

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
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 70vh;
  font-family: Novarese;
  font-size: 32px;
  font-style: normal;
  font-weight: 800;
  color: white;
  z-index: 100;
`;

const RecruitmentBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 640px;
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
  width: 100%;
  min-height: 450px;
  gap: 35px;
`;

const SubTitle = styled.p`
  font-size: 48px;
  font-weight: 800;
  margin-bottom: 12px;
`;

const CustomInput = styled(Input)`
  width: 50%;
  height: 75px;
  border-top: none;
  border-left: none;
  border-right: none;
  border-radius: 0;
  cursor: pointer;
`;

const LockerTopBlock = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 100;
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

const PlayerInfoBlock = styled.div`
  width: 50%;
  height: 100%;
  padding: 2rem;
`;

const FieldTableBlock = styled.div`
  width: 400px;
  height: 100%;
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 0.6; 
  }
`;

const OverlayBlock = styled.div<{ step: number }>`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
  animation: ${fadeIn} 1s ease-in-out forwards;
  ${({ step }) => css`
    opacity: ${step / 100};
  `}
`;

const OverLayImage = styled(Image)`
  width: 100%;
  height: 100%;
  opacity: 0.6;
`;

const backgroundImages = [FieldOne, FieldTwo, FieldThree];

const ManagerLocker: NextPageWithLayout = () => {
  const [step, setStep] = useState(0);
  const [players, setPlayers] = useState(11);
  const [selectedFormation, setSelectedFormation] = useState('433');
  const [backgroundView, setBackgroundView] = useState<ImageState>('');
  const [recruitmentInfos, setRecruitmentInfos] = useState(initialProps);
  const [createData, setCreateData] = useState<InitialProps>({
    teamName: { value: '', result: false },
    sports: { value: '', result: false },
    trainingPlace: { value: '', result: false },
    teamGender: { value: '', result: false },
    Contact: { value: '', type: '', result: false },
  });
  const options = [11, 10, 9, 8, 7, 6, 5, 4];
  const formationOptions = [
    'Custom',
    '3142',
    '343',
    '352',
    '41212',
    '4141',
    '4231',
    '424',
    '433',
    '4411',
    '442',
    '532',
    '541',
  ];

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

  const handleSelectChange = (event: { target: { value: string } }) => {
    const selectedPlayers = parseInt(event.target.value, 10);
    setPlayers(selectedPlayers);
  };

  const handleSelectFormationChange = (event: {
    target: { value: string };
  }) => {
    const selectedFormation = event.target.value;
    setSelectedFormation(selectedFormation);
  };

  useEffect(() => {
    if (step === 0) {
      setBackgroundView(backgroundImages[0]);
    } else if (step === 1) {
      setBackgroundView(backgroundImages[1]);
    } else if (step === 2) {
      setBackgroundView(backgroundImages[2]);
    }
  }, [step]);

  return (
    <Container>
      <OverlayBlock step={step}>
        <OverLayImage src={backgroundView} alt="aa" />
      </OverlayBlock>

      <LockerTopBlock>
        <PageTitle>Manager Locker</PageTitle>
        <CustomButton color="lightblue">임시저장</CustomButton>
      </LockerTopBlock>

      <CurrentPageText>Current Page {step + 1}</CurrentPageText>

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
            <RecruitmentBlock>
              <PlayerInfoBlock>kakao map</PlayerInfoBlock>
            </RecruitmentBlock>
          </InformationBlock>
        )}

        {step === 3 && (
          <InformationBlock>
            <SubTitle>스쿼드 전략</SubTitle>

            <RecruitmentBlock>
              <PlayerInfoBlock>
                <div>
                  <p>참여인원 : </p>

                  <Select value={players} onChange={handleSelectChange}>
                    {options.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </Select>
                </div>

                <div>
                  <p>포메이션 : </p>
                  <Select
                    value={selectedFormation}
                    onChange={handleSelectFormationChange}
                  >
                    {formationOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </Select>
                </div>

                <div></div>
              </PlayerInfoBlock>

              <FieldTableBlock>
                <FormationTable />
              </FieldTableBlock>
            </RecruitmentBlock>
          </InformationBlock>
        )}

        {step === 4 && (
          <InformationBlock>
            <SubTitle>최종 확인</SubTitle>
            <CustomInput />
          </InformationBlock>
        )}
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
