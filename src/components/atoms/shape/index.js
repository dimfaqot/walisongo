import React from 'react';
import { View } from 'react-native';

const Circle=(w='', h='', bg='', bc='', bw='', br='')=> {
  return (
    <View style={{ 
        width:w,
        height:h,
        borderRadius:br,
        backgroundColor: bg,
        borderColor:bc,
        borderWidth: bw}} />
  );
}


export { Circle };

