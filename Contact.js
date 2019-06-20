import React from "react";
import { View, Text, StyleSheet} from "react-native";
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
    contact: {
        padding: 21
    }
})

const Contact = props => (
	<View style={styles.contact}>
		<Text>{props.name}</Text>
		<Text>{props.phone}</Text>
	</View>
);

Contact.propTypes = {
	name: PropTypes.string,
	phone: PropTypes.string
}

export default Contact;
