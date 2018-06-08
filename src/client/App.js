import React, { Component } from 'react';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Home from './components/home/home';
import Banner from './components/banner/banner';
import './css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Banner />
        <Home />
        <Footer />
      </div>
    );
  }
}

export default App;
