import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

const _Home = ()=> {
  return (
    <View>
      <Text>Home</Text>
    </View>
  );
};

export { _Home }

export default connect()(_Home);
