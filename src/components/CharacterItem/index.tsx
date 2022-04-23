import React from 'react';
import { Container, CharacterImage, CharacterName } from './styled';

import { IPropsCharacter } from '../../interfaces';

const CharacterItem = (props: IPropsCharacter) => {
  return (
    <Container>
      <CharacterImage
        src={
          props.character.attributes.image?.original
            ? props.character.attributes.image?.original
            : `/img/empty-1.png`
        }
      />
      <CharacterName>{props.character.attributes.canonicalName}</CharacterName>
    </Container>
  );
};

export default CharacterItem;
