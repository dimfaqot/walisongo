import { View, Text } from 'react-native';
import React from 'react';
import {useSelector } from 'react-redux';

const index = () => {
    const {form}=useSelector(state=>state.LoginReducer);
  return (
    <View>
      <Text>Home</Text>
      <Text>Welcome {form.username}</Text>
    </View>
  );
};

export default index;
