import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container } from './styled';

import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import AnimeInfo from '../../components/Anime';
import Spinner from '../../components/Spinner';

import api from '../../services/api';
import { Anime } from '../../interfaces';

export default function AnimeDetails() {
  const [isLoading, setIsLoading] = useState(true);
  const [anime, setAnime] = useState({} as Anime);
  const { id } = useParams();

  useEffect(() => {
    const fetchAnime = async () => {
      const response = await api.get(`/anime/${id}`);

      setAnime(response.data.data);
      setIsLoading(false);
    };

    fetchAnime();
  }, [id]);

  return isLoading ? (
    <Container>
      <NavBar />
      <Spinner size="normal" />
      <Footer />
    </Container>
  ) : (
    <Container>
      <NavBar />
      <AnimeInfo anime={anime} key={anime.id} />
      <Footer />
    </Container>
  );
}
