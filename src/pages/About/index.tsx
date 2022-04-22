import React from 'react';
import { Container } from './styled';

import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import Logo from '../../components/Logo';

export default function About() {
  return (
    <Container>
      <NavBar />
      <h1>About This App</h1>
      <p style={{ fontSize: '1.5rem' }}>
        Find all the anime information data using the
        <a
          href="https://kitsu.docs.apiary.io/"
          target="_blank"
          rel="noreferrer"
        >
          {' '}
          Kitsu
        </a>{' '}
        API.
      </p>
      <Logo size="large" name="mob" />
      <Footer />
    </Container>
  );
}
