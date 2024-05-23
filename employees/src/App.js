import React from 'react';
import "./App.css";
import { BrowserRouter,Routes,Route } from 'react-router-dom';

import HomeTabel from "./Components/HomeTabel";



function App() {
  return (
    <>
  <BrowserRouter>
  <Routes>
    < Route path='/' element = {<HomeTabel/>}/>
    < Route path=''
    {/* < Route path='/' element = {<Test/>}/> */}

    
    
  </Routes>
  </BrowserRouter>
    </>
  );
}

export default App;
