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

const reducer= combineReducers({
    RegisterReducer,
    LoginReducer
});

export default reducer;