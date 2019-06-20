/* import Example from './example/Stack';
export default Example;
 */
import React from "react";
import { StyleSheet } from "react-native";
import Constants from "expo-constants";
import {
	createStackNavigator,
	createAppContainer,
	createSwitchNavigator
} from "react-navigation";

import contacts, { compareNames } from "./contacts";
import AddContactScreen from "./screens/AddContactScreen";
import ContactsListScreen from "./screens/ContactsListScreen";
import ContactDetailsScreen from "./screens/ContactDetailsScreen";
import LoginScreen from './screens/LoginScreen';

const MainNavigator = createStackNavigator(
	{
		AddContact: AddContactScreen,
		ContactList: ContactsListScreen,
		ContactDetails: ContactDetailsScreen
	},
	{
		initialRouteName: "ContactList"
	}
);

const SwitcNavigator = createSwitchNavigator(
	{
		Main: MainNavigator,
		Login: LoginScreen
	},
	{
		initialRouteName: "Login"
	}
);

const AppNavigator = createAppContainer(SwitcNavigator);

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
