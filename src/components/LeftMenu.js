import React, { Component } from 'react';
import { View,
         Text,
         Dimensions,
         TouchableOpacity,
         Image,
         AsyncStorage } from 'react-native';
import RNRestart from 'react-native-restart';

import { Actions } from 'react-native-router-flux';

const { height } = Dimensions.get('window');

class LeftMenu extends Component {

/*    state = {
        user: {}
    }

    componentWillMount() {
        retrieveUser((body) => {
            this.setState({
                user: body
            });
        });
    }
    logOut = () => {
        AsyncStorage.clear();
        RNRestart.Restart();
    }
*/
    renderSection(text, onPress) {
        return(
            <TouchableOpacity
            style={styles.section}
            onPress={onPress}
            >

                <Text style={styles.txt}>{text}</Text>
            </TouchableOpacity>
        );
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.element}>

                    {this.renderSection('Casino', () => Actions.casinoScreen())}
                    {this.renderSection('Sports', () => Actions.sportsScreen())}
                    {this.renderSection('About Comeon', () => Actions.aboutScreen())}

                </View>
            </View>
        );
    }

}

const styles = {
    header:{
        paddingVertical:25,
        paddingHorizontal: 65,
        flexDirection: 'row',
        marginVertical: 5,
    },
    footer: {
        paddingVertical: 30,
        alignItems: 'center',
        flexDirection: 'column',
    },
    txt:{
        flex:1,
        paddingHorizontal: 20,
        width: 108,
        height: 30,
        fontFamily: "Gibson",
        fontSize: 18,
        fontWeight: "normal",
        fontStyle: "normal",
        letterSpacing: 0,
        textAlign: "left",
        color: "#ffffff"
    },
    container:{
        alignItems: 'center',
        justifyContent: 'center',
        height:height,
        opacity: 0.98,
        backgroundColor: "#1d1b1a"
    },
    element:{
        alignItems: 'center',
        flexDirection: 'column',
    },
    section: {
        paddingHorizontal: 20,
        flexDirection: 'row',
        marginVertical: 5,
        alignItems: 'center',
    }
}

export default LeftMenu;
