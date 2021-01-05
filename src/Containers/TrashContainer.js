import React from 'react';
import PresetTrashCard from '../Components/PresetTrashCard';


class TrashContainer extends React.Component{
    renderTrashItems =() => {
        let trashItemsArray = this.props.trashItemsArray
        console.log(trashItemsArray)
        let userArray = trashItemsArray.filter(e => e.user.name === "preset")
        console.log("User array:",userArray)
      return userArray.map(trashObj => <PresetTrashCard key={trashObj.id} trashObj={trashObj} trashItemsArray={this.props.trashItemsArray}/>);
    }

render(){
    return(
        <>
        <p>Pre-set options for your trash log:</p>,
        {this.props? this.renderTrashItems(): null}
        </>
    )
}
}

export default TrashContainer;