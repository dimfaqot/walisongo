import jwtDecode from "jwt-decode"

export const isLogin=(exp)=>{

    if(exp < new Date().getTime()){
        return true;
    }
}

export const getMenu=(token)=>{

  let m = jwtDecode(token);
console.log(m.role);



//   m=m.menu.menu;

    

//     let menu=[];

//     for(let i =0; i< m.length; i++){
//         let sm= m[i].subMenu;
//         sm =sm.split(",");
//         let subMenus=[];
//         for(let x =0; x< sm.length; x++){
//             subMenus[x]={id:x, name:sm[x]}
//         }
//         menu[i]={id:i, name:m[i].mainMenu, subMenu:subMenus}
//     }

    // return menu;
}

export const getSubMenu=(menu, mainMenu)=>{

    let subMenu=[];
    for(let i=0;i<menu.length;i++){
        if(menu[i].mainMenu===mainMenu){
            subMenu=menu[i].subMenu;
        }
    }
    subMenu=subMenu.split(",");
  
    return subMenu;
}
export const isSubMenu=(menu, mainMenu)=>{
    let subMenu=[];
    for(let i=0;i<menu.length;i++){
        if(menu[i].mainMenu===mainMenu){
            subMenu=menu[i].subMenu;
        }
    }
    return subMenu;
}

export const subMenuDataToSend=(menus, roleId, menuId, isian)=>{
    let dataToSend=[];
            for(let i=0; i<menus.length;i++){
                if(menus[i]._id===roleId){
                    let newMenu=[]
                    for(let x=0;x<menus[i].menu.length;x++){
                        if(menus[i].menu[x]._id===menuId){
                            newMenu[x]={mainMenu:menus[i].menu[x].mainMenu, subMenu:isian}
                        }else{
                            newMenu[x]={mainMenu:menus[i].menu[x].mainMenu, subMenu:menus[i].menu[x].subMenu}
                        }
                    }
                    dataToSend={
                        name:menus[i].name,
                        menu:newMenu
                    }
                }
            }
            return dataToSend;
}
export const roleMenuDataToSend=(isi, data)=>{
    let dataToSend=[];
    let newMenu=[]
                for(let x=0;x<data.menu.length;x++){
                        newMenu[x]={mainMenu:data.menu[x].mainMenu, subMenu:data.menu[x].subMenu}
                    
                }
            dataToSend={
                name:isi,
                menu:newMenu
            }
            return dataToSend;
}


