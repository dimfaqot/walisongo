
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Buttons, Inputs } from '../../components';
import Msg from '../../components/atoms/msg';
import { setForm } from '../../redux';
import { colors } from '../../utils';

const Login = ({navigation}) => {

  const {form}=useSelector(state=>state.LoginReducer);
  const dispatch= useDispatch();



  const onInputChange=(value, inputType)=>{
    dispatch(setForm(inputType, value));
  }

  const Alert=()=>{
    return(
      <View style={{marginBottom:5 }}>
          <Msg type='dangerSmall' text='Password Salah' />
      </View>
    )
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
      Verify(json);
    } catch (error) {
     Verify(error.response.data);
    }
  };

const Verify=(data)=>{
      return(

            <View style={{marginBottom:5 }}>
              {data.msg && <Msg type='dangerSmall' text={data.msg} />}
            </View>


    )

}
  
  return (
    <View style={styles.body}>
        <View style={styles.conBtnBack}>
            <Buttons type='icon' name='back' onPress={()=>navigation.goBack()} />
        </View>
      <View style={styles.container}>
            <Text style={styles.text}>Semua Data Wajib Diisi Ya!</Text>
            <View style={styles.conInput}>
            <Verify />
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
