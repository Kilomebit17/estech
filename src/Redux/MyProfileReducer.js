import { myProfileApi,updateStatus,getStatus } from "../API/API"

const GET_MY_PROFILE = 'GET_MY_PROFILE' 
const GET_STATUS = 'GET_STATUS'


const initialState = {
    myProfile:[],
    status:'',
    isFetching:true
}
const MyProfileReducer = (state = initialState,action) => {
    switch (action.type) {
        case GET_MY_PROFILE: {
            return {...state,myProfile:action.myProfile,isFetching:false}
        }
        case GET_STATUS: {
            return {...state,status:action.status}
        }
    }
    return state
} 
export const setMyProfile = (myProfile) => ({type:GET_MY_PROFILE,myProfile})
export const setStatus = (status) => ({type:GET_STATUS,status})


export const getStatusThunkCreator = (userId) => {
    return (dispatch) => {
        getStatus(userId).then(response => {
            dispatch(setStatus(response.data))
        })
    }
}
export const updateStatusThunkCreator = (status) => {
    return (dispatch) => {
        updateStatus(status).then(response => {
        if (response.data.resultCode = 0) {
            dispatch(setStatus(status))
        }
        })
    }
}

export const getMyProfileThunkCreator = () => {
    return (dispatch) => {
        myProfileApi().then(response => {
            console.log(response.data);
            dispatch(setMyProfile(response.data))
        })
    }
}
export default MyProfileReducer