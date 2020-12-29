import React from 'react';
import {NavLink} from 'react-router-dom';

class NavBar extends React.Component {
    render(){
        return(
           <ul className="NavBar">
               <NavLink to='/welcome'>
                   <li>Home Page</li>
               </NavLink>
             <NavLink to='/users/18'>
                <li>User Profile</li>
                </NavLink>
                <NavLink to='/users/18/edit'>
                <li>User Settings</li>
                </NavLink>
           </ul> 
        // <div>
        //     <NavLink to='/welcome'>Welcome</NavLink>
        //     <NavLink to='/users/18'>User Profile</NavLink>
        // </div>
        )
    }
}

export default NavBar;