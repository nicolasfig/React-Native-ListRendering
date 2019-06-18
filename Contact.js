import React from "react";
import { View, Text, StyleSheet} from "react-native";

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

export default Contact;
