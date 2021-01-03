import React from 'react';
import {Redirect} from 'react-router-dom';


class EditUserForm extends React.Component{
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