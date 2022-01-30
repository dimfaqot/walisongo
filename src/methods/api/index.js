import jwtDecode from "jwt-decode"
 
 const fetchMenu = async (token) => {

    const tokenDecode=jwtDecode(token);
    const id= tokenDecode.menuId;
    
    const response = await 
      fetch('http://192.168.1.4:8000/api/menus/find/'+id,
      {
        method: 'GET',
                headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'token': 'bearer '+token
                }
        })
        const result = await response.json()
          return result
   }

 const fetchAllMenu = async (token) => {

    const response = await 
      fetch('http://192.168.1.4:8000/api/menus/',
      {
        method: 'GET',
                headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'token': 'bearer '+token
                }
        })
        const result = await response.json()
          return result
   }


 const editSubMenu = async (token, id, data) => {
    const response = await 
      fetch('http://192.168.1.4:8000/api/menus/'+id,
      {
        method: 'PUT',
                headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'token': 'bearer '+token
                },
                body: JSON.stringify(data)
        })
        const result = await response.json()
          return result
   }

 const editRoleMenu = async (token, id, data) => {

    const response = await 
      fetch('http://192.168.1.4:8000/api/menus/'+id,
      {
        method: 'PUT',
                headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'token': 'bearer '+token
                },
                body: JSON.stringify(data)
        })
        const result = await response.json()
          return result
   }
 const delRoleMenu = async (token, id) => {

    const response = await 
      fetch('http://192.168.1.4:8000/api/menus/'+id,
      {
        method: 'DELETE',
                headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'token': 'bearer '+token
                }
        })
        const result = await response.json()
          return result
   }


   export{fetchMenu, fetchAllMenu, editSubMenu, editRoleMenu, delRoleMenu}