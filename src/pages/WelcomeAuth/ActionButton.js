import { View, Text } from 'react-native';
import React from 'react';
import { Buttons } from '../../components';


const ActionButton=({judul, bgColor, textColor, onPress})=>{

    return(
        <View>
            <Buttons onPress={onPress} judul={judul} bgColor={bgColor} textColor={textColor} />
        </View>
    )
}

export default ActionButton;
