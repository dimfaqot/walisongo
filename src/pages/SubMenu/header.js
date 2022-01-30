import { View, Text } from 'react-native';
import React from 'react';
import { SubMenuHeader } from '../../components/headers';

const Header = ({data}) => {
  return (
    <SubMenuHeader user={data} />
  );
};

export default Header;
