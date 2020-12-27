import React from 'react';

class AddTrashForm extends React.Component{
    state={
        description: "",
        date: "",
        user_id: 18,
        trash_category_id: 7,
    }


    changeHandler = (event) => {
        this.setState({
          [event.target.name]: event.target.value,
        });
        console.log("Trash Form State:",this.state);
    };

    objChangeHandler = (event) => {
        console.log(event.target.name)
        this.setState({
            trash_category_id: parseInt(event.target.value)
          });
    }

    localSubmitHandler = (event) => {
        event.preventDefault();
        this.props.addNewTrashItem(this.state)
        console.log("Sending state:",this.state)
        this.setState({
            description: "",
            date: "",
            user_id: 6,
            trash_category_id: 25,
        })
        // window.location.reload();
    };

    render(){
        // console.log("Trash Form Props:",this.props);
        // let emptyTrashObj = {kind:'', image:''}
        // let tCA = this.props.trashCategoriesArray
        // let trashCatArray = tCA.unshift(emptyTrashObj)
        // console.log("LOOK HERE", trashCatArray, emptyTrashObj)
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
                    {this.props.trashCategoriesArray.map((option, index) =>
                    <option key={index}
                    value={option.id} name="trash_category_id">
                        {/* {console.log("option:", option.id, )} */}
                        {option.kind}
                    </option>
                    )}
                    </select>
                     {/* <input type="text" value={this.state.trash_category} name="trash_category" onChange={this.changeHandler}
                    /><br/><br/> */}
                    <button >Submit</button>
                    </form>
                </div>
                </>
        )
    }
};

export default AddTrashForm
