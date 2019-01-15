import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Index from './src/index'

console.disableYellowBox = true

export default class App extends React.Component {
  render() {
    return (
      <Index/>
    );
  }
}
