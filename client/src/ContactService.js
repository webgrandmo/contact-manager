import axios from 'axios';

const url = 'http://localhost:5000/api/users';

/* eslint-disable no-async-promise-executor */
class ContactService {
	static getContacts() {
		return new Promise(async (resolve, reject) => {
			try {
				const res = await axios.get(url);
				const data = await res.data;
				resolve(
					data.map((user) => ({
						...user,
					}))
				);
			} catch (error) {
				reject(error);
			}
		});
	}
}

export default ContactService;
