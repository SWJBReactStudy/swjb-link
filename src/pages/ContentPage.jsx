import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Slide from '../components/Slide';

const Container = styled.div`
  width: 100vw;
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

const ContentPage = ({ match }) => {
  return (
    <Container>
      <Header />
      <Content>
        <Slide grade={match.params.grade} />
      </Content>
    </Container>
  );
};

export default ContentPage;
