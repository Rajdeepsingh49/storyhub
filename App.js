import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Constants from 'expo-constants';
import ReadStoryScreen from './screens/ReadStoryScreen';
import WriteStoryScreen from './screens/WriteStoryScreen';

export default class App extends React.Component {
  render() {
    return (
      <View style={style.container}>
        <AppContainer />
      </View>
    );
  }
}

const Tabnavigator = createBottomTabNavigator(
  {
    WriteStory: WriteStoryScreen,
    ReadStory: ReadStoryScreen,
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: () => {
        const routeName = navigation.state.routeName;
        if (routeName === 'WriteStory') {
          return (
            <Image
              source={require('./assets/WS2.png')}
              style={{ width: 49, height: 49, marginBottom: 7 }}
            />
          );
        } else if (routeName === 'ReadStory') {
          return (
            <Image
              source={require('./assets/RS.png')}
              style={{ width: 100, height: 150 }}
            />
          );
        }
      },
    }),
  }
);

const AppContainer = createAppContainer(Tabnavigator);

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'White',
  },
});
