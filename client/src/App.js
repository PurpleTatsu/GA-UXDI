import React from 'react';
import { Link, Route } from 'react-router-dom';
import Header from './components/Header'
import Footer from './components/Footer'
import AllArtists from './components/AllArtists'
import Home from './components/Home'
import Tom from './components/Tom'
import Terri from './components/Terri'
import Nancy from './components/Nancy'




import './App.css';




class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }



  render() {
    return (
      <main>
        <Header />


        <Route exact path="/" render={() => <Home />} />




        <Route path="/artists" render={() =>
          <AllArtists />} />
        <Route path="/Tom" render={() =>
          <Tom />} />
        <Route path="/Terri" render={() =>
          <Terri />} />
        <Route path="/Nancy" render={() =>
          <Nancy />} />

        <Footer />
      </main>
    );
  }
}


export default App;
