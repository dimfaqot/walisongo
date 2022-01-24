import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import React from 'react';
import { Djana, Setting, User, Ypp, Pondok, Karyawan, Kesehatan, Santri, DjanaSquad } from '../../assets';
import { colors } from '../../utils';

const Menu =({DATA, navigation})=> {
    
    const renderMenus=(menu)=>{
        const to=menu.item.name.replace(/ /g,'');
        const onPress=()=>{
            navigation.navigate(to)
        }
       return(
           <View style={styles.container}>
                <TouchableOpacity onPress={onPress} style={styles.boxMenu}>
                    {menu.item.name==='User' && <User width={25} height={25} fill={colors.bg.default} stroke={colors.text.default} />}
                    {menu.item.name==='Setting' && <Setting width={25} height={25} fill={colors.bg.default} stroke={colors.text.default} />}
                    {menu.item.name==='Djana' && <Djana width={25} height={25} fill={colors.bg.default} stroke={colors.text.default} />}
                    {menu.item.name==='Ypp' && <Ypp width={25} height={25} fill={colors.bg.default} stroke={colors.text.default} />}
                    {menu.item.name==='Pondok' && <Pondok width={25} height={25} fill={colors.bg.default} stroke={colors.text.default} />}
                    {menu.item.name==='Kesehatan' && <Kesehatan width={25} height={25} fill={colors.bg.default} stroke={colors.text.default} />}
                    {menu.item.name==='Karyawan' && <Karyawan width={25} height={25} fill={colors.bg.default} stroke={colors.text.default} />}
                    {menu.item.name==='Santri' && <Santri width={25} height={25} fill={colors.bg.default} stroke={colors.text.default} />}
                    {menu.item.name==='Djana Squad' && <DjanaSquad width={25} height={25} fill={colors.bg.default} stroke={colors.text.default} />}
                    <Text style={styles.textTitle}>{menu.item.name}</Text>
                </TouchableOpacity>

           </View>
        )
      }
  return (
    <View>
      <FlatList
          numColumns={3}
          data={DATA}
          renderItem={renderMenus}
          keyExtractor={(menu)=>menu.id}
          
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


export default Menu;

