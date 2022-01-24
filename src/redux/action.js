export const setForm= (inputType, value)=>{
    return {type:'SET_FORM', inputType:inputType, inputValue:value}
}
export const setUser= (data)=>{
    return {type:'SET_USER', user:data}
}
