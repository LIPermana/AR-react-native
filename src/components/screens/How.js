import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';
import {Container, Content, Button, H1, Thumbnail} from 'native-base';

export default class Menu extends Component {
  render(){
    return(
      <Container style={forstyle.container}>
        <Content>
          <H1 style={forstyle.judul}>How To Use</H1>
          <View style={forstyle.satu}>
            <Text style={forstyle.text}>1. Press button Get Started or Scan</Text>
            <Image style={forstyle.getstarted} source={require('../../Icon/GetStarted.png')}/>
          </View>
          <View style={forstyle.satu}>
            <Text style={forstyle.text}>2. Select 3D object</Text>
            <Image style={forstyle.getstarted} source={require('../../Icon/Earth.png')}/>
          </View>
          <View style={forstyle.satu}>
            <Text style={forstyle.text}>3. Open camera, and the object will appear</Text>
            <Image style={forstyle.getstarted} source={require('../../Icon/Camera.png')}/>
          </View>
        </Content>
      </Container>
    )
  }
}

const forstyle = {
  container: {
    flow: 1,
  },
  judul: {
    fontWeight: 'bold',
    alignSelf: 'center',
    marginTop: 30,
    color: '#FF5757',
    fontSize: 35
  },
  satu: {
    margin: 20,
    marginBottom: 0
  },
  getstarted: {
    alignSelf: 'center',
    margin: 20,
    marginBottom: 0
  },
  text: {
    fontSize: 16,
    color: 'black'
  }
}
