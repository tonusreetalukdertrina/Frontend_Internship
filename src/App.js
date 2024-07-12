import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Form from './Form';
import Data from './Data';
import Header from './Header';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/data" element={<Data />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
