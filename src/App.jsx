import React from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import GradeGate from './components/GradeGate';

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: -1;
`;

const App = () => {
  return (
    <>
      <Header />
      <Container>
        <GradeGate />
      </Container>
    </>
  );
};

export default App;
