import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Reminders from './screens/Reminders';
import Notifications from './screens/Notifications';
import HomeScreen from './screens/HomeScreen';

//import TabNavigator from './navigation/TabNavigator'

import { createAppContainer, createSwitchNavigator } from 'react-navigation';

const AppSwitchNavigator = createSwitchNavigator({
  HomeScreen: HomeScreen,
  Reminders: Reminders,
  Notifications: Notifications,
});

const AppContainer = createAppContainer(AppSwitchNavigator);

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <AppContainer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});
