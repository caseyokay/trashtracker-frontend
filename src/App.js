import logo from './logo.svg';
import './App.css';
import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Welcome from './Components/Welcome';
import UserProfile from './Containers/UserProfile';


class App extends React.Component{
  state={
    usersArray: []
  };

  componentDidMount(){
    fetch("http://localhost:3000/api/v1/users")
    .then(resp => resp.json())
    .then(data => this.setState({usersArray: data}));
  };

  render(){
    return(
      <>
      <Switch>

      <Route path="/welcome" render={()=> <Welcome usersArray={this.state.usersArray}/>} />
      <Route path="/users/26" render={()=> <UserProfile usersArray={this.state.usersArray}/>} />
      <h1>App.js Checkkk</h1>
      </Switch>
      </>
    );
  }
};

export default App;
