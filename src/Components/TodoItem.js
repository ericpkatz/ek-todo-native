import React from 'react';
import { Text } from 'react-native';
const TaskItem = ({ task })=> {
  return (
    <Text>{ task.title }</Text>
  );
};
export default TaskItem;

