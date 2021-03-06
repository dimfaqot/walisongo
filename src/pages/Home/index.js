import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useSelector } from 'react-redux';
import { HomeHeader } from '../../components/headers';
import { HomeMenu } from '../../components/menus';
import { colors } from '../../utils';



const Home = ({navigation}) => {

  const {user}=useSelector(state=>state.UserReducer);
  
  return (
    <View style={styles.body}>
      <View>
        <HomeHeader user={user} />
      </View>
      <View style={styles.menu}>
      <HomeMenu navigation={navigation} token={user.accessToken} />
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
