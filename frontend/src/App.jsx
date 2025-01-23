import React from 'react'
import { Links, BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Header from './components/header/Header.jsx'
import Search from './components/search/Search.jsx'

const App = () => {
  return (
    <Router>
      <Navbar/>
      <Header/>
      <Search/>
    </Router>
  )
}

export default App