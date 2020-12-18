import './App.css';
import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Welcome from './Components/Welcome';
import UserProfile from './Containers/UserProfile';


class App extends React.Component{
  state={
    currentUser: {},
    trashItemsArray: [],
    trashCategoriesArray: [],
  };

  componentDidMount() {
    Promise.all([
    fetch("http://localhost:3000/api/v1/users/6"),
    fetch("http://localhost:3000/api/v1/trash_items"),
    fetch("http://localhost:3000/api/v1/trash_categories")])
    .then(([res1, res2, res3]) => {
       return Promise.all([res1.json(), res2.json(), res3.json()]) 
    })
    .then(([data1, data2, data3]) =>{
      this.setState({
        currentUser:data1,
        trashItemsArray:data2,
        trashCategoriesArray:data3,
      })
    });
    console.log("CDM: ", this.state)
  };

  addNewTrashItem = (trashObj) => {
    console.log("Adding new trash in app:", trashObj);
    fetch("http://localhost:3000/api/v1/trash_items",{
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
        "Accepts": "application/json"
      },
      body: JSON.stringify(trashObj),
    })
    .then(resp => resp.json())
    // .then(newTrashItem => this.setState({trashItemsArray: [...this.state.trashItemsArray, newTrashItem]}));
    .then((data) => {
      this.setState({trashItemsArray:[...this.state.trashItemsArray, trashObj]});
      console.log("adding new trash item:", trashObj)
    });
  }

  editDescription = (description, id) => {
    console.log("editing", description, id)
  }


  deleteTrashItem = (trashObj) => {
    console.log("DELETING", trashObj.id)
    fetch(`http://localhost:3000/api/v1/trash_items/${trashObj.id}`, {
        method: "DELETE",
    })
    .then(resp => resp.json())
    .then(()=>{
        let copyTrashItemsArray = [...this.state.trashItemsArray]
        let newTrashItemsArray = copyTrashItemsArray.filter(e => e.id !== trashObj.id)
        this.setState({trashItemsArray: newTrashItemsArray})
    })
    window.location.reload();
}

  render(){
    return(
      <>
      <Switch>
     <Route path="/welcome" render={()=> <Welcome currentUser={this.state.currentUser} trashCategoriesArray={this.state.trashCategoriesArray} addNewTrashItem={this.addNewTrashItem} />} />
      <Route path="/users/6" render={()=> <UserProfile currentUser={this.state.currentUser} trashCategoriesArray={this.state.trashCategoriesArray} deleteTrashItem={this.deleteTrashItem} editDescription={this.editDescription}/>} />
      <h1>Trash Tracker App</h1>
      </Switch>
      </>
    );
  }
};

export default App;
