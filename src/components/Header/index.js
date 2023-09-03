import {GiHamburgerMenu} from 'react-icons/gi'
import Popup from 'reactjs-popup'

import './index.css'

const Header = () => (
  <div className="header-container">
    <Popup
      trigger={
        <button className="nav-button">
          <GiHamburgerMenu className="menu-icon" />
        </button>
      }
      position="bottom left"
    >
      <ul className="nav-items-list-container">
        <li>Home</li>

        <li>About</li>

        <li>Schedules</li>
        <li>Membership</li>
        <li>Pricing</li>
      </ul>
    </Popup>
    <ul className="large-device-nav-items-list-container">
      <li>Home</li>

      <li>About</li>

      <li>Schedules</li>
      <li>Membership</li>
      <li>Pricing</li>
    </ul>
    <div className="nav-offers-courses-button-container">
      <p className="offers-text">Offers</p>
      <button className="courses-button">Courses</button>
    </div>
  </div>
)

export default Header
