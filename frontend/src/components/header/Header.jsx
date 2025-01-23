import './header.css';
import assets from '../../assets/assets.js';

const Header = () => {
  return (
    <header id='home'>
      <div className="header_image">
        <img src={assets.headerImage} alt="" />
      </div>
      <div className="header_content">
        <p className='content-1'>Elevate your journey with Us</p>
        <p className='content-2'>Have a blissful experience with our flight</p>
        <button className="booking_btn">Book Tickets</button>
      </div>
    </header>
  )
}

export default Header