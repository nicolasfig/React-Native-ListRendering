import React, { Component } from "react";
import {
	Button,
	TextInput,
	KeyboardAvoidingView,
	View,
	StyleSheet
} from "react-native";

import PropTypes from "prop-types";
import Constants from "expo-constants";

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: Constants.statusBarHeight,
		justifyContent: "center"
	},
	input: {
		padding: 5,
		margin: 5,
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
		phone: "",
		isFormValid: false
	};

	componentDidUpdate(prevProps, prevState) {
		if (
			this.state.name !== prevState.name ||
			this.state.phone !== prevState.phone
		) {
			this.validateForm();
		}
	}

    getHandler = key =>  val => {
        this.setState({[key]: val});
    };
    
    // val => {this.setState({ name: val })}
    /* handleNameChange = this.getHandler("name");
    hendlePhoneChange = this.handlePhoneChange("phone");
    
    handleNameChange = name => {
		this.setState({ name });
	}; 

	handlePhoneChange = phone => {
		if (+phone >= 0 && phone.length <= 10) {
			this.setState({ phone });
		}
	}; */

	validateForm = () => {
        const names = this.state.name.split(' ');
		if (
			+this.state.phone >= 0 &&
			this.state.phone.length <= 10 &&
            this.state.name.length >= 3 &&
			names.length >= 2 && names[0] && names[1]
		) {
			return this.setState({ isFormValid: true });
		} else {
			return this.setState({ isFormValid: false });
		}
	};

	handleSubmit = () => {
		this.props.onSubmit(this.state);
	};

	render() {
		return (
			<KeyboardAvoidingView behavior="padding" style={styles.container}>
				<TextInput
					style={styles.input}
					placeholder="Name"
					onChangeText={this.getHandler('name')}
					value={this.state.name}
				/>
				<TextInput
					style={styles.input}
					placeholder="Phone"
					onChangeText={this.getHandler('phone')}
					value={this.state.phone}
					keyboardType="numeric"
                    maxLength={10}
				/>
				<Button
					title={
						this.state.isFormValid
							? "Submit"
							: "Enter a name and phone number"
					}
					onPress={this.handleSubmit}
					disabled={!this.state.isFormValid}
				/>
			</KeyboardAvoidingView>
		);
	}
}
