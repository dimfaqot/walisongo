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
const UpdateMenuReducer=(state= get.initialStateUpdateMenu, action)=>{
    if(action.type==='SET_FORM_UPDATE_MENU'){
        return{
            ...state,
            // name:action.name,
            name:action.name,
            menu: [
                {
                    ...state.menu,
                    mainMenu:action.mainMenu,
                    subMenu:action.subMenu


                }

            ]
        }
    }
    return state
}

const UserReducer=(state= get.initialStateUser, action)=>{
    if(action.type==='SET_USER'){
        return{
            ...state,
            user: action.user
        }
    }
    return state
}
const MenuReducer=(state= get.initialStateMenu, action)=>{
    if(action.type==='SET_MENU'){
        return{
            ...state,
            menu: action.menu
        }
    }
    return state
}

const reducer= combineReducers({
    RegisterReducer,
    LoginReducer,
    UserReducer,
    MenuReducer,
    UpdateMenuReducer

});

export default reducer;