import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './styles/GlobalStyles';

import Home from './pages/Home';
import Animes from './pages/Animes';
import AnimeDetails from './pages/Anime';
import About from './pages/About';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/animes" element={<Animes />} />
        <Route path="/animes/:id" element={<AnimeDetails />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
