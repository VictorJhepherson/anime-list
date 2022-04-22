import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import { NavBarStyles, BackContainer, RightContainer, Text } from './styled';

const NavBar = () => {
  const localtion = useLocation();

  return (
    <NavBarStyles>
      <BackContainer>
        <Link to={localtion.pathname === '/animes' ? '/' : '/animes'}>
          <h2>
            <i className="arrow circle left icon" />
          </h2>
        </Link>
      </BackContainer>
      <RightContainer>
        <Link to="/animes">
          <Text>Home</Text>
        </Link>
        <Link to="/about">
          <Text>About</Text>
        </Link>
      </RightContainer>
    </NavBarStyles>
  );
};

export default NavBar;
