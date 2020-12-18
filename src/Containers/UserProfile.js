import React from 'react'
import TrashCard from '../Components/TrashCard';
import Search from '../Components/Search';


class UserProfile extends React.Component{
    state={
        searchValue: ""
    }

    searchHandler = (event) => {
        this.setState({ [event.target.name]: event.target.value });
        console.log(this.state.searchValue)
      };
    

    renderTrashItems= () => {
        let trashItemsArray = this.props.currentUser.trash_items
        let filteredArray = trashItemsArray.filter(element => element.trash_category.kind.toLowerCase().includes(this.state.searchValue.toLowerCase()))
        return filteredArray.map(trashObj => <TrashCard key={trashObj.id} trashObj={trashObj} deleteTrashItem={this.props.deleteTrashItem} editDescription={this.props.editDescription}/>);
    }

render(){
    let trashItemsArray = this.props.currentUser.trash_items
    console.log("UserProfile Props:", trashItemsArray)
    return(
        <div className="profileCard" >
            <h2>Welcome, {this.props.currentUser.name}!</h2>
            {this.props.currentUser? <Search searchValue={this.state.searchValue} searchHandler={this.searchHandler}/>: null}
            <h3>Your logged waste: </h3>
            {trashItemsArray? this.renderTrashItems(): null}
            {/* {this.props.currentUser? <TrashCard trashItemsArray = {this.props.currentUser.trash_items} />: null} */}
        </div>
    )
}
};

export default UserProfile;