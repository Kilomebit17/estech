import {deleteFollow, getFriends, postFollow, userApi} from "../API/API";

const SEARCH_FRIENDS = 'Search-FriendsBar'
const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UN-FOLLOW'
const FRIENDS = 'FRIENDS'
const CHANGE_CURRENT_PAGE = 'CHANGE_CURRENT_PAGE'
const CHANGE_TOTAL_COUNT = 'CHANGE_TOTAL_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const SET_FRIEND_PROFILE = 'SET_FRIEND_PROFILE'
const TOGGLE_IS_FOLLOWING = 'TOGGLE_IS_FOLLOWING'
const initialState = {
    friends: [],
    friendsValue:'',
    pageSize:5, // сколько людей в друзьях
    totalCount:0,  // сколько всего на сервере
    currentPage:1, // какая страница
    isFetching:true,
    profileFriend:[],
    followStatus:true,
    followingInProgress:[],
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
        case TOGGLE_IS_FETCHING: 
            return {...state, isFetching:action.isFetching}
        case SET_FRIEND_PROFILE:
            return {...state, profileFriend:action.profileFriend}
        case TOGGLE_IS_FOLLOWING: {
            return {...state,
                followingInProgress:action.isFetching
                    ?[...state.followingInProgress,action.userId]
                    :state.followingInProgress.filter(id => id !== action.userId)
            }
        }
    }
    return state
}
export const setProfileFriend = (profileFriend) => ({type:SET_FRIEND_PROFILE,profileFriend})
export const setFriends = (friends) => ({type:FRIENDS, friends})
export const setFetching = (isFetching) => ({type:TOGGLE_IS_FETCHING, isFetching})
export const setCurrentPage = (currentPage) => ({type:CHANGE_CURRENT_PAGE, currentPage})
export const setTotalCount = (totalCount) => ({type:CHANGE_TOTAL_COUNT, count:totalCount})
export const follow = (userId) => ({type:FOLLOW,userId})
export const unFollow = (userId) => ({type:UNFOLLOW,userId})
export const friendsSearchAction = (text) => ({type:SEARCH_FRIENDS, friendsValue: text})
export const toggleFollowingProgress = (isFetching,userId) => ({type:TOGGLE_IS_FOLLOWING,isFetching,userId})

export const getFriendsThunkCreator = (currentPage,pageSize) => { // thunk с замиканием
    return (dispatch) => {
        dispatch(setFetching(true));
        getFriends(currentPage,pageSize).then((data) => {
            dispatch(setFetching(false));
            dispatch(setFriends(data.items));
            dispatch(setTotalCount(data.totalCount));
        })
    }
}
export const followThunkCreator = (userId) => { // thunk c follow
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true,userId))
        postFollow(userId).then((response) => {
            if (response.data.resultCode === 0) {
                dispatch(follow(userId))
            }
            dispatch(toggleFollowingProgress(false,userId))
        });
    }
}
export const unFollowThunkCreator = (userId) => { // thunk c follow
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true,userId))
        deleteFollow(userId).then((response) => {
            if (response.data.resultCode === 0) {
                dispatch(unFollow(userId))
            }
            dispatch(toggleFollowingProgress(false,userId))
        });
    }
}
export const getFetchingThunkCreator = (userId) => {
    return (dispatch) => {
        dispatch(setFetching(true));
        userApi(userId).then((response) => {
            dispatch(setFetching(false));
            dispatch(setProfileFriend(response.data));
        });
    }
}
export default FriendsReducer;