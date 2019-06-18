import React from "react";
import { SectionList, Text } from "react-native";
import PropTypes from "prop-types";

import Contact from "./Contact";

/* item = {name: String, phone: String, key: Number}
	same as contact => <Contact {...contact.item}/> */
const renderItem = ({ item }) => <Contact {...item} />;

const renderSectionHeader = contact => <Text>{contact.section.title}</Text>;

const ContactsList = props => {
    
    const contactsByLetter = props.contacts.reduce((obj, contact) => {
        const firstLetter = contact.name[0].toUpperCase();
        return {
            ...obj,
            [firstLetter]: [...(obj[firstLetter] || []), contact],
        }
    },{}) 

    const sections = Object.keys(contactsByLetter).sort().map(letter => ({
        title: letter,
        data: contactsByLetter[letter]
    }))

    return (
		<SectionList
			renderItem={renderItem}
			renderSectionHeader={renderSectionHeader}
			sections={sections}
		/>
	);
};

ContactsList.psropTypes = {
	renderItem: PropTypes.func,
	renderSectionHeader: PropTypes.func,
	contacts: PropTypes.array
};

export default ContactsList;
