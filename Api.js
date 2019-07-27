export const processContact = contact => ({
	name: `${contact.name.title} ${contact.name.first} ${contact.name.last}`,
    phone: contact.phone,
    key: contact.id.value
});

export const fetchUsers = async () => {
	const response = await fetch(
		"https://randomuser.me/api/?results=50&nat=gb"
	);
	const { results } = await response.json();
	return results.map(processContact);
};

export const login = async (username, password) => {
	response = await fetch("http://192.168.1.54:8000", {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({username, password,})
	});

	if (response.ok) {
		return true;
	}

    const errorMessage = await response.text();
    throw new Error(errorMessage);
};

// TODO: implement redux