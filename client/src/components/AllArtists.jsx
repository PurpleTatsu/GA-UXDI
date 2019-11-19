import React from 'react';
import { Link } from 'react-router-dom';


export default function AllArtists(props) {
  return (
    <div id="artists">
      <h2>Meet The Artists</h2>
      <div className="all-artist-wrapper">
        <div className="rectangle">
          <img src="https://i.imgur.com/weuTWvM.png" alt="Tom's Page" />
          <h3>Tom Lehman</h3>
          <p>Pen & Ink and Watercolor</p>
          <Link to="/Tom">
            <button>See More</button>
          </Link>
        </div>

        <div className="rectangle">
          <img src="https://i.imgur.com/ScNwDL7.png" alt="Nancy's Page" />
          <h3>Nancy Cunningham</h3>
          <p>Silk and Acrylic</p>
          <Link to="/Nancy">
            <button>See More</button>
          </Link>
        </div>

        <div className="rectangle">
          <img src="https://i.imgur.com/s091E8W.png" alt="Terri's Page" />
          <h3>Terry Lynne Blosser</h3>
          <p>Watercolor</p>
          <Link to="/Terri">
            <button>See More</button>
          </Link>
        </div>
      </div>
    </div>
  )
}