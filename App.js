import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from
'react-native';
import firebase from '@firebase/app';
import '@firebase/auth';
import Root from './src/Root';

type Props = {};

export default class App extends Component<Props> {
  render() {
    return (
        <View style={styles.container}>
          <Root />
        </View>
      );
  }


}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  });
