import React from 'react'
import { Redirect } from 'react-router-dom'

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
        <form className='signup' onSubmit={this.submitHandler}>
            <input type="text" name="name" placeholder="name" value={this.state.name} onChange={this.changeHandler}/>
            <input type="text" name="email" placeholder="email" value={this.state.email} onChange={this.changeHandler}/>
            <input type="password" name="password" placeholder="password" value={this.state.password} onChange={this.changeHandler}/>
            <input type="submit" value="sign up"/>
        </form>
    )
    
}
};

export default SignUp;