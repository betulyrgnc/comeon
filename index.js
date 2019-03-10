/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyA1iqo5-EZfQcVXmuco2sNj2YtxxA1yN3Q",
    authDomain: "comeon-a08b1.firebaseapp.com",
    databaseURL: "https://comeon-a08b1.firebaseio.com",
    projectId: "comeon-a08b1",
    storageBucket: "comeon-a08b1.appspot.com",
    messagingSenderId: "172603368361"
  };
  firebase.initializeApp(config);

AppRegistry.registerComponent('comeon', () => App);
