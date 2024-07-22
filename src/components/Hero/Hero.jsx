import React from 'react';
import { HeroDivContainer } from './HeroStyle';

const Hero = () => {
  return (
    <HeroDivContainer>
      <div>
        <h1>100 Thousand Songs, ad-free</h1>
        <h1>Over thousands podcast episodes</h1>
      </div>
      <div>
        <img
          src={require('../../../assets/vibrating-headphone.png')}
          width={212}
          alt="headphones"
        />
      </div>
    </HeroDivContainer>
  );
};

export default Hero;
