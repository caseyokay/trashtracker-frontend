import React from 'react';
import PresetTrashCard from '../Components/PresetTrashCard';


class TrashContainer extends React.Component{
    renderTrashItems =() => {
        let trashItemsArray = this.props.trashItemsArray
        console.log(trashItemsArray)
        let userArray = trashItemsArray.filter(e => e.user.name === "preset")
        console.log("User array:",userArray)
      return userArray.map(trashObj => <PresetTrashCard key={trashObj.id} trashObj={trashObj} user={this.props.user} trashItemsArray={this.props.trashItemsArray} addNewTrashItem={this.props.addNewTrashItem} />);
    }

render(){
    return(
        <>
        <h4>Pre-set options for your trash log:</h4>
        <div className="welcomeTrash">
        <br></br>
        {this.props? this.renderTrashItems(): null}
        </div>
        </>
    )
}
}

export default TrashContainer;