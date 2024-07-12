import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Form from './Form';
import Data from './Data';
import Header from './Header';  // Import the Header component

const App = () => {
  return (
    <BrowserRouter>
      <Header />  {/* Add the Header component */}
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/data" element={<Data />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
