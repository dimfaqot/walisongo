import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { Djana, Pondok, Settings, Ypp, Menu, Admin, Kepala, Bendahara, Sekretaris, Staff, User } from '../../assets';
import { fetchMenu } from '../../methods/api';
import { getSubMenu } from '../../methods/functions';
import { setMenu } from '../../redux';
import { colors } from '../../utils';

const HomeMenu =({navigation, token})=> {

    const [menus, setMenus]= useState([]);
    const dispatch= useDispatch();

    async function getMenuApi(){
        let data= await fetchMenu(token);
        dispatch(setMenu(data.menu))
        setMenus(data);
      }
    

      useEffect(()=>{
        getMenuApi()
      }, [])


      const renderMenus=(menu)=>{

        const to=menu.item.mainMenu.replace(/ /g,'');
        const onPress=()=>{
            navigation.navigate(to,{mainMenu:menu.item.mainMenu})
        }

       return(
           <View style={styles.container}>
                <TouchableOpacity onPress={onPress} style={styles.boxMenu}>
                    {menu.item.mainMenu==='Ypp' ? <Ypp width={25} height={25} fill={colors.bg.default} stroke={colors.text.default} /> : null}
                    {menu.item.mainMenu==='Pondok' ? <Pondok width={25} height={25} fill={colors.bg.default} stroke={colors.text.default} /> : null}
                    {menu.item.mainMenu==='Djana' ? <Djana width={25} height={25} fill={colors.bg.default} stroke={colors.text.default} /> : null}
                    {menu.item.mainMenu==='Settings' ? <Settings width={25} height={25} fill={colors.bg.default} stroke={colors.text.default} /> : null}
                    <Text style={styles.textTitle}>{menu.item.mainMenu}</Text>
                </TouchableOpacity>

           </View>
        )
      }


  return (
    <View>
      <FlatList
          numColumns={3}
          data={menus.menu}
          renderItem={renderMenus}
          keyExtractor={(menu)=>menu.id}
          
        />
    </View>
  );
}

const styles= StyleSheet.create({
    container:{
        paddingHorizontal:'4%'
    },

    boxMenu:{
        width:100,
        height:100,
        borderColor:colors.text.default,
        borderWidth:1,
        borderRadius:15,
        alignItems:'center',
        justifyContent:'center',
        marginBottom:20,
        paddingHorizontal:10
    },
    textTitle:{
        fontSize:10,
        marginTop:10,
        color:colors.text.default
    }
})


const SubMenu =({navigation, token, mainMenu})=> {

    const [subMenus, setSubMenus]= useState([]);

    const dispatch= useDispatch();

    async function getMenuApi(){
        let data= await fetchMenu(token);
        dispatch(setMenu(data))
        setSubMenus(getSubMenu(data.menu, mainMenu))
    }

      useEffect(()=>{
          getMenuApi()
        }, [])
        
     console.log(subMenus);
      const renderMenus=(subMenu)=>{
             const to=subMenu.item.replace(/ /g,'');
             const onPress=()=>{
                 navigation.navigate(to, {subMenu:subMenu.item})
             }
             return(
                 <View style={stylesMenu.container}>
                 <TouchableOpacity onPress={onPress} style={stylesMenu.boxMenu}>
                    {subMenu.item==='Admin' ? <Karyawan width={25} height={25} fill={colors.bg.default} stroke={colors.text.default} /> : null}
                    {subMenu.item==='Ketua' ? <Ketua width={25} height={25} fill={colors.bg.default} stroke={colors.text.default} /> : null}
                    {subMenu.item==='Bendahara' ? <Bendahara width={25} height={25} fill={colors.bg.default} stroke={colors.text.default} /> : null}
                    {subMenu.item==='Sekretaris' ? <Sekretaris width={25} height={25} fill={colors.bg.default} stroke={colors.text.default} /> : null}
                    {subMenu.item==='Staff' ? <Staff width={25} height={25} fill={colors.bg.default} stroke={colors.text.default} /> : null}
                    {subMenu.item==='Editor' ? <Ketua width={25} height={25} fill={colors.bg.default} stroke={colors.text.default} /> : null}
                    {subMenu.item==='Sarpras' ? <Bendahara width={25} height={25} fill={colors.bg.default} stroke={colors.text.default} /> : null}
                    {subMenu.item==='Menu' ? <Menu width={25} height={25} fill={colors.bg.default} stroke={colors.text.default} /> : null}
                    {subMenu.item==='Profile' ? <User width={25} height={25} fill={colors.bg.default} stroke={colors.text.default} /> : null}
                    <Text style={stylesMenu.textTitle}>{subMenu.item}</Text>
                 </TouchableOpacity>

            </View>
         )
    }
  return (
  
    <View>
      <FlatList
          numColumns={3}
          data={subMenus}
          renderItem={renderMenus}
          keyExtractor={(subMenu)=>subMenu}
          
        />
    </View>
  );
}

const stylesMenu= StyleSheet.create({
    container:{
        // flex:1,
        // alignItems:'center',
        paddingHorizontal:'4%'
    },

    boxMenu:{
        width:100,
        height:100,
        borderColor:colors.text.default,
        borderWidth:1,
        borderRadius:15,
        alignItems:'center',
        justifyContent:'center',
        marginBottom:20,
        paddingHorizontal:10
    },
    textTitle:{
        fontSize:10,
        marginTop:10,
        color:colors.text.default
    }
})



export { HomeMenu, SubMenu };

