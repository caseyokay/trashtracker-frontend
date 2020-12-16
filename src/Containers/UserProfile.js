import React from 'react'
import ProfileCard from '../Components/ProfileCard';

class UserProfile extends React.Component{

renderUserCard = () => {
    let user26Array = this.props.usersArray.filter(item => {
        return item.id  === 26
    });
    return user26Array.map(userObj => <ProfileCard key={userObj.id} userObj={userObj}/>);
}

render(){
    // console.log(this.props.usersArray)
    // const user26 = this.props.usersArray.filter(item => {
    //     return item.id  === 26
    // })
    return(
        <>
        <p>User's Profile Page</p>
        <div className="index">
           {this.renderUserCard()}
        </div>
        </>
    ) 
}
};

export default UserProfile;