/* import Example from './example/Stack';
export default Example;
 */
import React from "react";
import { StyleSheet } from "react-native";
import Constants from "expo-constants";
import {
	createStackNavigator,
	createAppContainer,
	createSwitchNavigator,
	createMaterialTopTabNavigator
} from "react-navigation";
import {MaterialCommunityIcons} from '@expo/vector-icons';

import contacts, { compareNames } from "./contacts";
import AddContactScreen from "./screens/AddContactScreen";
import ContactsListScreen from "./screens/ContactsListScreen";
import ContactDetailsScreen from "./screens/ContactDetailsScreen";
import LoginScreen from './screens/LoginScreen';
import SettingsScreen from './screens/SettingsScreen';

const ContactsTab = createStackNavigator(
	{
		AddContact: AddContactScreen,
		ContactList: ContactsListScreen,
		ContactDetails: ContactDetailsScreen
	},
	{
		initialRouteName: "ContactList",
		navigationOptions: {
			headerTintColor: '#a41034'
		}
	}
);

ContactsTab.navigationOptions = {
	tabBarIcon: ({focused, horizontal, tintColor}) => (
		<MaterialCommunityIcons
			name={`contacts`}
			size={21}
			color={tintColor}
		/>
	)
}

const MainNavigator = createMaterialTopTabNavigator({
	Contacts: ContactsTab,
	Settings: SettingsScreen
},
{
	tabBarOptions: {
		style: {
			marginTop: Constants.statusBarHeight
		}
	}
})

const SwitchNavigator = createSwitchNavigator(
	{
		Main: MainNavigator,
		Login: LoginScreen
	},
	{
		initialRouteName: "Login"
	}
);

const AppNavigator = createAppContainer(SwitchNavigator);

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
