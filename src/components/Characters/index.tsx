import React, { useEffect, useState } from 'react';
import { Container } from './styled';

import { IPropsCharacters, Character } from '../../interfaces';
import api from '../../services/api';
import CharacterItem from '../CharacterItem';
import Spinner from '../Spinner';

const Characters = (props: IPropsCharacters) => {
  const [isLoading, setIsLoading] = useState(true);
  const [list, setList] = useState<Array<Character>>([]);

  const renderCharacters = () => {
    const renderList: Array<JSX.Element> = [];

    list.forEach((character: Character) => {
      renderList.push(
        <CharacterItem character={character} key={character.id} />,
      );
    });

    return renderList;
  };

  useEffect(() => {
    const fetchCharacters = () => {
      const characterList: Array<Character> = [];

      props.character.forEach(async (character) => {
        await api
          .get(`/media-characters/${character.id}/character`)
          .then((response) => {
            characterList.push(response.data.data);
          });
      });

      setTimeout(() => {
        setList(characterList);
        setIsLoading(false);
      }, 1000);
    };

    fetchCharacters();
  }, [props.character]);

  return (
    <Container>
      {isLoading ? <Spinner size="small" /> : renderCharacters()}
    </Container>
  );
};

export default Characters;
