import {combineReducers} from 'redux';
const initialStateRegister={
    username:'',
    email:'',
    name:'',
    sub:'',
    password:''
}

const initialStateLogin={
    // username:'',
    // password:''
    info: "Masukkan password",
    isLogin:true
}

const RegisterReducer=(state= initialStateRegister, action)=>{
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