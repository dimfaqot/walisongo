import { View, StyleSheet } from 'react-native';
import React from 'react';
import {useSelector } from 'react-redux';
import { HomeHeader } from '../../components/headers';
import Menu from '../../components/menus';
import { colors } from '../../utils';

const Home = ({navigation}) => {
  const {user}=useSelector(state=>state.UserReducer);
const DATA=[
  {id:1, name:'Ypp'},
  {id:2, name:'Pondok'},
  {id:3, name:'Kesehatan'},
  {id:4, name:'Karyawan'},
  {id:5, name:'Santri'},
  {id:6, name:'Djana'},
  {id:7, name:'Setting'},
  {id:8, name:'Djana Squad'}
]
  return (
    <View style={styles.body}>
      <View>
        <HomeHeader user={user} />
      </View>
      <View style={styles.menu}>
        <Menu navigation={navigation} DATA={DATA} />
      </View>
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
export default Home;
