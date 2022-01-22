import {combineReducers} from 'redux';
const initialStateRegister={
    form: {
        username:'',
        email:'',
        name:'',
        sub:'',
        password:''
    },
    title: ''
}

const initialStateLogin={
    form:{
        username:'',
        password:''
    }
}

const RegisterReducer=(state= initialStateRegister, action)=>{
    if(action.type==='SET_TITLE'){
        return{
            ...state,
            title: 'Title berubah'
        }
    }
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
    return state
}

const reducer= combineReducers({
    RegisterReducer,
    LoginReducer
});

export default reducer;