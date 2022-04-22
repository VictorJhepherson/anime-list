import React from 'react';
import { Container } from './styled';

import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import AnimeList from '../../components/AnimeList';

export default function Animes() {
  return (
    <Container>
      <NavBar />
      <AnimeList />
      <Footer />
    </Container>
  );
}
