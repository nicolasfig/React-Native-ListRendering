import React, { Component } from "react";
import {View, StyleSheet, Text } from "react-native";
import {MaterialCommunityIcons} from '@expo/vector-icons';

export default class SettingsScreen extends Component {
	static navigationOptions = {
        tabBarIcon: ({focused, horizontal, tintColor}) => (
            <MaterialCommunityIcons
                name={`settings${focused ? '':'-outline'}`}
                size={21}
                color={tintColor}
            />
        )
    };
	render() {
		return (
			<View style={styles.container}>
				<MaterialCommunityIcons name="settings" size={34} color="#000"/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    text: {
        textAlign: "center"
    }
})