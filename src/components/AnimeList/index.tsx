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
  const [search, setSearch] = useState('');
  const [display, setDisplay] = useState('flex');

  const onPaginationClick = (
    event: React.ChangeEvent<unknown>,
    value: number,
  ) => {
    setCurrentPage(value * animePerPage - animePerPage);
  };

  const searchAnimes = async () => {
    try {
      setIsLoading(true);
      const response = await api.get(
        `anime?filter[text]=${search}&page[limit]=12`,
      );

      setAnimes(response.data.data);
      setIsLoading(false);
      renderAnimes();
    } catch (e) {
      toast.error(messages.genericError);
    }
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

    if (search.length > 0) {
      searchAnimes();
      setDisplay('none');
    }
  }, [currentPage, search]);

  return isLoading ? (
    <Spinner size="normal" />
  ) : (
    <>
      <Search setSearch={setSearch} />
      <PaginationContainer style={{ display: `${display}` }}>
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
