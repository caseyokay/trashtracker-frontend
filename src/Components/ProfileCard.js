import React from 'react'

class ProfileCard extends React.Component{

    render(){
        return(
            <div className="card" >
                <h2>Welcome, {this.props.userObj.name}!</h2>
            </div>
        )
    }
};

export default ProfileCard;