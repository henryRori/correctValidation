import React from 'react';
import Navbar from '../Navbar/Navbar';
import Body from '../Body/Body';
import {Route, Switch} from 'react-router-dom';
import Login from '../Navbar/Login/Login';
import Home from '../Navbar/Home/Home';


const Landing = () =>{
    return(
        <div>
            <Navbar />
            <Switch>
            <Route path = '/home' component = {Home} />
            <Route path = '/login' component = {Login} />
            <Route path = '/Profile' render = {() => <h3>Profile</h3>} />
            <Route path = '/Settings' render = {() => <h3>Settings</h3>} />
            </Switch>
            <Body />
        
        </div>
    )
}

export default Landing;