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


class App extends React.Component {
  constructor() {
    super();
    this.state = {
    }
  }


  render() {
    return (
      <div className="App">
        <Header />

        <Route exact path="/" render={() => <Home />} />

        <Route path="/artists" render={() => <AllArtists />} />

        <Footer />
      </div>
    );
  }
}

export default App;