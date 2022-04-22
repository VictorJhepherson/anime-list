import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from './styled';

import Logo from '../../components/Logo';
import Footer from '../../components/Footer';

export default function Page404() {
  return (
    <Container>
      <h1>Page not found! 404</h1>
      <Link to={`/animes`}>
        <Logo size="large" name="mob" />
      </Link>
      <Footer />
    </Container>
  );
}
