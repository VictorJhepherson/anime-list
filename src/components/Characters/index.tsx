import React, { useEffect, useState } from 'react';
import { Container } from './styled';

import { toast } from 'react-toastify';

import { IPropsCharacters, Character } from '../../interfaces';
import api from '../../services/api';
import CharacterItem from '../CharacterItem';
import Spinner from '../Spinner';
import * as messages from '../../utils/messages';

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
      try {
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
        }, 1500);
      } catch (e) {
        toast.error(messages.genericError);
      }
    };

    fetchCharacters();
  }, []);

  return (
    <Container>
      {isLoading ? <Spinner size="small" /> : renderCharacters()}
    </Container>
  );
};

export default Characters;
