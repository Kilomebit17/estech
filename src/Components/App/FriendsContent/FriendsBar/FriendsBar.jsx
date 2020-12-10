import React from 'react'
import F from './FriendsBar.module.css'
import People from "./People/People";
const FriendsBar = (props) => {
    const friends = props.FriendsContent.map(names => <People title={names.friendName}/>)
    return (
        <div className={F.names}>{friends}</div>
    )
}
export default FriendsBar