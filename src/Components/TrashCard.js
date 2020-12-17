import React from 'react'

class TrashCard extends React.Component{

    render(){
        return(
        <div className="trashCard">
          <span className="content">
          <h2 >{this.props.trashObj.date}</h2>
          <img alt="waste img" src={this.props.trashObj.trash_category.image} />
          <h3>{this.props.trashObj.description}</h3>
         </span>
    </div>
        )
    }
};

export default TrashCard;