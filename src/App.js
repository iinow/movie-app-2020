import React, { useState, useEffect } from "react";
import { HashRouter, Route } from 'react-router-dom'
import Home from "./routes/Home";
import About from "./routes/About"
import './css/App.css'
import Navigation from './components/Navigation'
import Detail from "./routes/Detail"

function App() {
  return (
    <HashRouter>
      <Navigation/>
      <Route path="/" exact component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/movie-detail" component={Detail}/>
    </HashRouter>
  )
}

export default App;
