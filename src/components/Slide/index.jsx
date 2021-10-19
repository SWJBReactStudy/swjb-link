import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import Slider from 'react-slick';
import SlideItem from './SlideItem';
import useProject from '../../hooks/useProject';
import ProjectModal from '../Modal/ProjectModal';

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
  margin: 0 auto;
  width: 80%;
  padding: 2rem;
  text-align: center;

  animation: ${LoadAnimate} 450ms forwards;
`;

const Title = styled.h3`
  color: #e5e5e5;
  font-size: 3.5rem;
`;

const Slide = ({ grade }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalState, setModalState] = useState({});
  const project = useProject(grade);

  const settings = {
    className: 'center',
    centerMode: true,
    infinite: true,
    centerPadding: '60px',
    slidesToShow: project.length < 3 ? 1 : 3,
    speed: 500,
  };
  console.log(project);
  const onClickItem = (p) => {
    setIsOpen((prevState) => true);
    setModalState((prevState) => p);
  };

  return (
    <>
      <Container>
        <Title>접속하고 싶은 프로젝트를 더블클릭하세요.</Title>
        <Slider {...settings}>
          {project.map((p, i) => (
            <SlideItem project={p} onClickItem={onClickItem} key={i} />
          ))}
        </Slider>
      </Container>

      <ProjectModal isOpen={isOpen} reqClose={() => setIsOpen((prevState) => false)} data={modalState} />
    </>
  );
};

export default Slide;
