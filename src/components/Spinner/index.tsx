import React from 'react';
import { Chopper, ChopperMini } from './styled';

export type SpinnerProps = {
  size: 'normal' | 'small';
};

const Spinner: React.FC<SpinnerProps> = ({ size = 'small' }) => {
  return size === 'small' ? (
    <ChopperMini src={`/img/chopper.png`} />
  ) : (
    <Chopper src={`/img/chopper.png`} />
  );
};

export default Spinner;
