import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Bell, BtnBackSvg, Cart, Mail } from '../../../assets';

const ButtonIcon = ({...rest}) => {
  return (
        <TouchableOpacity {...rest}>
        {rest.name==='back' &&  <BtnBackSvg width={30} height={30} stroke={rest.stroke} fill={rest.fill} />}
        {rest.name==='mail' &&  <Mail width={30} height={30} stroke={rest.stroke} fill={rest.fill} />}
        {rest.name==='bell' &&  <Bell width={30} height={30} stroke={rest.stroke} fill={rest.fill} />}
        {rest.name==='cart' &&  <Cart width={30} height={30} stroke={rest.stroke} fill={rest.fill} />}
        </TouchableOpacity>
  );
};

export default ButtonIcon;
