export const setForm= (inputType, value)=>{
    return {type:'SET_FORM', inputType:inputType, inputValue:value}
}
export const setFormUpdateMenu= (name, mainMenu, subMenu)=>{
    return {type:'SET_FORM_UPDATE_MENU', name:name, mainMenu:mainMenu, subMenu:subMenu}
}
export const setUser= (data)=>{
    return {type:'SET_USER', user:data}
}
export const setMenu= (data)=>{
    return {type:'SET_MENU', menu:data}
}
