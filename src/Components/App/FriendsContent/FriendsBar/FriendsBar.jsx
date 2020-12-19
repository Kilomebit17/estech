import React from 'react'
import F from './FriendsBar.module.css'
import People from "./People/People";
const FriendsBar = (props) => {
    if(props.FriendsContent.length === 0) {
        props.setFriends([
            { id: 0, friendName: 'Kate', followStatus:true, photoUrl:'https://upload.wikimedia.org/wikipedia/commons/e/e6/Kate_Bosworth_Deauville_2011.jpg'},
            { id: 1, friendName: 'Oleg', followStatus:false, photoUrl:'https://static.wikia.nocookie.net/vikingstv/images/7/72/The_Prophet.png/revision/latest?cb=20191009102608'},
            { id: 2, friendName: 'Denis', followStatus:false, photoUrl:'https://yt3.ggpht.com/ytc/AAUvwngSkcOWx95L04JguzKe13qsXc3lBeVv8g-aXygbLg=s900-c-k-c0x00ffffff-no-rj'},
            { id: 3, friendName: 'Olga', followStatus:true, photoUrl:'https://static.hollywoodreporter.com/sites/default/files/2019/11/gettyimages-1179665776_copy-compressed.jpg'},
        ])
    }
    const friends = props.FriendsContent.map(users => <People title={users.friendName} id={users.id} key={users.id} follow={users.followStatus} photoUrl={users.photoUrl} followStatus={users.followStatus} unFollow={props.unFollow} follow={props.follow}/>)
    return (
        <div className={F.names}>{friends}</div>
    )
}
export default FriendsBar