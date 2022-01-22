import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { colors } from '../../../utils';
import ButtonIcon from './ButtonIcon';

const Buttons = ({judul, bgColor, textColor, onPress, type, name}) => {

    if(type==='icon'){
       return <ButtonIcon name={name} onPress={onPress} />
    }
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
        padding:10
    }
})

export default Buttons;
