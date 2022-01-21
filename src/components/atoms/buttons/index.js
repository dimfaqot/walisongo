import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { colors } from '../../../utils';

const Buttons = ({judul, bgColor, textColor, onPress}) => {
  return (
       
            <TouchableOpacity onPress={onPress} style={{...styles.button, backgroundColor:bgColor}}>
                <Text style={{ color:textColor, textAlign:'center' }}>{judul}</Text>
            </TouchableOpacity>
  );
};


const styles = StyleSheet.create({
    button:{
        borderWidth:1,
        borderColor:colors.bg.default,
        borderRadius:10,
        padding:10,
        marginBottom:50,
        marginTop:10
    }
})

export default Buttons;
