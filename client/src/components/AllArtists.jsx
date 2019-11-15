import React from 'react';
import { Link } from 'react-router-dom';


export default function AllArtists(props) {
  return (
    <div id="artists">
      <h2>Our Artists</h2>
      <h3>Our Stories</h3>

      <Link to="/Tom">
        <div id="placeholder">Tom</div>
      </Link>

      <Link to="/Terri">
        <div id="placeholder">Terri</div>
      </Link>

      <Link to="/Nancy">
        <div id="placeholder">Nancy</div>
      </Link>



    </div>
  )
}