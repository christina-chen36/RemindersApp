import React, { Component } from 'react'
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from "react-native-vector-icons/Ionicons";

import Reminders from '../screens/Reminders'
import Notifications from '../screens/Notifications'

const Tab = createBottomTabNavigator()

export default class BottomTabNavigator extends Component {
  render() {
    return(
      <NavigationContainer>
        <Tab.Navigator 
        screenOptions={({ route }) => ({
          tabBarIcon: ({focused, color, size}) => {
            var iconName;
            
            if (route.name == 'Notifications') {
              iconName = 'list-outline'
            } else if (route.name == 'Reminders') {
              iconName = 'create-outline'
            }
             return (
                <Ionicons
                  name={iconName}
                  size={size}
                  color={color}
                />
              );
            }
        })}>
        
        
        <Tab.Screen name="Reminders" component={Reminders} />
        <Tab.Screen name="Notifications" component={Notifications} />
        </Tab.Navigator>
      </NavigationContainer>
    )
  }


}