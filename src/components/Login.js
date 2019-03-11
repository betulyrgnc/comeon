import React, { Component } from 'react';
import { TextInput, Alert, View, Text, TouchableOpacity, Dimensions, AsyncStorage } from 'react-native';
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

const { width, height } = Dimensions.get('window');

class Login extends Component {

  constructor(props) {
    super(props)
    this.state = {
      count: 0 ,
    }
  }

  /*
  Giriş için:
  email = test@test.com
  password = 654321
  */

  state = { email: '', password: ''};

  clickLogin() {

    const { count } = this.state
    this.setState({ count: ++this.state.count });
    console.log(this.state.count)

  if (this.state.email === '' || this.state.password === '') {
    Alert.alert(
      'Mesaj', // Başlık kısmı
      'Her iki alanda dolu olmalı!', //İçerik
      [
        { text: 'Tamam', onPress: () => null } //Buton için
      ]
    );
  } else {
      firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(this.loginSucces.bind(this))
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then(this.loginSucces.bind(this))
        .catch(this.loginFail.bind(this));
      });
    }
  }

async loginSucces() {
  console.log('başarılı');
  const lastPage = await AsyncStorage.getItem('lastPage')
  if(lastPage === 'sportsScreen') {
    Actions.sportsScreen()
  } else if (lastPage === 'casinoScreen') {
    Actions.casinoScreen()
  } else {
    Actions.shopScreen()
  }
}

loginFail() {
  console.log('Hatalı');

  Alert.alert(
    'Mesaj', // Başlık kısmı
    'Kullanıcı adı veya şifreniz hatalı!', //İçerik
    [
      { text: 'Tamam', onPress: () => null } //Buton için
    ]
  );
}

    render() {
    return (
      <View style={{flex: 1}}>

          <View style={{ paddingHorizontal: 150, paddingTop: 30, flex: 1 }}>
            <TextInput
            placeholder="Email"
            placeholderTextColor={'#cccccc'}
            style={styles.inputStyle}
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
            underlineColorAndroid={'gray'}
            />
            <TextInput
              secureTextEntry
              placeholder="Password"
              placeholderTextColor={'#cccccc'}
              style={styles.inputStyle}
              value={this.state.password}
              onChangeText={password => this.setState({ password })}
              underlineColorAndroid={'gray'}
            />
            <TouchableOpacity onPress={this.clickLogin.bind(this)} style={styles.buttonStyle}>
              <Text style={styles.textStyle}> Log in </Text>
            </TouchableOpacity>

            <Text style={[styles.countText]}>
             { this.state.count !== 0 ? this.state.count: null}
            </Text>

          </View>
      </View>
    )
  };
}

const styles = {
    inputStyle: {
      width: width*0.65,
      textAlign: 'center',
      justifyContent: 'center',
      fontSize: 20,
      marginTop: 0,
      color:'#000'
    },
    textStyle: {
      alignSelf: 'center',
      color: '#fff',
      fontSize: 16,
      fontWeight: '600',
      paddingTop: 10,
      paddingBottom: 10
    },
    buttonStyle: {
      textAlign: 'center',
      justifyContent: 'center',
      backgroundColor: '#a7d900',
      width: width*0.65,
      backgroundColor: '#27bd01',
      borderRadius: 5,
      borderWidth: 1,
      borderColor: '#a7d900',

    },
    countText: {
        color: '#FF00FF',
        fontSize: 20,
        textAlign: 'center',
    },
};

export default Login;
