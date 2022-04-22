import React from 'react';

export type LogoProps = {
  size?: 'small' | 'normal' | 'medium' | 'large';
  name?: 'mob' | 'chopper';
};

const Logo: React.FC<LogoProps> = ({ size = 'normal', name = 'mob' }) => {
  let width = 0;
  let height = 0;

  if (size === 'small') {
    width = 94;
    height = 69;
  } else if (size === 'normal') {
    width = 280;
    height = 280;
  } else if (size === 'medium') {
    width = 260;
    height = 390;
  } else {
    width = 250;
    height = 380;
  }
  return (
    <img
      src={`/img/${name}.png`}
      alt="Logo Pokedex"
      height={height}
      width={width}
    />
  );
};

export default Logo;
