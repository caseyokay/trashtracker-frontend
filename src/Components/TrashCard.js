import React from 'react'

class TrashCard extends React.Component{
    localDelete= () => {
        this.props.deleteTrashItem(this.props.trashObj)
    }
  

    render(){
        return(
        <div className="trashCard">
            <span className="content">
            <h4>Date: {this.props.trashObj.date}</h4>
            <img alt="waste img" src={this.props.trashObj.trash_category.image} />
            <h4>Description: {this.props.trashObj.description}</h4>
            <h4>Type: {this.props.trashObj.trash_category.kind}</h4>
            <button onClick={this.localDelete}>Remove</button>
            </span>
        </div>
        )
    }
};

export default TrashCard;