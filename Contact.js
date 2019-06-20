import React from "react";
import { TouchableOpacity, Text, StyleSheet} from "react-native";
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
    contact: {
        padding: 21
    }
})

const Contact = props => (
	<TouchableOpacity style={styles.contact} onPress={()=>{
		props.onSelectContact(props);
	}}>
		<Text>{props.name}</Text>
		<Text>{props.phone}</Text>
	</TouchableOpacity>
);

Contact.propTypes = {
	name: PropTypes.string,
	phone: PropTypes.string
}

export default Contact;
