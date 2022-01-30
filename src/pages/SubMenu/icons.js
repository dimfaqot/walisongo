import React from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Bendahara, Karyawan, Ketua, Sekretaris, Staff, Menu, User } from '../../assets';
import { getSubMenu } from '../../methods/functions';
import { colors } from '../../utils';
const Icons =({DATA, navigation, to})=> {

    const subMenus =getSubMenu(DATA, to);
    const renderMenus=(subMenu)=>{
        const to=subMenu.item.replace(/ /g,'');
        const onPress=()=>{
            navigation.navigate(to,{navigation:navigation})
        }
       return(
           <View style={styles.container}>
                <TouchableOpacity onPress={onPress} style={styles.boxMenu}>
                    {subMenu.item==='Admin' ? <Karyawan width={25} height={25} fill={colors.bg.default} stroke={colors.text.default} /> : null}
                    {subMenu.item==='Ketua' ? <Ketua width={25} height={25} fill={colors.bg.default} stroke={colors.text.default} /> : null}
                    {subMenu.item==='Bendahara' ? <Bendahara width={25} height={25} fill={colors.bg.default} stroke={colors.text.default} /> : null}
                    {subMenu.item==='Sekretaris' ? <Sekretaris width={25} height={25} fill={colors.bg.default} stroke={colors.text.default} /> : null}
                    {subMenu.item==='Staff' ? <Staff width={25} height={25} fill={colors.bg.default} stroke={colors.text.default} /> : null}
                    {subMenu.item==='Editor' ? <Ketua width={25} height={25} fill={colors.bg.default} stroke={colors.text.default} /> : null}
                    {subMenu.item==='Sarpras' ? <Bendahara width={25} height={25} fill={colors.bg.default} stroke={colors.text.default} /> : null}
                    {subMenu.item==='Menu' ? <Menu width={25} height={25} fill={colors.bg.default} stroke={colors.text.default} /> : null}
                    {subMenu.item==='Profile' ? <User width={25} height={25} fill={colors.bg.default} stroke={colors.text.default} /> : null}
                    <Text style={styles.textTitle}>{subMenu.item}</Text>
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
          keyExtractor={(subMenu)=>subMenu.id}
          
        />
    </View>
  );
}

const styles= StyleSheet.create({
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


export default Icons;

