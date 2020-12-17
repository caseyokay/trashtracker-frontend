import React from 'react'
import {NavLink} from 'react-router-dom'
import AddTrashForm from './AddTrashForm'

class Welcome extends React.Component{
    state = {
        currentUser: {}
    }

    componentDidMount(){
        let usersArray = this.props.usersArray
        let newUser = usersArray.find(element => element.id === 32)
        console.log("New user:", newUser)
          this.setState({
            currentUser: newUser
          })
          console.log("Ppdated user",this.state.currentUser)
    }

    // setCurrentUser = () => {
    //     // let user32Array = this.props.usersArray.filter(item => {
    //     //   return item.id  === 32
    //     // })
    //     let usersArray = this.props.usersArray
    //     let newUser = usersArray.filter(element => element.id === 32)
    //       this.setState({
    //         currentUser: newUser
    //       })
    //       console.log(this.state.currentUser)
    //   }

render(){
    console.log("props",this.props.usersArray)
    return(
        <>
        <h1>Welcome!</h1>
        <NavLink to={`/users/${this.state.currentUser.id}`}>
        {/* <NavLink to={`/users/32`}> */}

        <h3>Profile Page</h3>
        </NavLink>
        <h4>Click the images to log some trash, or use the form below:</h4>
        <AddTrashForm currentUser={this.state.currentUser}/>
        </>
    ) 
}
}

export default Welcome;