import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageBackground,
  SafeAreaView,
  Platform,
  StatusBar,
} from 'react-native';
import { Header } from 'react-native-elements';
import {TextAnimationFadeIn, TextAnimationZoom, TextAnimationRain, TextAnimationSlideDown, TextAnimationSlideUp, TextAnimationSlideLeft, TextAnimationSlideRight, TextAnimationShake, TextAnimationReverse, TextAnimationDeZoom} from 'react-native-text-effects';

export default class homescreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea} />
        <Header
          backgroundColor={'blue'}
          centerComponent={{
            text: 'Reminders App',
            style: { color: '#fff', fontSize: 26 },
          }}
        />
        <Image source={require('../assets/logo.png')} style={styles.image}/>
        <TouchableOpacity style={styles.buttonButton} onPress={()=>this.props.navigation.navigate('Reminders')}>
        <Text style = {styles.button}>
        Reminders
        </Text>
        </TouchableOpacity>
        <View>
        <TextAnimationFadeIn value = {"Dear Users,"} delay={10} duration={200} style={{color: 'black', fontSize:20, marginTop: 50}} a />
        <Text> </Text>
        <Text style={styles.text}>This App is for displaying reminders in an easy to read way. Please make the most of this App, to not forget any important items. Please click on reminders to continue. </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  buttonButton: {
    marginTop: 40
  },
  image: {
    alignSelf: "center",
    marginTop: 40,
    backgroundColor: "white",
    borderColor: "lightgrey",
    borderWidth: 1,
    width: 100,
    height: 100,
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
  text:{
    fontSize: 18
    
  }
  
})