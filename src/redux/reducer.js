import {combineReducers} from 'redux';
import * as get from './initialState';

const RegisterReducer=(state= get.initialStateRegister, action)=>{

    if(action.type==='SET_FORM'){
        return{
            ...state,
            form: {
                ...state.form,
                [action.inputType]:action.inputValue,
            },
        }
    }
    return state
}

const LoginReducer=(state= get.initialStateLogin, action)=>{
    if(action.type==='SET_FORM'){
        return{
            ...state,
            form: {
                ...state.form,
                [action.inputType]:action.inputValue,
            },
        }
    }
    return state
}

const UserReducer=(state= get.initialStateUser, action)=>{
    if(action.type==='SET_USER'){
        return{
            ...state,
            user:action.user
        }
    }
    return state
}

const reducer= combineReducers({
    RegisterReducer,
    LoginReducer,
    UserReducer

});

export default reducer;