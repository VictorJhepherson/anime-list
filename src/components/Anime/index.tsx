import React, { useEffect, useState } from 'react';
import { IProps, Genre, Characters } from '../../interfaces';
import {
  Header,
  Content,
  HeaderContent,
  PosterImage,
  AvarageContainer,
  AvaregeRating,
  Status,
  Type,
  SubType,
  ContainerInfo,
  Info,
  Title,
  TitleJapan,
  Description,
  ContainerTitle,
  ContentTitle,
  Footer,
  ContentAbout,
  Middle,
  ContentCharacters,
} from './styled';

import { toast } from 'react-toastify';

import theme from '../../styles/theme';
import { fadeInUp, formatDesc, formatDate, Upper } from '../../utils';
import * as messages from '../../utils/messages';
import api from '../../services/api';
import GenreDD from '../Genre';
import Character from '../Characters';
import Spinner from '../Spinner';

const AnimeInfo = (props: IProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [genres, setGenres] = useState<Array<Genre>>([]);
  const [characters, setCharacters] = useState<Array<Characters>>([]);

  const renderDesc = () => {
    const pList: Array<JSX.Element> = [];

    props.anime.attributes.description.split('\n').map((paragraph, index) => {
      pList.push(
        <Description key={index}>{formatDesc(paragraph)}</Description>,
      );
    });

    return pList;
  };

  useEffect(() => {
    const fetchGenresAndCharacters = async () => {
      try {
        await Promise.all([
          api.get(`/anime/${props.anime.id}/genres`),
          api.get(`/anime/${props.anime.id}/characters?page[limit]=5`),
        ]).then((response) => {
          setGenres(response[0].data.data);
          setCharacters(response[1].data.data);
        });

        setIsLoading(false);
      } catch (e) {
        toast.error(messages.genericError);
      }
    };

    fetchGenresAndCharacters();
  }, [props.anime.id]);

  return isLoading ? (
    <Spinner size="normal" />
  ) : (
    <div style={{ width: '100%' }}>
      <Header>
        <div
          style={{
            width: '100%',
            height: '300px',
            border: `1px solid ${theme.colors.primary}`,
            backgroundColor: `${theme.colors.empty}`,
            backgroundImage: `url(${props.anime.attributes.coverImage?.large})`,
            backgroundSize: 'cover',
          }}
        >
          <Content initial={fadeInUp.initial} animate={fadeInUp.animate}>
            <HeaderContent>
              <PosterImage src={props.anime.attributes.posterImage?.original} />
              <AvarageContainer>
                <AvaregeRating>
                  <span>{props.anime.attributes.averageRating}</span>
                  <span>/100</span>
                </AvaregeRating>
                <Status className={props.anime.attributes.status}>
                  {props.anime.attributes.status.toUpperCase()}
                </Status>
                <Type className={props.anime.type}>
                  {props.anime.type.toUpperCase()}
                </Type>
                <SubType className={props.anime.attributes.subtype}>
                  {props.anime.attributes.subtype.toUpperCase()}
                </SubType>
              </AvarageContainer>
            </HeaderContent>
          </Content>
        </div>
        <ContainerInfo>
          <div style={{ width: '25%' }}></div>
          <Info>
            <Title>{props.anime.attributes.canonicalTitle}</Title>
            <TitleJapan>{props.anime.attributes.titles.ja_jp}</TitleJapan>
            {renderDesc()}
          </Info>
        </ContainerInfo>
      </Header>

      <ContainerTitle>
        <ContentTitle>
          <h2>Characters</h2>
        </ContentTitle>
        <ContentTitle></ContentTitle>
      </ContainerTitle>

      <Middle>
        <ContentCharacters>
          <Character character={characters} key={props.anime.id} />
        </ContentCharacters>
      </Middle>

      <ContainerTitle>
        <ContentTitle>
          <h2>About</h2>
        </ContentTitle>
        <ContentTitle></ContentTitle>
      </ContainerTitle>

      <Footer>
        <ContentAbout>
          <dl>
            <dt>Genres</dt>
            <GenreDD genre={genres} key={props.anime.id} />

            <dt>Date Aired</dt>
            <dd>
              {props.anime.attributes.endDate === null && <span>Since </span>}
              {formatDate(props.anime.attributes.startDate)}
              {props.anime.attributes.endDate !== null && <span> to </span>}
              {props.anime.attributes.endDate !== null &&
                formatDate(props.anime.attributes.endDate)}
            </dd>

            <dt>Episodes</dt>
            <dd>
              {props.anime.attributes.episodeCount ? (
                <span>{`${props.anime.attributes.episodeCount} episode(s) `}</span>
              ) : (
                <span>{` ? episode(s) `}</span>
              )}
              {props.anime.attributes.episodeLength ? (
                <span>{` (${props.anime.attributes.episodeLength} min/ep)`}</span>
              ) : (
                <span>{` (? min/ep)`}</span>
              )}
            </dd>
          </dl>
        </ContentAbout>
        <ContentAbout>
          <dl>
            <dt>Show Type</dt>
            <dd>{Upper(props.anime.attributes.subtype)}</dd>

            <dt>Age Rating</dt>
            <dd>{`${props.anime.attributes.ageRatingGuide} (${props.anime.attributes.ageRating})`}</dd>

            <dt>Trailer</dt>
            <dd>
              {props.anime.attributes.youtubeVideoId ? (
                <a
                  href={`https://www.youtube.com/watch?v=${props.anime.attributes.youtubeVideoId
                    .split('/')
                    .pop()}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  YouTube
                </a>
              ) : (
                <span>Not Available</span>
              )}
            </dd>
          </dl>
        </ContentAbout>
      </Footer>
    </div>
  );
};

export default AnimeInfo;
