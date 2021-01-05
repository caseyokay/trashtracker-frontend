import React from 'react'
import { Redirect, NavLink } from 'react-router-dom'

class SignUp extends React.Component{
    state={
        name: "",
        email: "",
        password: ""
    }

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value})
    }

    submitHandler = (e) => {
        e.preventDefault()
        console.log("Signing Up:", this.state)
        this.props.submitHandler(this.state)
        //pass down from props
    }

render(){
    return(
        <>
        <img alt="logo" src="https://i.ibb.co/PxmjM2L/Screen-Shot-2021-01-05-at-3-45-42-PM.png"/>
        <h3>Please Sign Up</h3>        
        <form className='signup' onSubmit={this.submitHandler}>
            <input type="text" name="name" placeholder="name" value={this.state.name} onChange={this.changeHandler}/>
            <input type="text" name="email" placeholder="email" value={this.state.email} onChange={this.changeHandler}/>
            <input type="password" name="password" placeholder="password" value={this.state.password} onChange={this.changeHandler}/>
            <input type="submit" value="sign up"/>
        </form>
        <NavLink to={`/login`}> 
                <h4>Have an account? Login here.</h4>
        </NavLink>
        </>
    )
    
}
};

export default SignUp;