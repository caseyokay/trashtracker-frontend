import './App.css';
import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Welcome from './Components/Welcome';
import UserProfile from './Containers/UserProfile';


class App extends React.Component{
  state={
    usersArray: [],
    trashItemsArray: [],
    trashCategoriesArray: []
  };

  componentDidMount() {
    Promise.all([
    fetch("http://localhost:3000/api/v1/users"),
    fetch("http://localhost:3000/api/v1/trash_items"),
    fetch("http://localhost:3000/api/v1/trash_categories")])
    .then(([res1, res2, res3]) => {
       return Promise.all([res1.json(), res2.json(), res3.json()]) 
    })
    .then(([data1, data2, data3]) =>{
      this.setState({
        usersArray:data1,
        trashItemsArray:data2,
        trashCategoriesArray:data3
      })
    })
    console.log("CDM: ", this.state)
  };

  addNewTrashItem = (trashObj) => {
    console.log("Adding new trash in app:", trashObj)
  }

  render(){
    return(
      <>
      <Switch>
      <Route path="/welcome" render={()=> <Welcome usersArray={this.state.usersArray} trashCategoriesArray={this.state.trashCategoriesArray} addNewTrashItem={this.addNewTrashItem}/>} />
      <Route path="/users/32" render={()=> <UserProfile usersArray={this.state.usersArray}/>} />
      <h1>Trash Tracker App</h1>
      </Switch>
      </>
    );
  }
};

export default App;
