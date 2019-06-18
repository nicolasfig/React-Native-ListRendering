import React from "react";
import { Button, StyleSheet, View } from "react-native";
import Constants from "expo-constants";

import ContactsList from "./ContactsList";
import contacts, { compareNames } from "./contacts";

export default class App extends React.Component {
	state = {
		showContacts: false,
		contacts: contacts
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
		return (
			<View style={styles.container}>
				<Button title="toggle contacts" onPress={this.toggleContacts} />
				{this.state.showContacts && (
					<ContactsList contacts={this.state.contacts} />
				)}
				{this.state.showContacts && (
					<Button title="sort contacts" onPress={this.sort} />
				)}
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
