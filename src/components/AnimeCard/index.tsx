import React from 'react';
import { IProps } from '../../interfaces';
import { formatName } from '../../utils';
import {
  StyledLink,
  Card,
  CardType,
  CardId,
  CardStatus,
  CardImg,
  CardInfo,
  CardName,
  CardDetails,
} from './styled';

const AnimeCard = (props: IProps) => {
  const canonicalTitle = formatName(props.anime.attributes.canonicalTitle);

  return (
    <StyledLink to={`${props.anime.id}`}>
      <Card>
        <CardType className={props.anime.type}>
          {props.anime.type.toUpperCase()}
        </CardType>
        <CardId># {props.anime.id}</CardId>
        <CardImg src={props.anime.attributes.posterImage.original} />
        <CardInfo>
          <CardName>{canonicalTitle}</CardName>
          <CardDetails>{props.anime.attributes.description}</CardDetails>
        </CardInfo>
        <CardStatus className={props.anime.attributes.status}>
          {props.anime.attributes.status.toUpperCase()}
        </CardStatus>
      </Card>
    </StyledLink>
  );
};

export default AnimeCard;
