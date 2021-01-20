import {getAuth} from "../API/API";

const SET_AUTH_DATA = 'SET_AUTH_DATA'

const initialState = {
    email:null,
    id:null,
    login:null,
    isAuth:false
}
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_DATA: 
            return {...state,...action.data,isAuth:true}
        default:
            return state
    }
}
export const setAuthData = (id,email,login) => ({type:SET_AUTH_DATA,data:{id,email,login}})

export const getAuthThunkCreator = () => {
    return (dispatch) => {
        getAuth().then(response => {
            if (response.data.resultCode === 0) {
                let {id,email,login} = response.data.data
                dispatch(setAuthData(id,email,login))
            }
        })
    }
}
export default authReducer;