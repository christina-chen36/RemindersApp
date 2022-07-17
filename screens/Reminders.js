import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from 'react-native';
import { Header } from 'react-native-elements';

export default class Reminders extends Component {
  constructor() {
    super();
    this.state = {
      text1: '',
      text2: '',
      text3: '',
      text4: '',
      text5: '',
    };
  }

  submitButton = async (text1, text2, text3, text4, text5) => {
    console.log("submit button called");
    console.log(this.props);
    this.props.navigation.navigate('Notifications', { text1: text1 });
    this.props.navigation.navigate('Notifications', { text2: text2 });
    this.props.navigation.navigate('Notifications', { text3: text3 });
    this.props.navigation.navigate('Notifications', { text4: text4 });
    this.props.navigation.navigate('Notifications', { text5: text5 });
  };

  render() {
    var { text1, text2, text3, text4, text5 } = this.state;
    return (
      <View style={styles.container}>
        <Header
          backgroundColor={'blue'}
          centerComponent={{
            text: 'Reminders',
            style: { color: '#fff', fontSize: 25 },
          }}
        />
        <TextInput
        placeholder="Reminder 1"
        placeholderTextColor="grey"
          style={styles.inputBox}
          onChangeText={(text) => {
            this.setState({ text1: text });
          }}
          value={this.state.text}
          
        />
        <TextInput
        placeholder="Reminder 2"
        placeholderTextColor="grey"
          style={styles.inputBox}
          onChangeText={(text) => {
            this.setState({ text2: text });
          }}
          value={this.state.text}
          
        />
        <TextInput
        placeholder="Reminder 3"
        placeholderTextColor="grey"
          style={styles.inputBox}
          onChangeText={(text) => {
            this.setState({ text3: text });
          }}
          value={this.state.text}
          
        />
        <TextInput
        placeholder="Reminder 4"
        placeholderTextColor="grey"
          style={styles.inputBox}
          onChangeText={(text) => {
            this.setState({ text4: text });
          }}
          value={this.state.text}
          
        />
        <TextInput
        placeholder="Reminder 5"
        placeholderTextColor="grey"
          style={styles.inputBox}
          onChangeText={(text) => {
            this.setState({ text5: text });
          }}
          value={this.state.text}
          
        />

        <TouchableOpacity
          onPress={() =>
            this.submitButton(
              this.state.text1,
              this.state.text2,
              this.state.text3,
              this.state.text4,
              this.state.text5
            )
          }>
          <Text style={styles.button}>Save</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputBox: {
    borderWidth: 3,
    marginTop: 30,
    height: 40,
    fontSize: 20,
  },
  button: {
    fontSize: 25,
    alignSelf: 'center',
    borderWidth: 3,
    width: 150,
    marginTop: 25,
    textAlign: 'center',
    backgroundColor: 'lightblue',
  },
});
