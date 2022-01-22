import React from 'react';
import { TouchableOpacity } from 'react-native';
import { BtnBackSvg } from '../../../assets';
import { colors } from '../../../utils';

const ButtonIcon = ({...rest}) => {
  return (
        <TouchableOpacity {...rest}>
        {rest.name==='back' &&  <BtnBackSvg width={30} height={30} fill={colors.bg.default} />}
        </TouchableOpacity>
  );
};

export default ButtonIcon;
