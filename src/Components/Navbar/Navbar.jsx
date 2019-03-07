import React, {Component} from 'react';
import './Navbar.css'
import {Link} from 'react-router-dom';
// import Home from './Home/Home';
// import Profile from './Profile/Profile';
// import Login from './Login/Login';
// import Settings from './Settings/Settings';

class Navbar extends Component  {
    render() {
        return (
            
            <div className='navbar'>
                <Link to = '/Home'><b>Home</b></Link>
                <Link to = '/Profile'><b>Profile</b></Link>
                <Link to = '/Login'><b>Login</b></Link>
                <Link to = '/Settings'><b>Settings</b></Link>
            </div>

            
        );

    }
}


export default Navbar;