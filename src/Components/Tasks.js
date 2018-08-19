import React from 'react';
import { Text, View } from 'react-native';
const _Tasks = ({ tasks })=> {
  return (
    <View>
      {
        tasks.map(task=> <Text key={ task.id }>{ task.title }</Text>)
      }
    </View>
  );
};

export { _Tasks };
