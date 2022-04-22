import React from 'react';
import { IPropsGenre } from '../../interfaces';

const GenreDD = (props: IPropsGenre) => {
  const renderGenre = () => {
    const genreList: Array<string> = [];

    props.genre.forEach((genre) => {
      genreList.push(genre.attributes.name);
    });

    return genreList.length > 0 ? (
      genreList.join(', ')
    ) : (
      <span>Not available</span>
    );
  };

  return <dd>{renderGenre()}</dd>;
};

export default GenreDD;
