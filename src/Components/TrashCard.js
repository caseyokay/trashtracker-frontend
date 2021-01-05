import React from 'react'

class TrashCard extends React.Component{
    state={
        clicked: false,
        description: "",
        id: ""
    }

    localDelete= () => {
        this.props.deleteTrashItem(this.props.trashObj)
    }

    submitHandler = (event) => {
        event.preventDefault()
    //   let trashObj = this.props.trashItemsArray.filter(e => e.id === this.state.id)
    //   console.log("TRASH OBJ", trashObj)
      this.props.editDescription(this.state.description, this.state.id)
      this.setState({description: ""})
    }

    clickHandler = ()  => {
        this.setState({
            clicked: !this.state.clicked
        })
    }

    changeHandler = (event) => {
    console.log("Trash Card Change:", event.target.value, event.target.id)
        this.setState({
            description: event.target.value,
            id: event.target.id
        })
    }

  

    render(){
        return(
        <div className="trashCard">
            <span className="content">
            <h4>Date: {this.props.trashObj.date}</h4>
            <img alt="waste img" src={this.props.trashObj.trash_category.image} />
            <h4>Type: {this.props.trashObj.trash_category.kind}</h4>
            <h4>Note: {this.props.trashObj.description}</h4> 
            <button onClick={this.clickHandler}>Edit</button>

            {this.state.clicked && <form onSubmit={this.submitHandler}>
            <input
            type="text"
            id = {this.props.trashObj.id}
            placeholder={this.props.trashObj.description}
            name="description"
            value={this.state.description}
            onChange={this.changeHandler}
            />
            <button>Update</button>
            </form>}
            
            <button onClick={this.localDelete}>Remove</button>
            <br/><br/>
            </span>
        </div>
        )
    }
};

export default TrashCard;