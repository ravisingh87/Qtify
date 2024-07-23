import React, { useState } from 'react';
import { AlbumComDiv, AlbumComDivContainer, AlbumSlider, AlbumSpan } from './AlbumComponentStyle';
import AlbumCard from '../AlbumCard/AlbumCard';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 8,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};

const AlbumComponent = ({ data, title }) => {
  const [showAll, setShowAll] = useState(true);

  return (
    <AlbumComDivContainer>
      <AlbumComDiv className="d-flex justify-content-between">
        <h6>{title}</h6>
        <AlbumSpan onClick={() => setShowAll(!showAll)}>
          {showAll ? 'Show all' : 'Collapse'}
        </AlbumSpan>
      </AlbumComDiv>
      <AlbumSlider className="row row-cols-1 row-cols-md-3 g-0 gap-3">
        {showAll ? (
          <Slider {...settings} className="slider">
            {data?.map((item) => (
              <AlbumCard data={item} key={data.id} />
            ))}
          </Slider>
        ) : (
          data?.map((item) => <AlbumCard data={item} key={data.id} />)
        )}
      </AlbumSlider>
    </AlbumComDivContainer>
  );
};

export default AlbumComponent;
