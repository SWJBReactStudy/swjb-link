import React from 'react';
import styled, { keyframes } from 'styled-components';
import Modal from 'react-modal';

const OpenModalAnimate = keyframes`
  0% {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0.9);
  }
  10% {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(1.05);
  }
  20% {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(1);
  }
  100% {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(1);
  }
`;

const ModalContainer = styled(Modal)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 2rem;
  border-radius: 5px;
  background-color: #eee;
  outline: none;
  animation: ${OpenModalAnimate} 2s ease-out;
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
      <h3>{data.title}</h3>
      <p>{data.creater}</p>
      <p>{data.desc}</p>
      <a href={data.link} target="_blank" rel="noreferrer">
        Go
      </a>
    </ModalContainer>
  );
};

export default ProjectModal;
