import React from "react";
import { Button, FlatList, StyleSheet, View } from "react-native";
import { Constants } from "expo";

import Contact from "./Contact";
import contacts, {compareNames} from "./contacts";

export default class App extends React.Component {
	state = {
		showContacts: false,
		contacts: contacts
	};

	toggleContacts = () => {
		console.log(contacts[0])
		this.setState(prevState => ({ showContacts: !prevState.showContacts }));
	};

	sort = () => {
		this.setState(prevState => ({
			contacts: [...prevState.contacts].sort(compareNames)
		}))
	}

	renderItem = contact => <Contact {...contact.item}/>

	render() {
		const Contacts = this.state.showContacts && (
			<FlatList
				renderItem={this.renderItem}
				data={this.state.contacts}
				keyExtractor={(contact, key) => key.toString()}
			/>
		);

		return (
			<View style={styles.container}>
				<Button title="toggle contacts" onPress={this.toggleContacts} />
				{Contacts}
				{this.state.showContacts && <Button title="sort contacts" onPress={this.sort} />}
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
