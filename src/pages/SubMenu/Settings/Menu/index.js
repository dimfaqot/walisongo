import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { MenuFlatList } from '../../../../components/flatlist';
import { SubMenuHeader } from '../../../../components/headers';
import { fetchAllMenu } from '../../../../methods/api';
import { colors } from '../../../../utils';
import EditForm from '../../editForm';

const Menu = () => {

    // GLOBAL STATE REDUX
            const {user}=useSelector(state=>state.UserReducer);
    // END


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


    // LOCAL STATE
            const[menus, setMenus]= useState([]);
            const [role, setRole]=useState('');
    // END


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

    // API
    // get Menus
            async function getAllMenuApi(){
                let data= await fetchAllMenu(user.accessToken);
                setMenus(data);
            }
    // END


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
       

    // FUNCTIONS   
            const activeMenu=(data)=>{
                setRole(data)
            }
            
    // END


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    
            
            

    // USE EFFECT
        useEffect(()=>{
            getAllMenuApi()
        }, [])
    // END
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  return (
    <View style={styles.body}>
        <View>
            <SubMenuHeader user={user} />
        </View>
         <View style={{ alignItems:'center', marginTop:90 }}>
            <MenuFlatList roleId={role._id} activeMenu={activeMenu} menus={menus} />
        </View>
        {role !=='' && <EditForm data={role} />}
    </View>
  );
};



const styles= StyleSheet.create({
    body:{
      flex:1,
      padding:10,
      backgroundColor:colors.bg.light
    },
    menu:{
      marginTop:90
    }
  })
export default Menu;
