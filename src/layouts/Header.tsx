import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100px;
  border: 1px solid;
`;

const Header = () => {
  return (
    <Container>
      <div>Logo</div>

      <div>
        <div>option1</div>
        <div>option2</div>
      </div>
    </Container>
  );
};

export default Header;
