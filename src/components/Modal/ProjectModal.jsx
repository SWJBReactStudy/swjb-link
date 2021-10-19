import React from 'react';
import styled, { keyframes } from 'styled-components';
import Modal from 'react-modal';

const OpenModalAnimate = keyframes`
  0% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.9);
  }
  10% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1.05);
  }
  20% {
    transform: translate(-50%, -50%) scale(1);
  }
  100% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
`;

const ModalContainer = styled(Modal)`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 40vw;
  min-height: 40vh;
  color: #141414;

  display: flex;
  flex-direction: column;
  align-items: center;

  text-align: center;
  transform: translate(-50%, -50%);
  padding: 2rem;
  border-radius: 5px;
  background-color: #e3e3e3;
  outline: none;
  animation: ${OpenModalAnimate} 2s ease-out;
`;

const Close = styled.button`
  position: absolute;
  bottom: 2rem;
  right: 2rem;
  background-color: inherit;
  border: none;

  font-size: 1.3rem;
  text-decoration: underline;
  cursor: pointer;
`;

const Title = styled.h3`
  font-weight: 800;
  font-size: 2.5rem;
  margin-bottom: 0rem;
`;

const Desc = styled.p`
  width: 80%;
  font-weight: 600;
  font-size: 1.5rem;
`;

const LinkButton = styled.a`
  display: block;
  color: #141414;
  font-size: 2rem;

  transition: transform 300ms ease-in-out;
  &:hover {
    color: salmon;
    transform: translateY(15px);
  }
`;

const GitHub = styled.a`
  display: block;
  color: #141414;
  font-size: 2rem;
  margin-bottom: 1rem;

  &:hover {
    color: salmon;
  }
`;

const ProjectModal = ({ isOpen, reqClose, data }) => {
  return (
    <ModalContainer
      isOpen={isOpen}
      onRequestClose={reqClose}
      style={{
        overlay: {
          backgroundColor: 'rgba(0,0,0, 0.4)',
          cursor: 'pointer',
        },
        content: {
          cursor: 'initial',
        },
      }}
      ariaHideApp={false}
    >
      <Title>{data.title}</Title>
      <p>만든 이: {data.creater}</p>
      <Desc>{data.desc}</Desc>
      {data.github ? (
        <GitHub href={data.github} target="_blank" rel="noreferrer">
          깃허브 보러가기!
        </GitHub>
      ) : null}
      <LinkButton href={data.link} target="_blank" rel="noreferrer">
        프로젝트 보러가기!
      </LinkButton>
      <Close onClick={reqClose}>Close</Close>
    </ModalContainer>
  );
};

export default ProjectModal;
