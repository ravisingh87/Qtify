import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import { AlbumComDiv, AlbumComDivContainer, AlbumSlider } from '../AlbumList/AlbumComponentStyle';
import AlbumCard from '../AlbumCard/AlbumCard';
import { settings } from '../AlbumList/AlbumComponent';
import axios from 'axios';
import { SongsDiv } from './SongsStyle';
const Songs = () => {
  const [showAll, setShowAll] = useState(true);
  const [value, setValue] = useState('All');
  const [data, setData] = useState([]);
  const [tabs, setTabs] = useState([]);
  const [genreSongs, setGenreSongs] = useState([]);

  const handleChange = (newValue) => {
    setValue(newValue);
    if (newValue === 'All') {
      setGenreSongs(data);
    } else {
      const newData = data.filter((item) => item.genre.label === newValue);
      setGenreSongs(newData);
    }
  };

  const fetchData = async () => {
    const resTop = await axios('https://qtify-backend-labs.crio.do/songs');
    setData(resTop.data);
    setGenreSongs(resTop.data);
  };
  const fetchTabs = async () => {
    const res = await axios('https://qtify-backend-labs.crio.do/genres');
    setTabs(res.data.data);
  };

  useEffect(() => {
    fetchData();
    fetchTabs();
  }, []);
  return (
    <AlbumComDivContainer>
      <AlbumComDiv className="d-flex justify-content-between">
        <h6>Songs</h6>
      </AlbumComDiv>
      <ul className="nav nav-underline">
        <SongsDiv
          className={`nav-item ${value === 'All' ? 'active' : ''}`}
          value="All"
          onClick={() => handleChange('All')}>
          All
        </SongsDiv>
        {tabs.map((item, idx) => (
          <SongsDiv
            className={`nav-item ${value === item.label ? 'active' : ''}`}
            key={`${item}+_+${idx}`}
            value={item.label}
            onClick={() => handleChange(item.label)}>
            {item.label}
          </SongsDiv>
        ))}
      </ul>
      <AlbumSlider className="row row-cols-1 row-cols-md-3 g-0 gap-3 mt-3">
        <Slider {...settings} className="slider">
          {genreSongs?.map((item) => (
            <AlbumCard data={item} key={data.id} />
          ))}
        </Slider>
        {/* ) : (
          data?.map((item) => <AlbumCard data={item} key={data.id} />)
        )} */}
      </AlbumSlider>
    </AlbumComDivContainer>
  );
};

export default Songs;
