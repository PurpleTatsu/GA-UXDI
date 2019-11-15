import React from 'react';
import { Link } from 'react-router-dom';


export default function Header(props) {
  return (
    <div id="header">
      <Link to="/"> <h1>Riverside Art Center</h1></Link>
      <nav>
        <h2>About</h2>
        <Link to="/artists">
          <h2>Artists</h2></Link>
        <h2>Classes/Events/Exhibits</h2>
        <h2>Ways to Support</h2>
      </nav>
    </div>
  )
}