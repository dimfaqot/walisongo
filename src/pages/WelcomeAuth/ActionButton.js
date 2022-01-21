import { View, Text } from 'react-native';
import React from 'react';
import { colors } from '../../utils';
import { Buttons } from '../../components';


const ActionButton=({judul, text, bgColor, textColor})=>{
    return(
        <View>
        <Text>{text}</Text>
            <Buttons judul={judul} bgColor={bgColor} textColor={textColor} />
        </View>
    )
}

export default ActionButton;
