import { View, StyleSheet, TextInput } from 'react-native';
import React from 'react';
import { colors } from '../../../utils';

const Inputs = ({placeholder, ...rest}) => {
  return (
      <TextInput
      style={styles.input}
      placeholder={placeholder}
      placeholderTextColor={colors.text.default} 
      {...rest}
      
      />
  );
};


const styles = StyleSheet.create({
  input:{
    borderColor:colors.bg.default,
    borderWidth:1,
    borderRadius:10,
    padding: 10,
  }
})
export default Inputs;
