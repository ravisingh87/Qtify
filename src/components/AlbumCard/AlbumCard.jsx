import React from 'react';
import { AlbumCardDiv, AlbumImg, AlbumPara, AlbumSpan } from './AlbumCardStyle';

const AlbumCard = ({ data, idx }) => {
  return (
    <AlbumCardDiv className="col" key={idx}>
      <div className="card">
        <AlbumImg src={data.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <AlbumSpan className="badge text-bg-dark d-flex justify-content-center">
            {data.follows} Follows
          </AlbumSpan>
        </div>
      </div>
      <AlbumPara>{data.title}</AlbumPara>
    </AlbumCardDiv>
  );
};

export default AlbumCard;
