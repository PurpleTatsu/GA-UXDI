import React from 'react';


export default function Home(props) {
  return (
    <main>
      <div id="welcome">
        <div className="welcome-image">
          <div className="oval">
            <div className="triangle"></div>
          </div>
          <div className="scroll-down"></div>
        </div>
      </div>
      <div className="mission">
        <h3>MISSION STATEMENT</h3>
        <p>The Riverside Art Center (RAC) is a non-profit arts corporation dedicated to the promotion of fine art. RAC
          serves the greater Wapakoneta area, providing art related, educational opportunities through classes, lectures and
          demonstrations. RAC also provides a venue for local artists to work, display and sell their artwork. The RAC
          provides these opportunities for all persons, regardless of age, social status, gender/gender orientation, politics, religious affiliation.</p>
      </div>
      <div className="welcome-second-image">
        <button>See More</button>
      </div>
      <div className="exhibit-event-wrapper">
        <div className="exhibit-event-content">
          <h3>Classes</h3>
          <p>Stencling, Chalk Couture, Paint Pouring and Canvas painting are just a few of the classes you can experience at the Riverside Art Center.</p>
        </div>
        <div className="exhibit-event-content">
          <h3>Exhibits</h3>
          <p>Exhibits from local artists, members of the Riverside Art Center and students at local schools are held throughout the year.</p>
        </div>
        <div className="exhibit-event-content">
          <h3>Events</h3>
          <p>Numerous events are held every year at the Riverside Art Center. Meet and greet with artists, fine arts and fine wine nights as well as benefit nights.</p>
        </div>
        <div className="exhibit-event-content">
          <h3>Membership</h3>
          <p>Are you an artist? Do you have self-made pieces of artwork around your house you want to show to the world? Become a member and showcase your art today!</p>
        </div>
      </div>
    </main>
  )
}