import React from 'react';
import Logo from '../Logo/Logo';
import { Link } from 'react-router-dom';
import { ButtonStyle, InputStyle, NavbarStyle } from './NavbarStyle.js';
import Button from '../Button/Button.jsx';
const Navbar = () => {
  return (
    <NavbarStyle className="navbar bg-color-primary">
      <div className="container-fluid row">
        <div className="col">
          <Link to="/">
            <Logo />
          </Link>
        </div>
        <div className="container col d-flex">
          <div className="input-group">
            <InputStyle
              type="text"
              className="form-control"
              placeholder="Search a album of your choice"
              aria-label="Search a album of your choice"
              aria-describedby="basic-addon2"
            />
            <ButtonStyle className="input-group-text" id="basic-addon2">
              <i className="bi bi-search"></i>
            </ButtonStyle>
          </div>
        </div>
        <div className="col d-flex justify-content-end">
          <Button type="btn btn-outline-success" title={'Give Feedback'} bgColor={'black'} />
        </div>
      </div>
    </NavbarStyle>
  );
};

export default Navbar;
