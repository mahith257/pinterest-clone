import './Navbar.css'
import logo from '../assets/logo.png'
import profilePic from '../assets/profile-pic.JPG'


export default function Navbar() {
  return (
    <div className='navbar'>
        <ul>
            <li className='logo'>
                <img src={logo} alt='pinterest logo' />
            </li>
            <li className='home-button'>Home</li>
            <li className='today-button'>Today</li>
            <li className='create'>
                <span>Create</span>
                <i className="bi bi-chevron-down"></i>
            </li>
            <li className='search'>
                <form className='searchform'>
                    <label htmlFor='search'></label>
                    <input 
                        type='text'
                        className='search-bar'
                        id='search'
                        placeholder='Search'
                        required
                    />
                </form>
            </li>
            <li className='icon'>
                <i className="bi bi-bell-fill navbar-icon"></i>
            </li>
            <li className='icon'>
            <i className="bi bi-chat-dots-fill navbar-icon"></i>
            </li>
            <li className='profile-pic'>
                <img src={profilePic} alt='profile-pic' />
            </li>
            <li className='down-arrow'>
                <i className="bi bi-chevron-down navbar-icon" style={{fontSize:'15px', padding:'8px'}}></i>
            </li>
        </ul>
    </div>
  );
}
