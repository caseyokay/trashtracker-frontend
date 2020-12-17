import React from 'react'
import ProfileCard from '../Components/ProfileCard';
// import TrashCard from '../Components/TrashCard';

class UserProfile extends React.Component{

renderProfileCard = () => {
    let user32Array = this.props.usersArray.filter(item => {
        return item.id  === 32
    });
    return user32Array.map(userObj => <ProfileCard key={userObj.id} userObj={userObj}/>);
    
}


render(){
    return(
        <>
        <h1>User's Profile Page</h1>
        <div className="index">
           {this.renderProfileCard()}
        </div>
        </>
    ) 
}
};

export default UserProfile;