import React from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Delete, Edit } from '../../assets';
import { colors } from '../../utils';
const MenuFlatList = ({menus, activeMenu, roleId}) => {

    
    // COMPONENTS
        // Render Flatlist
        const RenderFlatList=(mainMenu)=>{
            return(
                <TouchableOpacity onPress={()=>activeMenu(mainMenu.item)} style={styles.body}>

                    <Text style={ roleId===mainMenu.item._id ? styles.active : styles.disActive }>{mainMenu.item.name}</Text>

                    <View style={{ flexDirection:'row', alignItems:'center' }}>

                        <TouchableOpacity style={{ marginRight:5 }} >
                            <Edit width={16} height={16} fill={colors.bg.primary} stroke={colors.text.primary} />
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <Delete width={18} height={18} fill={colors.bg.danger} stroke={colors.text.danger} />  
                        </TouchableOpacity>

                    </View>
                </TouchableOpacity>
                )
        }
    // END


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
            
  return (
    <FlatList
    numColumns={2}
    data={menus}
    renderItem={RenderFlatList}
    keyExtractor={(mainMenu)=>mainMenu.id}
  />
  );
};

const styles=StyleSheet.create({
    body:{
        borderWidth:1,
        borderColor:colors.text.default,
        borderRadius:10,
        paddingVertical:5,
        paddingHorizontal:10,
        marginHorizontal:5,
        marginBottom:10,
        flexDirection:'row',
        alignItems:'center',
        width:160,
        justifyContent:'space-between'
    },
    active:{
        color:colors.text.default,
        fontWeight:'bold',
        marginRight:10
    },
    disActive:{
        marginRight:10,
    }
})

export { MenuFlatList };

