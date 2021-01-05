import React from 'react'
import {NavLink, withRouter} from 'react-router-dom'
import {Route, Switch, Redirect} from 'react-router-dom';
import AddTrashForm from './AddTrashForm';
import TrashContainer from '../Containers/TrashContainer';
import AboutPage from './AboutPage';
import "./Welcome.css";


class Welcome extends React.Component{


render(){
    console.log("Category Welcome props",this.props)
    console.log("Welcome state:",this.state)
    return(
        <>
        {/* {this.props.user ?  */}
            
                <h1 className="header">Welcome!</h1>
                
                {this.props.user? 
                <NavLink to={`/users/${this.props.user.id}`}> 
                <h3>Profile Page</h3>
                </NavLink>
                :null}

                <h4 className="form-header">Use the form below to log your daily trash:</h4>
               {this.props? <AddTrashForm user={this.props.user} trashCategoriesArray={this.props.trashCategoriesArray} addNewTrashItem={this.props.addNewTrashItem}/>:null} 
               
               
               {/* {this.props? <TrashContainer trashItemsArray={this.props.trashItemsArray} /> : null} */}
               

               <AboutPage/>

            
        </>

    ) 
}
}

export default withRouter(Welcome);