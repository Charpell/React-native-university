import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

class HomeComponent extends Component {

  render () {
    return (
      <View>
        <Text>This is home</Text>
        <Button 
          title="go to profile"
          onPress={() => {
            this.props.navigator.push({
              screen: "codingrevolution.HomeScreen",
              title: "Profile"
            })
          }}
        />
      </View>
    )
  }
}

export default HomeComponent;
