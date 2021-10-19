import React from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

const LoadAnimate = keyframes`
  0% {
    opacity: 0;
    transform: scale(1.1);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem 0 8rem 0;

  animation: ${LoadAnimate} 450ms forwards;
`;

const ItemList = styled.div`
  display: flex;
`;

const ItemContainer = styled(Link)`
  width: 10vw;
  height: 200px;
  max-width: 200px;
  min-width: 84px;
  min-height: 84px;
  background-color: ${(props) => (props.bgcolor ? props.bgcolor : '#fff')};
  border: 4px solid ${(props) => (props.bgcolor ? props.bgcolor : '#fff')};
  border-radius: 5px;

  margin-right: 2vw;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;

  color: #141414;
  font-size: 2rem;
  cursor: pointer;

  &:last-child {
    margin: 0;
  }

  &:hover {
    border: 4px solid #e5e5e5;
    color: #e5e5e5;
  }
`;

const Title = styled.h3`
  color: #e5e5e5;
  font-size: 4rem;
`;

const GradeGate = () => {
  return (
    <Container>
      <Title>프로젝트를 시청할 학년을 선택하세요.</Title>
      <ItemList>
        <ItemContainer bgcolor={'#22c1c3'} to="/content/1">
          1학년
        </ItemContainer>
        <ItemContainer bgcolor={'#ff6767'} to="/content/2">
          2학년
        </ItemContainer>
        <ItemContainer bgcolor={'#ff8c54'} to="/content/3">
          3학년
        </ItemContainer>
      </ItemList>
    </Container>
  );
};

export default GradeGate;
