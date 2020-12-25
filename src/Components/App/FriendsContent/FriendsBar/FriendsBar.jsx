import React from 'react'
import F from './FriendsBar.module.css'
import People from "./People/People";
import * as axios from 'axios';
class FriendsBar extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                console.log(response)
                this.props.setFriends(response.data.items)
                this.props.setTotalFriendsCount(response.data.totalCount)
            })
    }
    getCurrentPage = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setFriends(response.data.items)
        })
    }
    getFriends() {
        return this.props.FriendsContent.map(users => <People title={users.name} id={users.id} key={users.id} follow={users.followStatus} photoUrl={users.photos} followStatus={users.followStatus} unFollow={this.props.unFollow} follow={this.props.follow}/>)
    }
    render() {
        const pageCount = Math.ceil(this.props.totalCount / this.props.pageSize)
        let pageCountArr = []
        for (let i = 1; i < pageCount; i++ ) {
            pageCountArr.push(i)
        }
        return (
            <div className={F.friends}>
                {pageCountArr.map(p => <span key={p.id} className={this.props.currentPage === p && F.selectSpan} onClick={(e) => this.getCurrentPage(p)}>{p}</span>)}
                {this.getFriends()}
            </div>
        )
    }
}
export default FriendsBar