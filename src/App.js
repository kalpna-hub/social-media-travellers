import React from 'react';
import { Routes,Route } from 'react-router-dom';
import HomePage from './Components/HomePage/HomePage';
import DetailPage from './Components/DetailsPage/DetailPage';
import Header from './Components/Header';
const App=()=>{
  return(
    <Routes>
      <Route path='/' element={<Header />}> 
      <Route path="" element={<HomePage />} />
      <Route path="item/:id" element={<DetailPage />} />
      </Route>
    </Routes>
  )
}
export default App;