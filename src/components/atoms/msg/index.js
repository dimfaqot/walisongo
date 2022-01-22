import { View, Text } from 'react-native';
import React from 'react';
import { colors } from '../../../utils';

const Msg = ({type, text}) => {
  return (
    <View>
      {type==='dangerSmall'&& <Text style={{ color:colors.text.danger, fontSize:10 }}>{text}</Text>}
    </View>
  );
};

export default Msg;
