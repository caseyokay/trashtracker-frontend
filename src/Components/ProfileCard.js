import React from 'react'
import TrashCard from './TrashCard';

class ProfileCard extends React.Component{

    renderTrashItems= () => {
        let trashItemsArray = this.props.userObj.trash_items
        return trashItemsArray.map(trashObj => <TrashCard key={trashObj.id} trashObj={trashObj}/>);
    }

    render(){
        return(
            <div className="profileCard" >
                <h2>Welcome, {this.props.userObj.name}!</h2>
                {this.renderTrashItems()}
            </div>
        )
    }
};

export default ProfileCard;