import React, { Component } from 'react';
import { View, Text, Dimensions } from 'react-native';
import { Scene, Router, Drawer } from
'react-native-router-flux';


import Casino from './components/Casino';
import Sports from './components/Sports';
import About from './components/About';
import LeftMenu from './components/LeftMenu';

const { width } = Dimensions.get('window');

export default class Root extends Component {
  render() {
    return(
      <Router>
        <Scene key='Root'>
            <Drawer
                hideNavBar
                key='leftMenu'
                contentComponent={LeftMenu}
                drawerPosition="left"
                drawerImage={require('./img/menu-icon.jpg')}
                drawerWidth={(width / 2 + 100)}
            >
                <Scene
                    navigationBarStyle={{ height: 85 }}
                    sceneStyle={{ marginTop: 85 }}
                    key="casinoScreen" component={Casino}
                 />
                <Scene
                    navigationBarStyle={{ height: 85 }}
                    sceneStyle={{ marginTop: 85 }}
                    key="sportsScreen" component={Sports}
                 />
                <Scene
                    navigationBarStyle={{ height: 85 }}
                    sceneStyle={{ marginTop: 85 }}
                    key="aboutScreen" component={About}
                />

            </Drawer>
            <Scene
            key='aboutScreen'
            component={About}
            hideNavBar
            />

            <Scene
            key='casinoScreen'
            component={Casino}
            hideNavBar
            />

            <Scene
            key='sportsScreen'
            component={Sports}
            hideNavBar
            />



         </Scene>
      </Router>
    );
  }
}
