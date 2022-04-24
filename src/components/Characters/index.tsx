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
    const fetchCharacters = async () => {
      try {
        const characterList: Array<Character> = [];

        await Promise.all(
          props.character.map(async (character) => {
            await api
              .get(`/media-characters/${character.id}/character`)
              .then((response) => {
                characterList.push(response.data.data);
              });
          }),
        );

        setList(characterList);
        setIsLoading(false);
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
