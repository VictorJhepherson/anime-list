import React, { useEffect, useState } from 'react';
import { Pagination } from '@mui/material';
import { PaginationContainer, ListAnime } from './styled';

import { toast } from 'react-toastify';

import { Anime } from '../../interfaces';
import { numberOfPages, animePerPage } from '../../utils';
import * as messages from '../../utils/messages';
import api from '../../services/api';

import AnimeCard from '../AnimeCard';
import Search from '../Search';
import Spinner from '../Spinner';

export default function AnimeList() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);
  const [animes, setAnimes] = useState([]);

  const onPaginationClick = (
    event: React.ChangeEvent<unknown>,
    value: number,
  ) => {
    setCurrentPage(value * animePerPage - animePerPage);
  };

  const renderAnimes = () => {
    const animeList: Array<JSX.Element> = [];

    animes.forEach((anime: Anime) => {
      animeList.push(<AnimeCard anime={anime} key={anime.id} />);
    });

    return animeList;
  };

  useEffect(() => {
    const fetchAnimes = async () => {
      try {
        const response = await api.get(
          `/anime?page[limit]=${animePerPage}&page[offset]=${currentPage}`,
        );

        setAnimes(response.data.data);
        setIsLoading(false);
      } catch (e) {
        toast.error(messages.genericError);
      }
    };

    fetchAnimes();
  }, [currentPage, animePerPage]);

  return isLoading ? (
    <Spinner size="normal" />
  ) : (
    <>
      <Search />
      <PaginationContainer>
        <Pagination
          defaultPage={1}
          count={numberOfPages()}
          variant="outlined"
          shape="rounded"
          onChange={onPaginationClick}
        />
      </PaginationContainer>

      <ListAnime>{renderAnimes()}</ListAnime>
    </>
  );
}
