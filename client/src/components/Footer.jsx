import React from 'react';

export default function Footer(props) {
  return (
    <div id="footer">
      <div className="footer-content">
        <h3>Contact</h3>
        <p>419-738-2352</p>
        <p>riversideartcenter@gmail.com</p>
      </div>
      <div className="footer-content">
        <h3>Hours</h3>
        <p>Wednesday - Friday</p>
        <p>12:00 PM - 4:00 PM</p>
        <br />
        <p>Saturday</p>
        <p>10:00 AM - 2:00 PM</p>
      </div>
      <div className="footer-content">
        <h3>Address</h3>
        <p>Riverside Art Center</p>
        <p>3 W. Auglaize St.</p>
        <p>P.O. Box 37</p>
        <p>Wapakoneta, OH 45895</p>
      </div>
      <div className="footer-content">
        <h3>Subscribe</h3>
        <p>Subscribe for updates</p>
        <input type="email" placeholder="Email" />
        <br/>
        <button>Submit</button>
      </div>
      <div className="footer-content">
        <h3>Connect</h3>
        <a href="https://www.instagram.com/riversideartcenterwapak/?hl=en" target="_blank" > <img id="instagram" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0%0D%0APSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTIgMi4xNjNjMy4yMDQgMCAzLjU4%0D%0ANC4wMTIgNC44NS4wNyAzLjI1Mi4xNDggNC43NzEgMS42OTEgNC45MTkgNC45MTkuMDU4IDEuMjY1%0D%0ALjA2OSAxLjY0NS4wNjkgNC44NDkgMCAzLjIwNS0uMDEyIDMuNTg0LS4wNjkgNC44NDktLjE0OSAz%0D%0ALjIyNS0xLjY2NCA0Ljc3MS00LjkxOSA0LjkxOS0xLjI2Ni4wNTgtMS42NDQuMDctNC44NS4wNy0z%0D%0ALjIwNCAwLTMuNTg0LS4wMTItNC44NDktLjA3LTMuMjYtLjE0OS00Ljc3MS0xLjY5OS00LjkxOS00%0D%0ALjkyLS4wNTgtMS4yNjUtLjA3LTEuNjQ0LS4wNy00Ljg0OSAwLTMuMjA0LjAxMy0zLjU4My4wNy00%0D%0ALjg0OS4xNDktMy4yMjcgMS42NjQtNC43NzEgNC45MTktNC45MTkgMS4yNjYtLjA1NyAxLjY0NS0u%0D%0AMDY5IDQuODQ5LS4wNjl6bTAtMi4xNjNjLTMuMjU5IDAtMy42NjcuMDE0LTQuOTQ3LjA3Mi00LjM1%0D%0AOC4yLTYuNzggMi42MTgtNi45OCA2Ljk4LS4wNTkgMS4yODEtLjA3MyAxLjY4OS0uMDczIDQuOTQ4%0D%0AIDAgMy4yNTkuMDE0IDMuNjY4LjA3MiA0Ljk0OC4yIDQuMzU4IDIuNjE4IDYuNzggNi45OCA2Ljk4%0D%0AIDEuMjgxLjA1OCAxLjY4OS4wNzIgNC45NDguMDcyIDMuMjU5IDAgMy42NjgtLjAxNCA0Ljk0OC0u%0D%0AMDcyIDQuMzU0LS4yIDYuNzgyLTIuNjE4IDYuOTc5LTYuOTguMDU5LTEuMjguMDczLTEuNjg5LjA3%0D%0AMy00Ljk0OCAwLTMuMjU5LS4wMTQtMy42NjctLjA3Mi00Ljk0Ny0uMTk2LTQuMzU0LTIuNjE3LTYu%0D%0ANzgtNi45NzktNi45OC0xLjI4MS0uMDU5LTEuNjktLjA3My00Ljk0OS0uMDczem0wIDUuODM4Yy0z%0D%0ALjQwMyAwLTYuMTYyIDIuNzU5LTYuMTYyIDYuMTYyczIuNzU5IDYuMTYzIDYuMTYyIDYuMTYzIDYu%0D%0AMTYyLTIuNzU5IDYuMTYyLTYuMTYzYzAtMy40MDMtMi43NTktNi4xNjItNi4xNjItNi4xNjJ6bTAg%0D%0AMTAuMTYyYy0yLjIwOSAwLTQtMS43OS00LTQgMC0yLjIwOSAxLjc5MS00IDQtNHM0IDEuNzkxIDQg%0D%0ANGMwIDIuMjEtMS43OTEgNC00IDR6bTYuNDA2LTExLjg0NWMtLjc5NiAwLTEuNDQxLjY0NS0xLjQ0%0D%0AMSAxLjQ0cy42NDUgMS40NCAxLjQ0MSAxLjQ0Yy43OTUgMCAxLjQzOS0uNjQ1IDEuNDM5LTEuNDRz%0D%0ALS42NDQtMS40NC0xLjQzOS0xLjQ0eiIvPjwvc3ZnPg==" alt="instagram" /></a>
        <a href="https://www.facebook.com/riversideartcenter/" target="_blank" ><img id="facebook" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0%0D%0APSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTkgMGgtMTRjLTIuNzYxIDAtNSAy%0D%0ALjIzOS01IDV2MTRjMCAyLjc2MSAyLjIzOSA1IDUgNWgxNGMyLjc2MiAwIDUtMi4yMzkgNS01di0x%0D%0ANGMwLTIuNzYxLTIuMjM4LTUtNS01em0tMyA3aC0xLjkyNGMtLjYxNSAwLTEuMDc2LjI1Mi0xLjA3%0D%0ANi44ODl2MS4xMTFoM2wtLjIzOCAzaC0yLjc2MnY4aC0zdi04aC0ydi0zaDJ2LTEuOTIzYzAtMi4w%0D%0AMjIgMS4wNjQtMy4wNzcgMy40NjEtMy4wNzdoMi41Mzl2M3oiLz48L3N2Zz4=" alt="facebook" /></a>
      </div>
    </div>
  )
}