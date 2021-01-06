import React from 'react';
import {Redirect} from 'react-router-dom';


class EditUserForm extends React.Component{
    state={
        name: "",
        email: "",
        password: ""
    }
    changeHander = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
          });
        console.log("Edit User:",this.props.user.id, this.state);
    }
    render(){
        return(
            <>
            {this.props.user ? 

                <>
                <h3>Edit User Form</h3>
                </>

            : <Redirect to='/login'/> 
            }
            </>
        )
    }
}

export default EditUserForm;