import React from 'react';
import { Link } from 'react-router-dom';


export default function Header(props) {
  return (
    <div id="header">

      <a href="#main-menu"
        id="main-menu-toggle"
        class="menu-toggle">
        <div class="bars marg-top"></div>
        <div class="bars"></div>
        <div class="bars"></div>
      </a>

      <div className="align">
        <Link to="/">
          <img src="https://i.imgur.com/rUezSfU.png" alt="Riverside Art Center Logo" />
        </Link>
      </div>
      <nav id="main-menu" class="main-menu" aria-label="Main menu">
        <a href="#main-menu-toggle"
          id="main-menu-close"
          class="menu-close"
          aria-label="Close main menu">
          <span>x</span>
        </a>
        <ul className="header-flex">
          <li><h2>Home</h2></li>
          <li><h2>About</h2></li>
          <li className="artist-anchor-tag">
            <Link to="/artists">
              <h2>Our Artists</h2>
            </Link>
          </li>
          <li><h2>Classes/Events/Exhibits</h2></li>
          <li><h2>Support us/Membership</h2></li>
        </ul>
      </nav>
      <a href="#main-menu-toggle"
        class="backdrop"
        tabindex="-1"
        aria-hidden="true" hidden></a>
    </div>
  )
}