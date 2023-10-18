import styled from '@emotion/styled';
import React from 'react';

const Container = styled.div`
  width: 100%;
  background-color: #0b0b0b;
`;

const OptionBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 5rem;
  color: white;

  & > li {
    list-style-type: none;
  }
`;

const Footer = () => {
  return (
    <Container>
      <OptionBlock>
        <li>About</li>
        <li>History</li>
        <li>Contact</li>
        <li>Email</li>
      </OptionBlock>
    </Container>
  );
};

export default Footer;
