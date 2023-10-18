import React from 'react';
import styled from '@emotion/styled';
import Head from 'next/head';

import Header from './Header';
import Footer from './Footer';

type Props = {
  children: React.ReactNode;
};

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const MainBlock = styled.div`
  width: 100%;
  min-height: 60vh;
  height: 100vh;
  background-color: #091442;
`;

const Layout = ({ children }: Props) => {
  return (
    <>
      <Head>
        <title>MaestroPitch : FootBall Pro for all people.</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/chamcham.svg" />
      </Head>

      <Container>
        <Header />
        <MainBlock>{children}</MainBlock>
        <Footer />
      </Container>
    </>
  );
};

export default Layout;
