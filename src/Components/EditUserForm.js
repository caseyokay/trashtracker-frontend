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

                <div className="editUser">
                <h3>Edit User Form</h3>
                <form>
                <label>Name:</label><br/><br/>
                    <input type="text" value={this.props.user.name} name="name" onChange={this.changeHandler}
                    />
                    <button>Edit</button>
                </form> <br/><br/>

                <form>
                <label>Email:</label><br/><br/>
                    <input type="text" value={this.props.user.email} name="email" onChange={this.changeHandler}
                    />
                    <button>Edit</button>
                </form> <br/><br/>
                
                </div>
            : <Redirect to='/login'/> 
            }
            </>
        )
    }
}

export default EditUserForm;