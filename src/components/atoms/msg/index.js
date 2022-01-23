import { View, Text } from 'react-native';
import React from 'react';
import { colors } from '../../../utils';

const Msg = ({type, text, mt=0, ml=0, mr=0, mb=0}) => {
  return (
    <View style={{ marginTop:mt, marginBottom:mb, marginRight:mr, marginLeft:ml }}>
      {type==='dangerSmall'&& <Text style={{ color:colors.text.danger, fontSize:10 }}>{text}</Text>}
      {type==='successSmall'&& <Text style={{ color:colors.text.default, fontSize:10 }}>{text}</Text>}
      {type==='dangerMedium'&& <Text style={{ color:colors.text.danger, fontSize:14 }}>{text}</Text>}
      {type==='successMedium'&& <Text style={{ color:colors.text.default, fontSize:14 }}>{text}</Text>}
    </View>
  );
};

export default Msg;
