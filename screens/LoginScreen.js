import React,{Component} from 'react';
import {Button, View, StyleSheet, Text} from 'react-native';

export default class LoginScreen extends Component {
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.text}>You are currently in the login screen</Text>
                <Button title="press to log in" onPress={this._login}/>
            </View>
        ) 
    }

    _login = () => {
        this.props.navigation.navigate('Main');
        // navigate to main navigator
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center"
    },
    text: {
        textAlign: "center"
    }
})