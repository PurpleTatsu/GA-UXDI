import React from 'react';
import { Link } from 'react-router-dom';


export default function Header(props) {
  return (
    <div id="header">
      <div>
        <Link to="/">
          <img src="https://i.imgur.com/rUezSfU.png" alt="Riverside Art Center Logo" />
        </Link>
      </div>
      <nav>
        <Link to="/">
          <h2>Home</h2>
        </Link>
        <h2>About</h2>
        <Link to="/artists">
          <h2>Our Artists</h2>
        </Link>
        <h2>Classes/Events/Exhibits</h2>
        <h2>Support us/Membership</h2>
      </nav>
    </div>
  )
}