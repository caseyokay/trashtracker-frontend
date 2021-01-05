import React from 'react';
import {NavLink} from 'react-router-dom';

class NavBar extends React.Component {
    render(){
        return(
           <ul className="NavBar">
               <NavLink to='/welcome'>
                   <li>Home Page</li>
               </NavLink>
             <NavLink to='/users/26'>
                <li>User Profile</li>
                </NavLink>
                <NavLink to='/users/26/edit'>
                <li>Settings</li>
                </NavLink>
                <NavLink to='/signup'>
                <li>Create Account</li>
                </NavLink>
                {this.props.user ? 
                    <li>Logout</li>
                :
                    <NavLink to='/login'>
                    <li>Login</li>
                    </NavLink>
                }
           </ul> 
        // <div>
        //     <NavLink to='/welcome'>Welcome</NavLink>
        //     <NavLink to='/users/18'>User Profile</NavLink>
        // </div>
        )
    }
}

export default NavBar;