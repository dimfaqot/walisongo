import { View, Text } from 'react-native';
import React from 'react';
import { DjanaMainHeader } from '../../components/headers';
import {useSelector } from 'react-redux';

const Djana = () => {
  const {user}=useSelector(state=>state.UserReducer);
  return (
    <View>
      <DjanaMainHeader name={user.name} sub={user.sub} />
    </View>
  );
};

export default Djana;
