import React from 'react';
import styled from '@emotion/styled';
import { NextPageWithLayout } from '../types/next-page';

import Layout from '@/layouts';
import { useRouter } from 'next/router';
import Button from '@/components/Button';
import { AnimatePresence } from 'framer-motion';
import CreateTeamModal from '@/components/Modal/CreateTeamModal';

const Container = styled.div`
  height: 100%;
  font-family: Novarese;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  color: white;
  gap: 6px;
`;

const ContentsHubBlock = styled.div`
  margin-bottom: 16px;
`;

const ContentsWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 150px;
  padding: 16px;
  text-align: center;

  & > p {
    font-size: 52px;
    font-weight: 800;
    font-family: Novarese;
  }
`;

const ActiveBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border: 1px solid;
  padding: 12px;
  gap: 12px;
`;

const ActivityContents = styled.div<{ isDisActive?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 150px;
  border-radius: 16px;
  padding: 24px;
  background-color: ${({ isDisActive }) =>
    isDisActive ? 'lightgray' : 'lightcoral'};
  transition: 0.2s all ease-in-out;
  font-size: 44px;
  font-family: 600;

  :hover {
    opacity: ${({ isDisActive }) => !isDisActive && 0.8};
  }
`;

const CreateTeamButton = styled(Button)`
  font-size: 22px;
  font-family: 600;
  font-family: Novarese;
`;

const ActivityHub: NextPageWithLayout = () => {
  // const [isCreateTeam, setIsCreateTeam] = useState(false);
  const router = useRouter();

  const handleSelectContents = () => {
    router.push('/activities/football');
  };

  const handleCreateTeam = () => {
    router.push('/manager-locker');
    // setIsCreateTeam(true);
  };

  return (
    <Container>
      <ContentsHubBlock>
        <ContentsWrap>
          <p>Welcome Player</p>
          <p>Here is ActivityHub</p>
        </ContentsWrap>

        {/* <CreateTeamButton variant="solid" onClick={handleCreateTeam}>
          Create Team
        </CreateTeamButton> */}
      </ContentsHubBlock>

      <ActiveBlock>
        <ActivityContents onClick={handleSelectContents}>
          Football
        </ActivityContents>
        <ActivityContents isDisActive>BaseBall</ActivityContents>
        <ActivityContents isDisActive>Table tennis</ActivityContents>
      </ActiveBlock>

      {/* <AnimatePresence initial={false} onExitComplete={() => null}>
        {isCreateTeam && (
          <CreateTeamModal
            title="Create Team!"
            desc="Let's Create your Team!"
            buttonType="double"
            isOpen={isCreateTeam}
            handleOpenModal={() => setIsCreateTeam(!isCreateTeam)}
          />
        )}
      </AnimatePresence> */}
    </Container>
  );
};

ActivityHub.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default ActivityHub;
