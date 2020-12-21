import React from 'react'
import {NavLink} from 'react-router-dom'
import {Route, Switch} from 'react-router-dom';
import AddTrashForm from './AddTrashForm';
import "./Welcome.css";


class Welcome extends React.Component{


render(){
    console.log("Category Welcome props",this.props)
    console.log("Welcome state:",this.state)
    return(
        <>
        <h1 className="header">Welcome!</h1>
       <NavLink to={`/users/6`}>
        {/* <NavLink to={`/users/${this.state.currentUser.id}`}> */}
        <h3>Profile Page</h3>
        </NavLink>
        <h4 className="form-header">Use the form below to log your daily trash:</h4>
       {this.props? <AddTrashForm currentUser={this.props.currentUser} trashCategoriesArray={this.props.trashCategoriesArray} addNewTrashItem={this.props.addNewTrashItem}/>: null}
       </>
    ) 
}
}

export default Welcome;