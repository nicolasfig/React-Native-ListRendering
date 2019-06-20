import React, {Component} from 'react';
import AddContactForm from "../AddContactForm";

export default class App extends Component{
    
    static navigationOptions = {
        headerTitle: 'Add Contact',
        headerTitleStyle: {
            flex: 1,
            textAlign: "center"
        },
        headerTitleContainerStyle: {
            left: 0
        },
	}

    handleSubmit = formState => {
        this.props.screenProps.addContact(formState);
        this.props.navigation.navigate('ContactList');
    }
    
    render(){
        return <AddContactForm onSubmit={this.handleSubmit}/>;
    }
}