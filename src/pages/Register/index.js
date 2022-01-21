import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { colors } from '../../utils';
import { BtnBackSvg } from '../../assets';
import { Buttons, Inputs } from '../../components';

const Register = ({navigation}) => {
  return (
    <View style={styles.body}>
        <TouchableOpacity style={styles.conBtnBack} onPress={()=>navigation.navigate("WelcomeAuth")}>
              <BtnBackSvg width={30} height={30} fill={colors.bg.default} />
        </TouchableOpacity>
      <View style={styles.container}>
            <Text style={styles.text}>Semua Data Wajib Diisi Ya!</Text>
            <View style={styles.conInput}>
              <Inputs placeholder="Username..." />
            </View>
            <View style={styles.conInput}>
              <Inputs placeholder="Email..." />
          </View>
            <View style={styles.conInput}>
              <Inputs placeholder="Nama..." />
          </View>
            <View style={styles.conInput}>
              <Inputs placeholder="Sub..." />
          </View>
            <View style={styles.conInput}>
              <Inputs placeholder="Password..." />
          </View>

          <View style={{ width: '50%', marginTop:30 }}>
            <Buttons onPress={()=>navigation.navigate("Login")} bgColor={colors.bg.default} textColor={colors.text.light} judul="Daftar" />
          </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body:{
      flex:1,
      backgroundColor:'white',
    },
    container:{
      flex:1,
      alignItems:'center',
      backgroundColor:'white',
      marginTop:60
  },
  text:{
      fontWeight:'bold',
      color:colors.text.default,
      marginBottom:50,
      marginTop:10
  },
  conInput:{
   width:'70%',
   marginBottom:20

  },
  conBtnBack:{
    paddingLeft:20,
    paddingTop:20
  }
})

export default Register;
