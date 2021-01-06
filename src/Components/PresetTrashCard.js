import React from 'react'

class PresetTrashCard extends React.Component{
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

  

    render(){
        return(
        <div className="trashCard">
            <span className="content">
            <img className="trashImage" alt="waste img" src={this.props.trashObj.image} />
            <h4>Date: {this.props.trashObj.date}</h4>
            <h4>Type: {this.props.trashObj.trash_category.kind}</h4>
            <h4>Note: {this.props.trashObj.description}</h4> 
            {this.state.clicked ? <button >Logged!</button>
            : <button onClick={this.clickHandler}>Add to Log</button>}
            </span>
        </div>
        )
    }
};

export default PresetTrashCard;