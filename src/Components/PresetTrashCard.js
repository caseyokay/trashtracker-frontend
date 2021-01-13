import React from 'react'

class PresetTrashCard extends React.Component{
    state={
        description: "",
        date: "",
        image: "",
        preset: true,
        user_id: "",
        trash_category_id: ""
    }
    clickHandler = ()  => {
        console.log("CLICK", this.props.trashObj)
        this.setState({
            description: this.props.trashObj.description,
            date: this.props.trashObj.date,
            image: this.props.trashObj.image,
           
            user_id: this.props.user.id, 
            trash_category_id: this.props.trashObj.trash_category.id
        }, () => {this.localSubmitHandler(this.state)}
        )
        // {this.state.user_id === this.props.user.id && this.localSubmitHandler()}
    }
    localSubmitHandler = (trashObj) => {
        console.log("Submit Handler", trashObj)
        this.props.addNewTrashItem(trashObj)
        this.setState({
            description: "",
            date: "",
            image: "",
            user_id: "",
            trash_category_id: ""
        })
    }
    render(){
        console.log(this.state)
      // {this.state.user_id === this.props.user.id && this.localSubmitHandler()}
        return(
        <div className="trashCard">
            <span className="content">
            <img className="trashImage" alt="waste img" src={this.props.trashObj.image} />
            <h4>Date: {this.props.trashObj.date}</h4>
            <h4>Type: {this.props.trashObj.trash_category.kind}</h4>
            <h4>Note: {this.props.trashObj.description}</h4> 
            {/* {this.state.clicked ? <button >Logged!</button>
            :}  */}
            <button onClick={this.clickHandler}>Add to Log</button>
            </span>
        </div>
        )
    }
};

export default PresetTrashCard;