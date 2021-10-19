import React, { useState } from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import SlideItem from './SlideItem';
import useProject from '../../hooks/useProject';
import ProjectModal from '../Modal/ProjectModal';

const Container = styled.div`
  margin: 0 auto;
  width: 900px;
  background-color: #eee;
  padding: 2rem;
  text-align: center;
`;

const Slide = () => {
  const settings = {
    dot: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  const [isOpen, setIsOpen] = useState(false);
  const [modalState, setModalState] = useState({});
  const project = useProject(1);
  const onClickItem = (p) => {
    setIsOpen((prevState) => true);
    setModalState((prevState) => p);
  };

  return (
    <>
      <Container>
        Slide
        <Slider {...settings}>
          {project.map((p) => (
            <SlideItem project={p} onClickItem={onClickItem} />
          ))}
        </Slider>
      </Container>

      <ProjectModal isOpen={isOpen} reqClose={() => setIsOpen((prevState) => false)} data={modalState} />
    </>
  );
};

export default Slide;
