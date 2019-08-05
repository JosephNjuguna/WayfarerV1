import dotenv from 'dotenv';

dotenv.config();
const users = {
	user1: {
		firstname: '',
		lastname: 'testlastname',
		email: 'test2@mail.com',
		password: process.env.password,
	},
	user2: {
		firstname: 'testfirstname',
		lastname: '',
		email: 'test2@mail.com',
		password: process.env.password,
	},
	user3: {
		firstname: 'testfirstname',
		lastname: 'testlastname',
		email: '',
		password: process.env.password,
	},
	user4: {
		firstname: 'testfirstname',
		lastname: 'testlastname',
		email: 'test2@mail.com',
		password: '',
	},
	user5: {
		firstname: 'testfirstname',
		lastname: 'testlastname',
		email: 'test2@mail.com',
		password: process.env.password,
	},
	user6: {
		firstname: 'testfirstname',
		lastname: 'testlastname',
		email: 'test2@mail.com',
		password: process.env.password,
	},
};

export default users;
