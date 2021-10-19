import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import SlideItem from './SlideItem';
import useProject from '../../hooks/useProject';

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

  const project = useProject(1);
  console.log(project);
  return (
    <Container>
      Slide
      <Slider {...settings}>
        {project.map((p) => (
          <SlideItem title={p.title} desc={p.desc} link={p.link} />
        ))}
      </Slider>
    </Container>
  );
};

export default Slide;
