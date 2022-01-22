import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { colors } from '../../utils';
import { BtnBackSvg } from '../../assets';
import { Buttons, Inputs } from '../../components';
import {useSelector, useDispatch} from 'react-redux';
import { setForm } from '../../redux';

const Register = ({navigation}) => {

  const {form}=useSelector(state=>state.RegisterReducer);
  const dispatch= useDispatch();


//   const fetchLogin = async () => {
//     try {
//         const res = await axios.post('http://localhost:8000/api/auth/register', form)
//         return res.data;
//         // console.log(res.data);
//     } catch (error) {
//         return error.response.data;
//     }
// }

  const sendData= ()=>{
    // axios.post('http://localhost:8000/api/auth/register', form)
    // .then(res=>console.log(res.data))
   
  }

  const onInputChange=(value, inputType)=>{
    dispatch(setForm(inputType, value));
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
