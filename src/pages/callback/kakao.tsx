import React, { useEffect, useState } from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { signIn, useSession } from 'next-auth/react';
import styled from '@emotion/styled';
import { Spinner } from '@chakra-ui/react';

import RedirectModal from '@/components/Modal/RedirectModal';

const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  color: white;
  background: var(--neutrals-900, #131313);
`;

const SpinnerBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;

  & > div {
    width: 50px;
    height: 50px;
  }
`;

const KakaoCallbackPage: NextPage = () => {
  const [isRedirectModalOpen, setIsRedirectModalOpen] = useState(false);
  const [isError, setIsError] = useState(false);

  const router = useRouter();
  const { code } = router.query;
  const { status } = useSession();

  useEffect(() => {
    if (code) {
      (async () => {
        const res = await signIn('kakao-credentials', {
          code,
          redirect: false,
        });
        console.log('res >', res);

        if (res && !res.ok) {
          setIsError(true);
          return;
        }
      })();
    }
  }, [code]);

  useEffect(() => {
    if (status === 'authenticated') {
      router.replace('/');
    } else if (isError) {
      setIsRedirectModalOpen(true);
    }
  }, [status, isError, router]);

  return (
    <>
      <Container>
        <SpinnerBlock>
          <SpinnerBlock>{!isError && <Spinner size="xl" />}</SpinnerBlock>
        </SpinnerBlock>
      </Container>

      {isError && (
        <RedirectModal
          isOpen={isRedirectModalOpen}
          handleOpenModal={() => setIsRedirectModalOpen((prev) => !prev)}
        />
      )}
    </>
  );
};

export default KakaoCallbackPage;
