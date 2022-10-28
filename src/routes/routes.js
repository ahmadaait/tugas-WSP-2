// jshint ignore:start
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import QuranDetail from '../pages/QuranDetail';

const routes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/list-alquran" element={<Home />} />
        <Route path="/detail-alquran" element={<QuranDetail />} />
      </Routes>
    </Router>
  );
};

export default routes;
