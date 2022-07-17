import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, } from 'react-native';
import { Header } from 'react-native-elements';
import { Switch } from 'react-native-paper';
import Reminders from './Reminders';


export default class Notifications extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
     const text1=this.props.navigation.getParam('text1');
     const text2=this.props.navigation.getParam('text2');
     const text3=this.props.navigation.getParam('text3');
     const text4=this.props.navigation.getParam('text4');
     const text5=this.props.navigation.getParam('text5');

    return (
      <View style={styles.container}>
        <Header
          backgroundColor={'blue'}
          centerComponent={{
            text: 'Reminders List',
            style: { color: '#fff', fontSize: 25 },
          }}
        />

        <Text style={styles.headerText}>Your reminders are:</Text>
        <View style={styles.bulletContainer}>
          <Text style={styles.bulletText}>1. {text1}</Text>
        </View>

         <View style={styles.bulletContainer}>
          <Text style={styles.bulletText}>2. {text2}</Text>
        </View>

         <View style={styles.bulletContainer}>
          <Text style={styles.bulletText}>3. {text3}</Text>
        </View>

         <View style={styles.bulletContainer}>
          <Text style={styles.bulletText}>4. {text4}</Text>
        </View>

         <View style={styles.bulletContainer}>
          <Text style={styles.bulletText}>5. {text5}</Text>
        </View>
        <TouchableOpacity onPress={()=>this.props.navigation.navigate('HomeScreen')}>
        <Text style={styles.button}>
        Back to Menu
        </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  headerText: {
    fontSize: 25,
    fontWeight: '450',
    marginTop: 20,
    marginBottom: 15,
  },
  bulletContainer: {
    fontSize: 15,
    borderColor: '#c2c2c2',
    borderWidth: 2,
    backgroundColor: 'white',
    borderRadius: 10,
    marginBottom: 10
  },
  bulletText: {
    marginLeft: 10,
    fontSize: 18,
  },
  button: {
    fontSize: 20,
    alignSelf: 'center',
    borderWidth: 3,
    width: 150,
    marginTop: 25,
    textAlign: 'center',
    backgroundColor: 'lightblue',
  }
});
