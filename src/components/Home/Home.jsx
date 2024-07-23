import React, { useEffect, useState } from 'react';
import AlbumComponent from '../AlbumList/AlbumComponent';
import { HomeDivContainer } from './HomeStyle';
import axios from 'axios';
import Songs from '../Songs/Songs';

const Home = () => {
  const [data, setData] = useState([]);
  const [newAlbum, setNewAlbum] = useState([]);

  const fetchData = async () => {
    const resTop = await axios('https://qtify-backend-labs.crio.do/albums/top', {
      'access-control-allow-origin': '*',
      'Content-type': 'application/json; charset=UTF-8'
    });
    setData(resTop.data);
    const resNew = await axios('https://qtify-backend-labs.crio.do/albums/new', {
      'access-control-allow-origin': '*',
      'Content-type': 'application/json; charset=UTF-8'
    });
    setNewAlbum(resNew.data);
  };

  // https://qtify-backend-labs.crio.do/albums/new

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <HomeDivContainer>
      <AlbumComponent data={data} title="Top Album" idx={1} />
      <AlbumComponent data={newAlbum} title="New Album" />
      <Songs />
    </HomeDivContainer>
  );
};

export default Home;
