import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import GradeGate from '../components/GradeGate';

const Container = styled.div`
  overflow: hidden;
`;

const Content = styled.div`
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
    <Container>
      <Header />
      <Content>
        <GradeGate />
      </Content>
    </Container>
  );
};

export default App;
