import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './styles/GlobalStyles';

import Home from './pages/Home';
import Animes from './pages/Animes';
import AnimeDetails from './pages/Anime';
import About from './pages/About';
import Page404 from './pages/404';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/animes" element={<Animes />} />
        <Route path="/animes/:id" element={<AnimeDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
