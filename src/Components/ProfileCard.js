// import React from 'react'
// import TrashCard from './TrashCard';
// import Search from '../Components/Search';


// class ProfileCard extends React.Component{
//     state={
//         searchValue: ""
//     }

//     searchHandler = (event) => {
//         this.setState({ [event.target.name]: event.target.value });
//         console.log(this.state.searchValue)
//       };
    

//     renderTrashItems= () => {
//         let trashItemsArray = this.props.userObj.trash_items
//         let filteredArray = trashItemsArray.filter(element => element.trash_category.kind.toLowerCase().includes(this.state.searchValue.toLowerCase()))
//         return filteredArray.map(trashObj => <TrashCard key={trashObj.id} trashObj={trashObj} deleteTrashItem={this.props.deleteTrashItem}/>);
//     }


//     render(){
//         let trashItemsArray = this.props.userObj.trash_items
//         console.log("ProfileCard Props:", trashItemsArray)
//         return(
//             <div className="profileCard" >
//                 <h2>Welcome, {this.props.userObj.name}!</h2>
//                 <Search searchValue={this.state.searchValue} searchHandler={this.searchHandler}/>
//                 <h3>Your logged waste: </h3>
//                 {this.renderTrashItems()}
//             </div>
//         )
//     }
// };

// export default ProfileCard;