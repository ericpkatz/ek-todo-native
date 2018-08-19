import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Home from './src/Components/Home';
import { Provider } from 'react-redux';
import store from './src/store';

export class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const RootStack = (
    createStackNavigator({
      Home: {
        screen: Home
      }
    })
  );

const Main = ()=> {
  return <Provider store={ store }>
    <RootStack />
    </Provider>;
}

export default Main;
