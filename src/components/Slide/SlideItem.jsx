import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  display: flex;
  height: 45vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: #fff;

  transition: color 250ms ease-in-out, transform 250ms ease-in-out;
  text-align: center;
  cursor: pointer;
  margin-right: 1vw;

  color: #e5e5e5;

  &:hover {
    transform: scale(1.05);
    box-shadow: 1px 1px 4px black;
    color: #141414;

    & > img {
      filter: blur(1px) brightness(1);
    }
  }
`;

const BackGround = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: blur(2.5px) brightness(0.45);

  transition: filter 450ms ease-in-out;
`;

const Content = styled.div`
  z-index: 10;
`;

const Title = styled.h3`
  font-size: 2rem;
  font-weight: 800;
  margin: 1rem 0;
`;

const SlideItem = ({ project, onClickItem }) => {
  const { title, creater, img } = project;
  return (
    <Container onDoubleClick={() => onClickItem(project)}>
      <BackGround src={img} alt="temp" />
      <Content>
        <Title>{title}</Title>
        <p>{creater}</p>
      </Content>
    </Container>
  );
};

export default SlideItem;
