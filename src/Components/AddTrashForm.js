import React from 'react';

class AddTrashForm extends React.Component{
    state={
        description: "",
        date: "",
        user: this.props.currentUser,
        trash_category: {},
        trashCatArray:[this.props.landfill, this.props.recycling, this.props.compost]
    }


    changeHandler = (event) => {
        this.setState({
          [event.target.name]: event.target.value,
        });
        console.log(this.state)
    };

    objChangeHandler = (event) => {
        console.log(event.target.value)
    }

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
                    <label>Date (YYYY-MM-DD):</label><br/><br/>
                    <input type="text" value={this.state.date} name="date" onChange={this.changeHandler}
                    /><br/><br/>
                    <label>Description:</label><br/><br/>
                     <input type="text" value={this.state.description} name="description" onChange={this.changeHandler}
                    /><br/><br/>
                    <label>Category:</label><br/><br/>
                    <select onChange={this.objChangeHandler}>
                    {this.state.trashCatArray.map((option, index) =>
                    <option key={index}
                    value={JSON.stringify(option)}>
                        {option.kind}
                    </option>
                    )}
                    </select>
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
