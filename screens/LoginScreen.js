import React, { Component } from "react";
import { Button, View, StyleSheet, TextInput, Text } from "react-native";
import { login } from '../Api';
export default class LoginScreen extends Component {
	state = {
		username: "",
		password: "",
		error: ""
	};

	handleUserNameUpdate = username => {
		this.setState({ username });
	};

	handlePasswordUpdate = password => {
		this.setState({ password });
	};

	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.error}>{this.state.error}</Text>
				<TextInput
					autoCapitalize="none"
					placeholder="username"
					value={this.state.userName}
					onChangeText={this.handleUserNameUpdate}
				/>
				<TextInput
					autoCapitalize="none"
					placeholder="password"
					value={this.state.password}
					onChangeText={this.handlePasswordUpdate}
					secureTextEntry
				/>
				<Button title="press to log in" onPress={this._login} />
			</View>
		);
	}

	_login = async () => {
		try{
			const success = await login(this.state.username, this.state.password);
			this.props.navigation.navigate('Main');
		}catch(error){
			const errorMessage = error.message;
			this.setState({ error: errorMessage	})
		}

	};
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center"
	},
	text: {
		textAlign: "center"
	},
	error: {
		color: "#f00",
		textAlign: "center"
	}
});
