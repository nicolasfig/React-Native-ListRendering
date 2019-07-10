export const processContact = contact => ({
    name: `${contact.name.title} ${contact.name.first} ${contact.name.last}`,
    phone: contact.phone,
})

export const fetchUsers = async () => {
    const response = await fetch('https://randomuser.me/api/?results=50&nat=gb')
	const {results} = await response.json();
    return results.map(processContact)
}

