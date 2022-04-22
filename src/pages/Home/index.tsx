import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Header, Content, HeaderContent, Button } from './styled';
import { fadeInUp } from '../../utils';

import Logo from '../../components/Logo';
import Footer from '../../components/Footer';

export default function Home() {
  return (
    <Container>
      <Header>
        <Content initial={fadeInUp.initial} animate={fadeInUp.animate}>
          <HeaderContent>
            <Logo size="large" name="mob" />
          </HeaderContent>
        </Content>
      </Header>

      <Content>
        <Link to="animes">
          <Button>Anime List</Button>
        </Link>
      </Content>

      <Footer />
    </Container>
  );
}
