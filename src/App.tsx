import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Title from "./components/Title/Title";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Main from "./components/pages/Main/main";
import Doctors from "./components/pages/Doctors/doctors";
import About from "./components/pages/About/about";
import Reg from "./components/pages/Reg/reg";
import Services from "./components/pages/Services/services";
import s from './App.module.sass'
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
        <Title/>
      <Navbar/>
        <div className={s.background}>
            <Routes>
                <Route path='/' element={<Main/>}/>
                <Route path='/doctors' element={<Doctors/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/reg' element={<Reg/>}/>
                <Route path='/services' element={<Services/>}/>
                <Route path='/doctor-panel'/>
            </Routes>
        </div>
        <Footer/>
    </BrowserRouter>
  );
}

export default App;
