import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useSelector } from 'react-redux';
import { SubMenuHeader } from '../../../components/headers';
import { SubMenu } from '../../../components/menus';
import { colors } from '../../../utils';


const Home = ({navigation, route}) => {

  const {user}=useSelector(state=>state.UserReducer);

  return (
    <View style={styles.body}>
      <View>
        <SubMenuHeader user={user} />
      </View>
      <View style={styles.menu}>
        <SubMenu navigation={navigation} token={user.accessToken} mainMenu={route.params.mainMenu} />
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
