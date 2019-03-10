import React, { Component } from 'react';

import { View, Text, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';



class About extends Component {

  constructor(props) {
    super(props)
    this.state = {
      count: 0 ,
    }
      console.log("count");
  }

  clickLogin = () => {
        //Actions.casinoScreen()
        const { count } = this.state
        this.setState({ count: ++this.state.count });
        console.log(this.state.count)

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

          <Text style={[styles.countText]}>
           { this.state.count !== 0 ? this.state.count: null}
          </Text>

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
    countText: {
        color: '#FF00FF',
        fontSize: 20,
        textAlign: 'center',
    },
  }

export default About;
