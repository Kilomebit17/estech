import {getAuth,postLogin} from "../API/API";

const SET_AUTH_DATA = 'SET_AUTH_DATA'
// const SET_LOGIN = 'SET_LOGIN'

const initialState = {
    email:null,
    id:null,
    login:null,
    isAuth:false,
    // loginForm: {
    //     email:'',
    //     password:'',
    //     rememberMe:false
    // }
};
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_DATA:
            return {...state,...action.data,isAuth:true}
        // case SET_LOGIN: {
        //     return {...state,...action.login}
        // }
        default:
            return state
    }
}
// export const setLoginData = (email,password,rememberMe) => ({type:SET_LOGIN,login:{email,password,rememberMe}})
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
// export const getLoginDataThunkCreator = () => dispatch => {
//     postLogin().then(response => {
//         let {email,password,rememberMe} = response.data
//         dispatch(setLoginData(email,password,rememberMe))
//     })
// }
export default authReducer;