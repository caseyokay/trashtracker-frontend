import React from 'react';

class AddTrashForm extends React.Component{
    state={
        description: "",
        date: "",
    }
    render(){
        console.log("Form Props:", this.props.currentUser)
        return(
                <>
                <h4>Keep track of your daily trash below:</h4>
                </>
        )
    }
};

export default AddTrashForm
