import './App.css';
import React from 'react';
import {Route, Switch, withRouter} from 'react-router-dom';
import Welcome from './Components/Welcome';
import UserProfile from './Containers/UserProfile';
import NavBar from './Components/NavBar';
import EditUserForm from './Components/EditUserForm';
import SignUp from './Components/SignUp';
import LoginForm from './Components/LoginForm';


class App extends React.Component{
  state={
    currentUser: {},
    trashItemsArray: [],
    trashCategoriesArray: [],
    usersArray: [],
    user: null
  };


  componentDidMount() {
    Promise.all([
    fetch("http://localhost:3000/api/v1/users/24"),
    fetch("http://localhost:3000/api/v1/trash_items"),
    fetch("http://localhost:3000/api/v1/trash_categories"),
    fetch("http://localhost:3000/api/v1/users")
  ])
    .then(([res1, res2, res3, res4]) => {
       return Promise.all([res1.json(), res2.json(), res3.json(), res4.json()]) 
    })
    .then(([data1, data2, data3, data4]) =>{
      this.setState({
        currentUser:data1,
        trashItemsArray:data2,
        trashCategoriesArray:data3,
        usersArray: data4
      })
    });
    console.log("CDM: ", this.state)
    this.setLocalStorage()
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


  signupHandler = (userObj) => {
    fetch("http://localhost:3000/api/v1/users", {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
        "Accepts": "application/json"
      },
      body: JSON.stringify(userObj),
    })
    .then(resp => resp.json())
    .then(console.log)
  }


  loginHandler = (userInfo) => {
    console.log("Logging In:", userInfo)
    fetch("http://localhost:3000/api/v1/login", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        "Accepts": "application/json"
      },
      body: JSON.stringify({
        email: userInfo.email,
        password: userInfo.password,
      }),
    })
    .then(resp => resp.json())
    .then(data => {
      console.log("token: ", data.jwt)
      localStorage.setItem("token", data.jwt)
      this.setLocalStorage(data)
      this.setState({user: data.user}) 
      this.props.history.push("/welcome")
    })
  }

  setLocalStorage=(data)=>{
    const token = localStorage.getItem("token")
    console.log("User data:", data)
    console.log("logged in user token:", token)
    if (token){
      fetch("http://localhost:3000/api/v1/profile", {
        method: "GET",
        headers: {Authorization: `Bearer ${token}`},
      })
      .then(resp => resp.json())
      .then(data => console.log("Local Storage:", data))
    } else {
      this.props.history.push("/signup")
    }
  }



  render(){
    console.log("State in App.js: ",this.state)
    return(
      <div className="App">
       {this.state.currentUser? <NavBar />: null}
      <Switch>
        <Route path="/login" render={() => <LoginForm submitHandler={this.loginHandler}/> }/>
        <Route path="/signup" render={()=> <SignUp submitHandler={this.signupHandler}/>}/>
        {this.state.currentUser?<Route path= {`/users/${this.state.currentUser.id}/edit`}  render={()=> <EditUserForm user={this.state.user} currentUser={this.state.currentUser} />} />:null}     
        <Route path="/welcome" render={()=> <Welcome user={this.state.user} currentUser={this.state.currentUser} trashCategoriesArray={this.state.trashCategoriesArray} addNewTrashItem={this.addNewTrashItem} />} />
        {this.state.currentUser?<Route path= {`/users/${this.state.currentUser.id}`}  render={()=> <UserProfile user={this.state.user} currentUser={this.state.currentUser} trashItemsArray={this.state.trashItemsArray} trashCategoriesArray={this.state.trashCategoriesArray} deleteTrashItem={this.deleteTrashItem} editDescription={this.editDescription}/>} />:null}     
        <h1>Trash Tracker App</h1>
      </Switch>
      </div>
    );
  }
};

export default withRouter(App);
