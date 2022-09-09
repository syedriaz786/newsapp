
import './App.css';
import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";




export default class App extends Component {
  render() {
    return (
      <div>
        <Router>

          <NavBar />

          <Routes>

            <Route exact path="/" element={<News key="general" pageSize={12} country="us" category="general" />} />
            <Route exact path="/Business" element={<News key="business" pageSize={12} country="us" category="business" />} />
            <Route exact path="/Entertainment" element={<News key="entertainment" pageSize={12} country="us" category="entertainment" />} />
            <Route exact path="/General" element={<News key="general" pageSize={12} country="us" category="general" />} />
            <Route exact path="/health" element={<News key="health" pageSize={12} country="us" category="health" />} />
            <Route exact path="/Science" element={<News key="science" pageSize={12} country="us" category="science" />} />
            <Route exact path="/Sport" element={<News key="sports" pageSize={12} country="us" category="sports" />} />
            <Route exact path="/Technology" element={<News key="technology" pageSize={12} country="us" category="technology" />} />

          </Routes>
        </Router>


      </div >
    )
  }
}
