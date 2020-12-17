import React from 'react';

class AddTrashForm extends React.Component{
    state={
        description: "",
        date: "",
        user: this.props.currentUser,
        trash_category: {}
    }

    changeHandler = (event) => {
        this.setState({
          [event.target.name]: event.target.value,
        });
        console.log(this.state)
    };

    localSubmitHandler = (event) => {
        event.preventDefault();
        this.props.addNewTrashItem(this.state)
    };

    render(){
        console.log("Form Props",this.props);
        return(
                <>
                <div>
                    <form onSubmit={this.localSubmitHandler}>
                    <input type="text" value={this.state.date} name="date" onChange={this.changeHandler}
                    /><br/><br/>
                     <input type="text" value={this.state.description} name="description" onChange={this.changeHandler}
                    /><br/><br/>
                     <input type="text" value={this.state.trash_category} name="trash_category" onChange={this.changeHandler}
                    /><br/><br/>
                    <button >Submit</button>
                    </form>
                </div>
                </>
        )
    }
};

export default AddTrashForm
