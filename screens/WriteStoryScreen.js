import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { Header } from 'react-native-elements';

export default class ReadStoryScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header
          backgroundColor={'#FF000'}
          centerComponent={{
            text: 'STORY HUB',
          }}
        />

        <Text style={styles.textalign}>
          {' '}
          WELCOME HERE YOU CAN WRITE THE STORY YOU WANT.
        </Text>

        <TextInput style={styles.inputboxstyle} placeholder="STORY TITLE" />
        <TextInput style={styles.inputboxstyle1} placeholder="AUTHOR" />
        <TextInput
          style={styles.inputboxstyle2}
          placeholder="WRITE YOUR STORY HERE"
        />
        <TouchableOpacity style={styles.button2}>
          <Text style={styles.displayText2}> PUBLISH </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'aqua',
  },
  inputboxstyle: {
    marginTop: 25,
    margin: 10,
    borderColor: 'black',
    height: 50,
    width: 300,
    borderWidth: 3,
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    backgroundColor: 'white',
  },
  inputboxstyle1: {
    margin: 5,
    borderColor: 'black',
    height: 50,
    width: 300,
    borderWidth: 3,
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    backgroundColor: 'white',
  },
  inputboxstyle2: {
    margin: 7,
    borderColor: 'black',
    height: 190,
    width: 300,
    borderWidth: 3,
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    backgroundColor: 'white',
  },
  textalign: {
    marginTop: 20,
    alignSelf: 'center',
    fontSize: 10,
    fontFamily: 'cursive',
    fontWeight: 'bold',
  },
  button2: {
    width: 215,
    borderWidth: 4,
    borderColor: 'yellow',
    backgroundColor: 'orange',
    justifyContent: 'center',
    alignSelf: 'center',
    height: 50,
    marginRight: 10,
    borderRadius: 10,
    margin: 10,
  },
  displayText2: {
    textAlign: 'center',
    fontSize: 15,
    color: 'white',
    fontWeight: 'bold',
    fontFamily: 'cursive',
  },
});
