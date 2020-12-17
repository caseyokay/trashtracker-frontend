import React from 'react'
import {NavLink} from 'react-router-dom'

class Welcome extends React.Component{

render(){
    //this.props.usersArray.id
    return(
        <>
        <NavLink to={`/users/32`}>
        <h3>Welcome! Click Here to see your User Page</h3>
        </NavLink>
        </>
    ) 
}
}

export default Welcome;