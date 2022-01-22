// import {axios} from "axios";
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { colors } from '../../utils';
import { BtnBackSvg } from '../../assets';
import { Buttons, Inputs } from '../../components';
import {useSelector, useDispatch} from 'react-redux';
import { setForm } from '../../redux';

const Register = ({navigation}) => {

  const {form}=useSelector(state=>state.RegisterReducer);
  const dispatch= useDispatch();

    const sendData=()=>{
      fetch('http://192.168.1.4:8000/api/auth/register', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(form)
      })
      .then(res=>res.json())
      .then(res=>{
        console.log(res);
        navigation.navigate("Login")
      })

    }

 
  const onInputChange=(value, inputType)=>{
    dispatch(setForm(inputType, value));
  }

  return (
    <View style={styles.body}>
        <View style={styles.conBtnBack}>
            <Buttons type='icon' name='back' onPress={()=>navigation.goBack()} />
        </View>
      <View style={styles.container}>
            <Text style={styles.text}>Semua Data Wajib Diisi Ya!</Text>
            <View style={styles.conInput}>
              <Inputs placeholder="Username..." value={form.username} onChangeText={(value)=>onInputChange(value, 'username')} />
            </View>
            <View style={styles.conInput}>
              <Inputs placeholder="Email..." value={form.email} onChangeText={(value)=>onInputChange(value, 'email')} />
          </View>
            <View style={styles.conInput}>
              <Inputs placeholder="Nama Lengkap..." value={form.name} onChangeText={(value)=>onInputChange(value, 'name')} />
          </View>
            <View style={styles.conInput}>
              <Inputs placeholder="Sub..." value={form.sub} onChangeText={(value)=>onInputChange(value, 'sub')} />
          </View>
            <View style={styles.conInput}>
              <Inputs secureTextEntry={true} placeholder="Password..." value={form.password} onChangeText={(value)=>onInputChange(value, 'password')} />
          </View>

          <View style={{ width: '50%', marginTop:30 }}>
            <Buttons onPress={sendData} bgColor={colors.bg.default} textColor={colors.text.light} judul="Daftar" />
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
      marginTop:30
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
