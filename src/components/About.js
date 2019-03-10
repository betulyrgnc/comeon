import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';



class About extends Component {

  clickLogin = () => {
    Actions.loginScreen()
  }

  back = () => {
    Actions.casinoScreen()
  }
  render(){
    return(

      <View>
        <Text style={{ textAlign: 'center', color: '#000'}}>About Page</Text>
        
          <TouchableOpacity
          style={styles.section}
          onPress={this.clickLogin}
          >
              <Text style={styles.txt}>Log in</Text>
          </TouchableOpacity>


          <TouchableOpacity
          onPress={this.back}
          >
              <Text style={styles.backstyle}>Back</Text>
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
    backstyle:{
        color: "#27bd01",
        textAlign: "left",
        marginLeft: 10,
        marginTop: 0,
    },
  }

export default About;
