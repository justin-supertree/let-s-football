import { Button } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { useRouter } from 'next/router';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  height: 100%;
  font-family: Novarese;
  font-size: 64px;
  font-weight: 800;
  color: white;
  background-color: #091442;
`;

const ErrorPage = () => {
  const router = useRouter();

  const handleGoback = () => {
    router.push('/');
  };

  return (
    <Container>
      <div>
        <p>ErrorPage</p>

        <Button onClick={handleGoback}>Go Back</Button>
      </div>
    </Container>
  );
};

export default ErrorPage;
