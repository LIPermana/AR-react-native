/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';
import {Button} from 'native-base';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default Home = (props) => (
      <View style={styles.container}>
       <View style={styles.logoContainer}>
          <Image
            source={require('../../Logo.png')}
            style={styles.logo}
          />
        </View>
        <View style={styles.btnContainer}>
          <Button
            rounded
            style={styles.btn}
            onPress={()=> props.navigator.switchToTab({
              tabIndex: 1
            })}
          >
            <Text style={styles.btntxt}>Get Started</Text>
          </Button>
        </View>
      </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF5757',
  },
  logoContainer: {
    flex: 4,
    justifyContent: 'center',
  },
  logo: {
    width: 210,
    height: 150
  },
  btnContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  btn: {
    backgroundColor: '#fff',

    width: 200,
    height: 40
  },
  btntxt: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#FF5757',
    margin: 47,
  }
});
