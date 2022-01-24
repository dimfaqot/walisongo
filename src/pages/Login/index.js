
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Buttons, Inputs } from '../../components';
import Msg from '../../components/atoms/msg';
import { setForm, setUser } from '../../redux';
import { colors } from '../../utils';
import jwtDecode from "jwt-decode";
import { isLogin } from '../../methods/functions';

const Login = ({navigation}) => {

  const {form}=useSelector(state=>state.LoginReducer);

  const dispatch= useDispatch();

  const [msg, setMsg]=useState(null);

  // console.log(user);


  const onInputChange=(value, inputType)=>{
    dispatch(setForm(inputType, value));
  }

  const sendData = async () => {
    try {
      const response = await fetch(
        'http://192.168.1.4:8000/api/auth/login',
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
          body:JSON.stringify(form)
        }
      );
      const json = await response.json();
      if(json.msg){
        setMsg(json.msg)
        setTimeout(()=>{
          setMsg(null)
        },2000)
      }
      // console.log(json); 
      verify(json);     
      // if(json.accessToken){
      //   verify(json);
      // }
    } catch (error) {
    //  Verify(error.response.data);
    }
  };

    const verify=(data)=>{
      const token=jwtDecode(data.accessToken);
       if(isLogin(token.exp)){
         navigation.replace("Splash");
       }

       dispatch(setUser(data))
       navigation.replace("Home")
    
    }
    
    
    const Alert =()=>{
      if(msg !== null){
        return <Msg type='dangerMedium' mb={5} text={msg} />
      }
      return null
    }

  return (
    <View style={styles.body}>
        <View style={styles.conBtnBack}>
            <Buttons type='icon' stroke='' fill={colors.text.default} name='back' onPress={()=>navigation.goBack()} />
        </View>
      <View style={styles.container}>
            <Text style={styles.text}>Semua Data Wajib Diisi Ya!</Text>
            <View style={styles.conInput}>
            <Alert />
              <Inputs placeholder="Username..." value={form.username} onChangeText={(value)=>onInputChange(value, 'username')} />
            </View>
            <View style={styles.conInput}>
              <Inputs secureTextEntry={true} placeholder="Password..." value={form.password} onChangeText={(value)=>onInputChange(value, 'password')} />
          </View>

          <View style={{ width: '50%', marginTop:30 }}>
            <Buttons onPress={sendData} bgColor={colors.bg.default} textColor={colors.text.light} judul="Login" />
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

export default Login;
