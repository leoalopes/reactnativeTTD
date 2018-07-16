import React, { Component } from 'react';
import {AppRegistry, Text, View} from 'react-native';

export default class App extends Component {
  constructor(){
    super();
    this.state = {
      testLB:{}
    }
  }

  componentWillMount(){
    let credentials = {
      "email": "leoalopes207@gmail.com",
      "password": "123"
    }
    fetch('http://10.0.2.2:3000/api/appusers/login', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(credentials)
    }) 
    .then(result => result.json())
    .then(response => {
      this.setState({testLB:response});
    })
    .catch(error => {
      this.setState({testLB:error});
    });
  }

  render() {
    return (
      <View>
        <Text>{JSON.stringify(this.state.testLB)}</Text>
      </View>
    )
  }
}

AppRegistry.registerComponent('App', () => App);