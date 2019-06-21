import React, {Component} from 'react';
import {Button, View, StyleSheet } from 'react-native';

import ContactsList from '../ContactsList';

export default class ContactsListScreen extends Component {

	static navigationOptions = ({navigation}) => {
		return {
			headerTitle: 'Contacts',
			headerTitleStyle: {
				flex: 1,
				textAlign: "center"
			},
			headerRight: <Button title="Add" onPress={() => {
				navigation.navigate('AddContact')
			}}/>,
			 headerTitleContainerStyle: {
				right: 0
			},
		}
	}

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
				{/* <Button title="toggle contacts" onPress={this.toggleContacts} /> */}
				{this.state.showContacts && (
					<ContactsList 
						contacts={this.props.screenProps.contacts} 
						onSelectContact={(contact) => {
							this.props.navigation.navigate('ContactDetails', {
								name: contact.name,
								phone: contact.phone
							});
						}}
					/>
				)}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
	}
});
