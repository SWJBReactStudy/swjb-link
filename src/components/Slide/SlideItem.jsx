import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 300px;
  text-align: center;
`;

const SlideItem = ({ title, desc, link }) => {
  return (
    <Container>
      <h3>{title}</h3>
      <p>{desc}</p>
      <button>{link}</button>
    </Container>
  );
};

export default SlideItem;
