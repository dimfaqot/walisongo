import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { Buttons } from '..';
import { colors } from '../../utils';

const DjanaMainHeader=({name, sub})=> {
  return (
    <View style={ djanaMainHeader.body }>
            <View style={djanaMainHeader.container}>
                <View style={djanaMainHeader.conAtas}>
                    <View style={djanaMainHeader.conInput}>
                        <TextInput placeholder='Cari...' style={djanaMainHeader.input} />
                    </View>
                    <View style={djanaMainHeader.conIcon}>
                        <Buttons type='icon' name='mail' fill={colors.bg.default} stroke={colors.text.light} />
                        <View style={{ marginTop:10 }}>
                            <Buttons type='icon' name='bell' fill={colors.text.light} stroke='' />
                        </View>
                        <Buttons type='icon' name='cart' fill={colors.text.light} stroke='' />
                    </View>
                </View>
                <View style={djanaMainHeader.conBawah}>
                    <View style={djanaMainHeader.kiri}>
                        <View style={djanaMainHeader.circle} />
                        <Text style={{ marginLeft:10 }}>{name}</Text>
                    </View>
                    <View style={djanaMainHeader.kanan}>
                        <View style={djanaMainHeader.circle} />
                        <Text style={{ marginLeft:10 }}>{sub}</Text>
                    </View>
                </View>
            </View>
    </View>
  );
}

const djanaMainHeader=StyleSheet.create({
    body:{
        flexWrap:'wrap',
        backgroundColor: colors.bg.default,
        paddingVertical:10,
        paddingHorizontal:20,
        height:100
    },
    container:{
        flexDirection:'column',
        alignContent:'center',
        width:'100%'
    },
    conAtas:{
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems:'center'
    },
    input:{
        backgroundColor:colors.bg.light,
        borderRadius:20,
        paddingHorizontal:20,
        height:'80%'
    },
    conInput:{
        width:'60%',
        
    },
    conIcon:{
        flexDirection:'row',
        flex:1,
        justifyContent: 'space-between',
        alignItems:'center',
        marginLeft:20
    },
    conBawah:{
        position:'absolute',
        width:'100%',
        top:60,
        backgroundColor:colors.bg.light,
        borderRadius:20,
        borderWidth:1,
        borderColor:colors.text.default,
        padding:20,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    kiri:{
        flexDirection:'row',
        alignItems:'center',
    },
    kanan:{
        alignItems:'center',
        flexDirection:'row',
    },
    circle:{
        backgroundColor:colors.bg.default,
        width:10,
        height:10,
        borderRadius:5
    }
})


const HomeHeader=({user})=>{
    console.log(user);
    return (
        <View style={homeHeader.body}>
            <View style={homeHeader.container}> 
                <View style={homeHeader.boxProfile}>
                    <Text style={homeHeader.textLabel}>Username</Text>
                    <Text style={homeHeader.textProfile}>{user.username}</Text>
                </View>
                <View style={homeHeader.boxProfile}>
                    <Text style={homeHeader.textLabel}>Name</Text>
                    <Text style={homeHeader.textProfile}>{user.name}</Text>
                </View>
                <View style={homeHeader.boxProfile}>
                    <Text style={homeHeader.textLabel}>Sub</Text>
                    <Text style={homeHeader.textProfile}>{user.sub}</Text>
                </View>
                <View style={homeHeader.boxProfile}>
                    <Text style={homeHeader.textLabel}>Role</Text>
                    <Text style={homeHeader.textProfile}>Super Admin</Text>
                </View>
            </View>
        </View>
    )
}

const homeHeader= StyleSheet.create({
    body:{
        flex:1,
        backgroundColor: colors.bg.light
    },
    container:{
        backgroundColor:colors.bg.default,
        height:70,
        borderRadius:5,
        padding:10,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    boxProfile:{
        flexDirection:'column',
        alignItems:'center'
    },
    textLabel:{
        fontSize:11,
        color:colors.text.light
    },
    textProfile:{
        fontWeight:'bold',
        color:colors.text.light
    }
})


export {HomeHeader, DjanaMainHeader}

