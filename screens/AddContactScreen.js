import React, {Component} from 'react';
import AddContactForm from "../AddContactForm";

export default class App extends Component{
    
    handleSubmit = formState => {
        this.props.screenProps.addContact(formState);
        this.props.navigation.navigate('ContactList');
    }
    
    render(){
        return <AddContactForm onSubmit={this.handleSubmit}/>;
    }
}