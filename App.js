/* import Example from './example/Switch';
export default Example; */

import React from "react";
import { StyleSheet } from "react-native";
import Constants from "expo-constants";
import { createSwitchNavigator, createAppContainer } from "react-navigation";

import contacts, { compareNames } from "./contacts";
import AddContactScreen from "./screens/AddContactScreen";
import ContactsListScreen from "./screens/ContactsListScreen";

const MainNavigator = createSwitchNavigator(
	{
		AddContact: AddContactScreen,
		ContactList: ContactsListScreen
	},
	{
		initialRouteName: "ContactList"
	}
);

const AppNavigator = createAppContainer(MainNavigator);

export default class App extends React.Component {
	state = {
		contacts: contacts
	};

	addContact = newContact => {
		this.setState(prevState => ({
			showForm: false,
			contacts: [...prevState.contacts, newContact]
		}));
	};

	render() {
		return (
			<AppNavigator
				screenProps={{
					contacts: this.state.contacts,
					addContact: this.addContact
				}}
			/>
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
