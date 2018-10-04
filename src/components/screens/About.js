import React, {Component} from 'react';
import {Text} from 'react-native';
import {Container, Content, Button} from 'native-base';

export default class Menu extends Component {
  render(){
    return(
      <Container>
        <Content>
          <Button bordered>
            <Text>About</Text>
          </Button>
        </Content>
      </Container>
    )
  }
}
