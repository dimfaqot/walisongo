import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';
import ActionButton from './ActionButton';
import { colors } from '../../utils';
import { logo } from '../../assets';

const WelcomeAuth = () => {
  return (
    <View style={styles.body}>
      <Image source={logo} />
      <Text style={styles.text}>Selamat Datang di Ponpes Walisongo Sragen </Text>
      <ActionButton bgColor={colors.bg.light} textColor={colors.text.default} judul="Masuk" text="Masuk jika sudah memiliki akun" />
      <ActionButton bgColor={colors.bg.default} textColor={colors.text.light} judul="Daftar" text="Daftar jika belum memiliki akun" />
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
    }
})
export default WelcomeAuth;
