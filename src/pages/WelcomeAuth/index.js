import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { logo } from '../../assets';
import { colors } from '../../utils';
import ActionButton from './ActionButton';

const WelcomeAuth = ({navigation}) => {
    const goTo=screen=>{
        navigation.navigate(screen)
    }
  return (
    <View style={styles.body}>
      <Image source={logo} />
      <Text style={styles.text}>Selamat Datang di Ponpes Walisongo Sragen </Text>
        <Text>Masuk jika sudah memiliki akun</Text>
      <View style={styles.conButton}>
            <ActionButton onPress={()=>goTo('Login')} bgColor={colors.bg.light} textColor={colors.text.default} judul="Masuk" />
      </View>

        <Text>Daftar jika belum memiliki akun</Text>
      <View style={styles.conButton}>
            <ActionButton style={styles.button} onPress={()=>goTo('Register')} bgColor={colors.bg.default} textColor={colors.text.light} judul="Daftar"/>
        </View>
    </View>
  );
};


const styles = StyleSheet.create({
    body:{
        flex:1,
        alignItems:'center',
        backgroundColor:'white',
        paddingVertical:80
    },
    text:{
        fontWeight:'bold',
        color:colors.text.default,
        marginBottom:100,
        marginTop:10
    },
    conButton:{
        marginBottom:50,
        marginTop:15,
        width:'60%'
    }
})
export default WelcomeAuth;
