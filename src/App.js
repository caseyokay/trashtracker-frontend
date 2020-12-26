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
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
        "Accepts": "application/json"
      },
      body: JSON.stringify(trashObj),
    })
    .then(resp => resp.json())
    // .then(newTrashItem => this.setState({trashItemsArray: [...this.state.trashItemsArray, newTrashItem]}));
    .then((data) => {
      this.setState({trashItemsArray:[...this.state.trashItemsArray, data]});
      console.log("adding new trash item:", data)
    });
  }

  editDescription = (description, id) => {
    console.log("editing", description, id)
    fetch(`http://localhost:3000/api/v1/trash_items/${id}`, {
      method: 'PATCH',
      body: JSON.stringify({
        description: description
      }),
      headers: {
        'Content-Type': 'application/json',
        "Accepts": "application/json"
      },
    })
    .then(resp => resp.json())
    // .then(json => console.log(json))
    .then((data) => {
      console.log(data)
      let copyTrashItemsArray = [...this.state.trashItemsArray]
      let newTrashItemsArray = copyTrashItemsArray.filter(e => e.id !== data.id)
      console.log(newTrashItemsArray)
      this.setState({trashItemsArray: [...newTrashItemsArray, data]})
  })
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
        console.log(newTrashItemsArray)
        this.setState({trashItemsArray: newTrashItemsArray})
    })
}

  render(){
    console.log("State in App.js: ",this.state)
    return(
      <div className="App">
      <Switch>
      <Route path="/welcome" render={()=> <Welcome currentUser={this.state.currentUser} trashCategoriesArray={this.state.trashCategoriesArray} addNewTrashItem={this.addNewTrashItem} />} />
{this.state.currentUser?<Route path= {`/users/${this.state.currentUser.id}`}  render={()=> <UserProfile currentUser={this.state.currentUser} trashItemsArray={this.state.trashItemsArray} trashCategoriesArray={this.state.trashCategoriesArray} deleteTrashItem={this.deleteTrashItem} editDescription={this.editDescription}/>} />:null}      <h1>Trash Tracker App</h1>
      </Switch>
      </div>
    );
  }
};

export default App;
