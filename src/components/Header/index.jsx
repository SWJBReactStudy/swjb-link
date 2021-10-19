import React from 'react';
import styled from 'styled-components';
import Logo from '../../asset/logo.png';

const Container = styled.div`
  width: 100vw;
  height: 68px;
  padding: 0 3rem;
  background: rgb(20, 20, 20);
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.7) 10%, rgba(0, 0, 0, 0));
`;

const Image = styled.img`
  height: 68px;
  cursor: pointer;
`;

const Header = () => {
  return (
    <Container>
      <Image src={Logo} alt="Logo" />
    </Container>
  );
};

export default Header;
