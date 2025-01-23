import './navbar.css'
import { Links } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='nav-bar'>
      <div className="logo">
        <p>SkyCruise</p>
      </div>
      <div className="nav-link">
        <button className='btn'>Login</button>
      </div>
    </div>
  )
}

export default Navbar