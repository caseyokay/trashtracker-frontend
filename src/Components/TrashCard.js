import React from 'react'

class TrashCard extends React.Component{
    localDelete= () => {
        this.props.deleteTrashItem(this.props.trashObj)
    }

    localEditDescription = () => {
        this.props.localEditDescription()
    }

  

    render(){
        return(
        <div className="trashCard">
            <span className="content">
            <h4>Date: {this.props.trashObj.date}</h4>
            <img alt="waste img" src={this.props.trashObj.trash_category.image} />
            <form>Description:</form>
            <input
            type="text"
            placeholder={this.props.trashObj.description}
            name={this.props.trashObj.description}
            
            />
            <h4>Type: {this.props.trashObj.trash_category.kind}</h4>
            <button onClick={this.localDelete}>Remove</button>
            </span>
        </div>
        )
    }
};

export default TrashCard;