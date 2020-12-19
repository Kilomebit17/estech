const SEARCH_FRIENDS = 'Search-FriendsBar'
const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UN-FOLLOW'
const FRIENDS = 'FRIENDS'
const initialState = {
    friends: [],
    friendsValue:'',
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
    }
    return state
}
export const setFriends = (friends) => ({type:FRIENDS, friends})
export const followAction = (userId) => ({type:FOLLOW,userId})
export const unFollowAction = (userId) => ({type:UNFOLLOW,userId})
export const friendsSearchAction = (text) => {
    return {
        type:SEARCH_FRIENDS,
        friendsValue: text
    }
}
export default FriendsReducer;