import React from 'react';
import { Text, View } from 'react-native';
import TodoItem from './TodoItem';
const _Todos = ({ todos })=> {
  return (
    <View>
      {
        todos.map(todo=> <TodoItem key={ todo.id } todo={ todo }/>)
      }
    </View>
  );
};

export { _Todos };
