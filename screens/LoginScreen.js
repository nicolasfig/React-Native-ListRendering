import React, { Component } from "react";
import { Button, View, StyleSheet, TextInput } from "react-native";

export default class LoginScreen extends Component {
	state = {
		userName: "",
		password: ""
	};

	handleUserNameUpdate = userName => {
		this.setState({ userName });
	};

	handlePasswordUpdate = password => {
		this.setState({ password });
	};

	render() {
		return (
			<View style={styles.container}>
				<TextInput
					placeholder="username"
					value={this.state.userName}
					onChangeText={this.handleUserNameUpdate}
				/>
				<TextInput
					placeholder="password"
					value={this.state.password}
					onChangeText={this.handlePasswordUpdate}
				/>
				<Button title="press to log in" onPress={this._login} />
			</View>
		);
	}

	_login = () => {
		fetch("http://localhost:8000", {
			method: "POST",
			headers: { "content-type": "application/json" },
			body: JSON.stringify({
				username: this.state.userName,
				password: this.state.password
			})
		})
			.then(res => console.log(res))
		this.props.navigation.navigate("Main");
		// navigate to main navigator
	};
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center"
	},
	text: {
		textAlign: "center"
	}
});
