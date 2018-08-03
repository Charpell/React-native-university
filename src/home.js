import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import LoadTabs from './tabs';

class HomeComponent extends Component {

  render () {
    return (
      <View>
        <Text>This is home</Text>
        <Button 
          title="go to profile"
          onPress={() => {
            LoadTabs();
          }}
        />
      </View>
    )
  }
}

export default HomeComponent;
