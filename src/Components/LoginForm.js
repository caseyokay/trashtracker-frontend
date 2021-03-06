import React from 'react'
import { Redirect, NavLink } from 'react-router-dom'

class LoginForm extends React.Component{
    state={
        email: "",
        password: ""
    }

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value})
    }

    submitHandler = (e) => {
        e.preventDefault()
        this.props.submitHandler(this.state)
        //pass down from props
    }

render(){
    return(
        <>
        <img className="logo" alt="logo" src="https://i.ibb.co/PxmjM2L/Screen-Shot-2021-01-05-at-3-45-42-PM.png"/>
        <h3>Welcome Back</h3>
        <form className='login' onSubmit={this.submitHandler}>
            <input type="text" name="email" placeholder="email" value={this.state.email} onChange={this.changeHandler}/> <br></br>
            <input type="password" name="password" placeholder="password" value={this.state.password} onChange={this.changeHandler}/> <br></br>
            <input type="submit" value="login"/>
        </form>
        <NavLink to={`/signup`}> 
                <h4>Don't have an account? Sign up here.</h4>
        </NavLink>
        </>
    )
    
}
};

export default LoginForm;