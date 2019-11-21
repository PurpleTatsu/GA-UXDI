import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import AllArtists from './components/AllArtists';
import Home from './components/Home';
// import Tom from './components/Tom';
// import Terri from './components/Terri';
// import Nancy from './components/Nancy';
import MetaTags from 'react-meta-tags';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
    }
  }


  render() {
    return (
      <div className="App">
        <MetaTags>
          <title>Riverside Art Center</title>
          <meta id="meta-description" name="description" content="General Assembly UXDI/SEI joint project" />
          <meta id="og-title" property="og:title" content="Riverside Art Center" />
          <meta id="og-image" property="og:image" content="https://i.imgur.com/5fNxN0a.png" />

        </MetaTags>

        <Header />

        <Route exact path="/" render={() => <Home />} />

        <Route path="/artists" render={() => <AllArtists />} />

        <Footer />
      </div>
    );
  }
}

export default App;