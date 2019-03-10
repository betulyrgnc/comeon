import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';

class Shop extends Component {

  clickLogin = () => {
    Actions.loginScreen()
  }

  render(){
    return(
      <View>
      <Text style={{ textAlign: 'center', color: '#000'}}>Shop Page</Text>

      <TouchableOpacity
      style={styles.section}
      onPress={this.clickLogin}
      >
          <Text style={styles.txt}>Log in</Text>
      </TouchableOpacity>
      </View>
    );
  }
}

const styles = {
    txt:{
        color: "#27bd01",
        textAlign: "right",
        marginRight: 10,
        marginTop: 0,
    },
  }
export default Shop;
