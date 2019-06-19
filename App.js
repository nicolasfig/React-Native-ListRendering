import React from "react";
import { Button, StyleSheet, View } from "react-native";
import Constants from "expo-constants";

import ContactsList from "./ContactsList";
import AddContactForm from "./AddContactForm";
import contacts, { compareNames } from "./contacts";

export default class App extends React.Component {
	state = {
		showContacts: true,
		showForm: false,
		contacts: contacts
	};

	addContact = newContact => {
		this.setState(prevState => ({  showForm: false, contacts: [...prevState.contacts, newContact] }));
	};

	toggleForm = () => {
		this.setState(prevState => ({ showForm: !prevState.showForm }));
	};

	toggleContacts = () => {
		this.setState(prevState => ({ showContacts: !prevState.showContacts }));
	};

	sort = () => {
		this.setState(prevState => ({
			contacts: [...prevState.contacts].sort(compareNames)
		}));
	};

	render() {
		if (this.state.showForm) return <AddContactForm onSubmit={this.addContact}/>;

		return (
			<View style={styles.container}>
				<Button title="toggle contacts" onPress={this.toggleContacts} />
				{this.state.showContacts && (
					<ContactsList contacts={this.state.contacts} />
				)}
				<Button title="Add Contact" onPress={this.toggleForm} />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		paddingTop: Constants.statusBarHeight
	}
});
