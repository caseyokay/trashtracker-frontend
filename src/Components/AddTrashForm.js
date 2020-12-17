import React from 'react';

class AddTrashForm extends React.Component{
    state={
        description: "",
        date: "",
        user: this.props.currentUser,
        trash_category: ""
    }
    render(){
        console.log("Form Props:", this.props)
        return(
                <>
                <h4>Keep track of your daily trash below:</h4>
                </>
        )
    }
};

export default AddTrashForm
