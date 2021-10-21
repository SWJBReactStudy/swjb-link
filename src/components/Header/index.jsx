import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../../asset/logo.png';

const Container = styled.div`
  width: 100vw;
  height: 68px;
  padding: 1.5rem 3rem;
  background: rgb(20, 20, 20);
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.7) 10%, rgba(0, 0, 0, 0));
`;

const Image = styled.img`
  height: 58px;
  cursor: pointer;
  opacity: 0.7;
  transition: opacity 150ms ease-in-out;

  &:hover {
    opacity: 1;
  }
`;

const Header = () => {
  return (
    <Container>
      <Link to="/">
        <Image src={Logo} alt="Logo" />
      </Link>
    </Container>
  );
};

export default Header;
