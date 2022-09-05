import styled from '@emotion/styled';

const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.gray_33};
`;

const Test = () => {
  return <Container>Test</Container>;
};

export default Test;
