const SEARCH_FRIENDS = 'Search-FriendsBar'
const initialState = {
    friends: [
        { id: 0, friendName: 'Kate' },
        { id: 1, friendName: 'Oleg' },
        { id: 2, friendName: 'Denis' },
        { id: 3, friendName: 'Olga' },
    ],
    friendsValue:''
}
const FriendsReducer = (state = initialState,action) => {
    switch (action.type) {
        case SEARCH_FRIENDS: {
            let stateCopy = {...state}
            stateCopy.friendsValue = action.friendsValue
            return stateCopy
        }
    }
    return state
}
export const friendsSearchAction = (text) => {
    return {
        type:SEARCH_FRIENDS,
        friendsValue: text
    }
}
export default FriendsReducer;