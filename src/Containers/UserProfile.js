import React from 'react'
import TrashCard from '../Components/TrashCard';
import Search from '../Components/Search';


class UserProfile extends React.Component{
    state={
        searchValue: "",
        clicked: false
    }

    searchHandler = (event) => {
        this.setState({ [event.target.name]: event.target.value });
        console.log(this.state.searchValue)
      };
    

    DRAFTrenderTrashItems= () => {
        let trashItemsArray = this.props.currentUser.trash_items
        let filteredArray = trashItemsArray.filter(element => element.trash_category.kind.toLowerCase().includes(this.state.searchValue.toLowerCase()))
        return filteredArray.map(trashObj => <TrashCard key={trashObj.id} trashObj={trashObj} deleteTrashItem={this.props.deleteTrashItem} editDescription={this.props.editDescription}/>);
    }

    renderTrashItems =() => {
        let trashItemsArray = this.props.trashItemsArray
        let userArray = trashItemsArray.filter(e => e.user.id === this.props.currentUser.id)
        console.log("User array:",userArray)
        let filteredArray = userArray.filter(element => element.trash_category.kind.toLowerCase().includes(this.state.searchValue.toLowerCase()))
        return filteredArray.map(trashObj => <TrashCard key={trashObj.id} trashObj={trashObj} deleteTrashItem={this.props.deleteTrashItem} editDescription={this.props.editDescription}/>);
    }

    buttonClickHandler = () => {
        this.setState({
            clicked: !this.state.clicked
        })
    }

render(){
    let trashItemsArray = this.props.currentUser.trash_items
    console.log("UserProfile Props trashItemsA:", this.props.trashItemsArray)
    return(
        <div className="profileCard" >
            <h2>Welcome, {this.props.currentUser.name}!</h2>
            {this.props.currentUser? <button onClick={this.buttonClickHandler}>Filter</button>: null}
            {this.state.clicked && <Search searchValue={this.state.searchValue} searchHandler={this.searchHandler}/>}
            <h3>Your logged waste: </h3>
            {trashItemsArray? this.renderTrashItems(): null}
            {/* {this.props.currentUser? <TrashCard trashItemsArray = {this.props.currentUser.trash_items} />: null} */}
        </div>
    )
}
};

export default UserProfile;