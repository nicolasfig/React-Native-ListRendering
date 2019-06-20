import React, {Component} from 'react';
import {Button, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

import ContactsList from '../ContactsList';

export default class ContactsListScreen extends Component {
	state = {
		showContacts: true,
	};

	toggleContacts = () => {
		this.setState(prevState => ({ showContacts: !prevState.showContacts }));
	};

    showForm = () => {
        this.props.navigation.navigate('AddContact');
    }

	render() {

		return (
			<View style={styles.container}>
				<Button title="toggle contacts" onPress={this.toggleContacts} />
				{this.state.showContacts && (
					<ContactsList contacts={this.props.screenProps.contacts} />
				)}
				<Button title="Add Contact" onPress={this.showForm} />
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
