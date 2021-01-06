import React from 'react';
import {NavLink} from 'react-router-dom';

class NavBar extends React.Component {
    clickHandler = () => {

    }
    render(){
        return(
           <ul className="NavBar">
               <NavLink to='/welcome'>
                   <li>Home</li>
               </NavLink>
             <NavLink to={`/users/${this.props.user.id}`}>
                 
                <li>Profile</li>
                </NavLink>
                <NavLink to='/users/26/edit'>
                <li>Settings</li>
                </NavLink>
                {this.props.user ? <li onClick={this.props.clickHandler}>Logout</li>
                :
                <NavLink to='/login'>
                <li>Login</li>
                </NavLink>
                }
                {/* <NavLink to='/signup'>
                <li>Create Account</li>
                </NavLink> */}
           </ul> 
        // <div>
        //     <NavLink to='/welcome'>Welcome</NavLink>
        //     <NavLink to='/users/18'>User Profile</NavLink>
        // </div>
        )
    }
}

export default NavBar;