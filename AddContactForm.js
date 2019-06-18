import React, { Component } from "react";
import { Button, TextInput, View, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import Constants from "expo-constants";

const styles = StyleSheet.create({
	container: {
		paddingTop: Constants.statusBarHeight
	},
	input: {
		padding: 5,
		borderColor: "#000",
		borderWidth: 1
	}
});

export default class AddContactForm extends Component {
	static propTypes = {
		addContact: PropTypes.func
	};

	state = {
		name: "",
		phone: ""
	};

	handleNameChange = name => {
		this.setState({ name });
	};

	handlePhoneChange = phone => {
		this.setState({ phone });
	};

	render() {
		return (
			<View style={styles.container}>
				<TextInput
					style={styles.input}
                    placeholder="Name"
					onChangeText={this.handleNameChange}
					value={this.state.name}
				/>
				<TextInput
					style={styles.input}
                    placeholder="Phone"
					onChangeText={this.handlePhoneChange}
					value={this.state.phone}
                    keyboardType="numeric"
				/>
				<Button title="Add Contact" />
			</View>
		);
	}
}
