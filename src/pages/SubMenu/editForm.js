import { View, Text, FlatList, TextInput, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { colors } from '../../utils';

const EditForm = ({data}) => {

    // LOCAL STATE
    const [ypp, setYpp]=useState("");
    const [pondok, setPondok]=useState("");
    const [djana, setDjana]=useState("");
    const [settings, setSettings]=useState("");


    // FUNCTIONS
    const onInputChange=(mainMenu, subMenu)=>{
        if(mainMenu==='Ypp'){
            setYpp(subMenu)
        }
        if(mainMenu==='Pondok'){
            setPondok(subMenu)
        }
        if(mainMenu==='Djana'){
            setDjana(subMenu)
        }
        if(mainMenu==='Settings'){
            setSettings(setSettings)
        }
    }

console.log(ypp);
    // COMPONENTS
    // Render Flatlist
    const RenderFlatList=(menuItem)=>{
        console.log(menuItem.item.mainMenu);
            return(
                    <View>
                        <Text>{menuItem.item.mainMenu}</Text>
                        {menuItem.item.mainMenu==="Ypp" && <TextInput multiline autoFocus={true} value={menuItem.item.mainMenu=='Ypp' && ypp==="" ? menuItem.item.subMenu: ypp} onChangeText={(value)=>onInputChange('Ypp',value)} />}
                        {menuItem.item.mainMenu==="Pondok" &&<TextInput multiline autoFocus={true} value={menuItem.item.mainMenu=='Pondok' && pondok==="" ? menuItem.item.subMenu: pondok} onChangeText={(value)=>onInputChange('Pondok',value)} />}
                        {menuItem.item.mainMenu==="Djana" &&<TextInput multiline autoFocus={true} value={menuItem.item.mainMenu=='Djana' && djana==="" ? menuItem.item.subMenu: djana} onChangeText={(value)=>onInputChange('Djana',value)} />}
                        {menuItem.item.mainMenu==="Settings" &&<TextInput multiline autoFocus={true} value={menuItem.item.mainMenu=='Settings' && settings==="" ? menuItem.item.subMenu: settings} onChangeText={(value)=>onInputChange('Settings',value)} />}
                    </View>
                )
        }
    // END

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

  return (
 
    <View style={styles.body}>
        <Text style={{ textAlign:'center' }}>Menu {data.name}</Text>
        <View style={styles.container}>
                <FlatList
                    numColumns={1}
                    data={data.menu}
                    renderItem={RenderFlatList}
                    keyExtractor={(menuItem)=>menuItem._id}
                />

        </View>
        {/* <TextInput multiline autoFocus={true} value={newInput} onChangeText={(value)=>onInputChange(value)} /> */}
    </View>
  );
};


const styles=StyleSheet.create({
    body:{
        left:0,
        right: 0,
        height:'100%',
        position:'absolute',
        backgroundColor:colors.text.light,
        borderWidth:1,
        borderColor:colors.text.disable,
        borderRadius:5 ,
        alignItems:'flex-start',
        paddingHorizontal:20,
        paddingVertical:10,
        justifyContent:'flex-start',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 6,
        backgroundColor:colors.bg.light,
    },
    container:{
       
    }
})

export default EditForm;
