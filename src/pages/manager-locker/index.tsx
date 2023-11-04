import React, { useCallback, useEffect, useMemo, useState } from 'react';
import styled from '@emotion/styled';
import { Input, Select, Radio, RadioGroup, Stack } from '@chakra-ui/react';

import { NextPageWithLayout } from '@/types/next-page';

import { IconCheck } from '@/images';
import Layout from '@/layouts';
import Image from 'next/image';
import Button from '@/components/Button';

import FourFourTwo from '@/images/football-442.png';

const Container = styled.div`
  position: relative;
  height: 100%;
  gap: 6px;
`;

const PageTitle = styled.p`
  font-family: Novarese;
  font-size: 62px;
  font-style: normal;
  font-weight: 800;
  padding-top: 32px;
  color: white;
  text-align: center;
`;

const CreateProgressBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 36px;
  font-size: larger;
  font-weight: 800;
  font-family: Novarese;
  color: white;
  margin: 32px 0;
  padding: 32px;
`;

const MainBlock = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  min-height: 70vh;
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

const InputBlock = styled.div`
  margin-bottom: 15px;

  & > p {
    font-size: 16px;
    font-weight: 800;
    margin-bottom: 12px;
  }
`;

const StrategicBoard = styled.div`
  width: 100%;
  height: 100%;

  & > img {
    object-fit: contain;
  }
`;

const ButtonBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  margin-top: 36px;
`;

const CustomButton = styled(Button)<{ color?: string }>`
  padding: 24px;
  background: ${({ color }) => color};
`;

type InitialProps = {
  teamName: { value: string; result: false };
  sports: { value: string; result: false };
  trainingPlace: { value: string; result: false };
  teamGender: { value: string; result: false };
  Contact: { value: string; type: string; result: false };
};

const ManagerLocker: NextPageWithLayout = () => {
  const [value, setValue] = useState('1');

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

  // useEffect(() => {
  //   console.log('create_data >', create_data);
  // }, [create_data]);

  const [recruitmentInfos, setRecruitmentInfos] = useState({
    teamName: '',
    footballType: '',
    teamMember: 0,
    trainingPlace: '',
    equipment: '',
    fotmation: '',
  });

  const handleSubSaving = () => {
    alert('임시저장 완료!');
  };

  const handleCreateTeam = () => {};

  return (
    <Container>
      <PageTitle>Manager Locker</PageTitle>

      <CreateProgressBlock>
        <IconCheck
          key={`current-team-make`}
          width={30}
          height={30}
          fill="white"
        />

        <IconCheck
          key={`current-team-make`}
          width={30}
          height={30}
          fill="white"
        />

        <IconCheck
          key={`current-team-make`}
          width={30}
          height={30}
          fill="white"
        />

        <IconCheck
          key={`current-team-make`}
          width={30}
          height={30}
          fill="white"
        />

        <IconCheck
          key={`current-team-make`}
          width={30}
          height={30}
          fill="white"
        />
      </CreateProgressBlock>

      <MainBlock>
        <RecruitmentBlock>
          <BlockTitle>Recruitment information</BlockTitle>
          <div>
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
        </RecruitmentBlock>

        <StrategicTableBlock>
          <BlockTitle>strategic table</BlockTitle>

          <div>
            <StrategicBoard>
              <Image src={FourFourTwo} alt="football-442" />
            </StrategicBoard>
          </div>
        </StrategicTableBlock>
      </MainBlock>
    </Container>
  );
};

ManagerLocker.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default ManagerLocker;
