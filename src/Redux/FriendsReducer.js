const SEARCH_FRIENDS = 'Search-FriendsBar'
const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UN-FOLLOW'
const FRIENDS = 'FRIENDS'
const CHANGE_CURRENT_PAGE = 'CHANGE_CURRENT_PAGE'
const CHANGE_TOTAL_COUNT = 'CHANGE_TOTAL_COUNT'
const initialState = {
    friends: [],
    friendsValue:'',
    pageSize:10,
    totalCount:0,
    currentPage:1,
}
const FriendsReducer = (state = initialState,action) => {
    switch (action.type) {
        case SEARCH_FRIENDS:
            let stateCopy = {...state}
            stateCopy.friendsValue = action.friendsValue
            return stateCopy
        case FOLLOW:
            return {
                ...state,
                friends: state.friends.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followStatus: true}
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                friends: state.friends.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followStatus: false}
                    }
                    return u;
                })
            }
        case FRIENDS:
            return {...state, friends: action.friends}
        case CHANGE_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        case CHANGE_TOTAL_COUNT:
            return {...state, totalCount: action.count}
    }
    return state
}
export const setFriends = (friends) => ({type:FRIENDS, friends})
export const currentPageAction = (currentPage) => ({type:CHANGE_CURRENT_PAGE, currentPage})
export const setTotalCountAC = (totalCount) => ({type:CHANGE_TOTAL_COUNT, count:totalCount})
export const followAction = (userId) => ({type:FOLLOW,userId})
export const unFollowAction = (userId) => ({type:UNFOLLOW,userId})
export const friendsSearchAction = (text) => {
    return {
        type:SEARCH_FRIENDS,
        friendsValue: text
    }
}
export default FriendsReducer;