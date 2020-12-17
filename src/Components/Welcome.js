import React from 'react'
import {NavLink} from 'react-router-dom'
import {Route, Switch} from 'react-router-dom';
import AddTrashForm from './AddTrashForm'


class Welcome extends React.Component{
    state = {
        currentUser: {},
        landfill: this.props.trashCategoriesArray[0],
        compost: this.props.trashCategoriesArray[1],
        recycling: this.props.trashCategoriesArray[2]
    }

    componentDidMount(){
        let usersArray = this.props.usersArray
        let newUser = usersArray.find(element => element.id === 32)
          this.setState({
            currentUser: newUser
          })
          console.log("Updated user",this.state.currentUser)
    }

render(){
    // console.log("Category Welcome props",this.props.trashCategoriesArray)
    // console.log(this.state)
    return(
        <>
        <h1>Welcome!</h1>
        <NavLink to={`/users/32`}>
        {/* <NavLink to={`/users/${this.state.currentUser.id}`}> */}
        <h3>Profile Page</h3>
        </NavLink>
        <h4>Click the images to log some trash, or use the form below:</h4>
        <AddTrashForm currentUser={this.state.currentUser} landfill={this.state.landfill} compost={this.state.compost} recycling={this.state.recycling} addNewTrashItem={this.props.addNewTrashItem}/>
        </>
    ) 
}
}

export default Welcome;