import React, { Component } from 'react';
import { HashRouter, Route, Link } from "react-router-dom";
// import { HashRouter, BrowserRouter, Routes, Route, hashHistory } from 'react-router-dom'
import './App.css'
import Header from './Components/Header';
import Home from './Components/Home';

function App() {

  return (
    <div className=''>
      <Header />
      <Home />
    </div>
  )
}

export default App