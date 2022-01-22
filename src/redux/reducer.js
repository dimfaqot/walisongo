import {combineReducers} from 'redux';
const initialStateRegister={
    form: {
        username:'',
        email:'',
        name:'',
        sub:'',
        password:''
    }
}

const initialStateLogin={
    form:{
        username:'',
        password:''
    }
}

const RegisterReducer=(state= initialStateRegister, action)=>{

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

const LoginReducer=(state= initialStateLogin, action)=>{
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