import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 300px;
  text-align: center;
  cursor: pointer;
`;

const SlideItem = ({ project, onClickItem }) => {
  const { title, creater } = project;
  return (
    <Container onClick={() => onClickItem(project)}>
      <h3>{title}</h3>
      <p>{creater}</p>
    </Container>
  );
};

export default SlideItem;
