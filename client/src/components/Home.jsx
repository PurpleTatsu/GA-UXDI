import React from 'react';
import { Link } from 'react-router-dom';


export default function Home(props) {
  return (
    <main>
      <div id="welcome">
        <h2>WELCOME TO THE RIVERSIDE ART CENTER</h2>
        <h3> To inspire creativity through the arts.</h3>
      </div>
      <div id="mission">
        <h2>MISSION STATEMENT</h2>
        <p>The Riverside Art Center (RAC) is a non-profit arts corporation dedicated to the promotion of fine art. RAC
          serves the greater Wapakoneta area, providing art related, educational opportunities through classes, lectures and
          demonstrations. RAC also provides a venue for local artists to work, display and sell their artwork. The RAC
          provides these opportunities for all persons, regardless of age, social status, gender/gender orientation,
  politics, religious affiliation.</p>
      </div>
    </main>
  )
}