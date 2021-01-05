import React from 'react'
import { Redirect } from 'react-router-dom'

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
        <form className='login' onSubmit={this.submitHandler}>
            <input type="text" name="email" placeholder="email" value={this.state.email} onChange={this.changeHandler}/>
            <input type="password" name="password" placeholder="password" value={this.state.password} onChange={this.changeHandler}/>
            <input type="submit" value="login"/>
        </form>
    )
    
}
};

export default LoginForm;