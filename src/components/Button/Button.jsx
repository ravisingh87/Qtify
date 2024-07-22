import React from 'react';
import { ButtonStyle } from './ButtonStyle';

const Button = ({ type, title, bgColor }) => {
  return (
    <ButtonStyle className={type} id="basic-addon2" bgColor={bgColor}>
      {title}
    </ButtonStyle>
  );
};

export default Button;
