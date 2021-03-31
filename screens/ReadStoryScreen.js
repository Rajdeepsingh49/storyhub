import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Header } from 'react-native-elements';

export default class WriteStoryScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header
          backgroundColor={'#Fgcb00'}
          centerComponent={{
            text: 'READERS CLUB',
          }}
        />
        <Text style={styles.textalign}>WELCOME HERE YOU CAN READ STORIES</Text>
        <Text style={styles.text1}>
          1. The Mountain I ended up drenched in tears after reading this. Make
          you sure you have a tissue box handy. This one sucks you in and really
          hits you in the gut. Such a cute and well-written story that will get
          your emotions in a bunch. Hold on for the next 5 minutes of great
          storytelling.
        </Text>

        <Text style={styles.text1}>
          2. The Escaped Man I read a lot of thrillers so it’s really difficult
          to catch me off-guard. Somehow this one caught me with a plot twist. I
          thought I knew what was going on and BAM I was discombobulated and
          surprised with that masterpiece of an ending. Seriously amazing.
        </Text>

        <Text style={styles.text1}>
          3. I Can’t Believe You’re Mine A super cute romance story that is
          simply a lot of fun to read. Reading this will leave you warm and
          fuzzy inside. Such great imagery and cute storytelling.
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textalign: {
    margin: 10,
    alignSelf: 'center',
    fontSize: 13,
    fontFamily: 'cursive',
    fontWeight: 'bold',
  },
  text1: {
    fontFamily: 'cursive',
    margin: 10.5,
  },
  container: {
    backgroundColor: 'lightblue',
  },
});
