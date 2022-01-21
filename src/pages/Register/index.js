import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { colors } from '../../utils';
import { BtnBackSvg } from '../../assets';
import { Buttons, Inputs } from '../../components';
import {useSelector} from 'react-redux';

const Register = ({navigation}) => {

  const RegisterReducer=useSelector(state=>state.RegisterReducer);

  const [form, setForm]= useState({
    username:'',
    email:'',
    name:'',
    sub:'',
    password:''
  })

  useEffect(()=>{
    console.log(RegisterReducer);
  })

  const sendData=()=>{
    console.log(form);
  }

  const onInputChange=(value, input)=>{
    setForm({
      ...form,
     [input]:value
    })
  }

  return (
    <View style={styles.body}>
        <TouchableOpacity style={styles.conBtnBack} onPress={()=>navigation.navigate("WelcomeAuth")}>
              <BtnBackSvg width={30} height={30} fill={colors.bg.default} />
        </TouchableOpacity>
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
