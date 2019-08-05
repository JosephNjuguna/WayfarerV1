import Usermodel from '../models/Users';
import EncryptData from '../helpers/Encrypt';
import reqResponses from '../helpers/Responses';
import jwtGen from '../helpers/Jwt';

class Users {
	static async signup(req, res) {
		try {
			const {
				firstname,
				lastname,
				email,
				password,
			} = req.body;

			const hashedPassword = EncryptData.generateHash(password);

			const addUser = new Usermodel({
				firstname, lastname, email, hashedPassword,
			});
			if (await addUser.signup()) {
				// eslint-disable-next-line max-len
				const token = jwtGen.generateToken(addUser.result.id, addUser.result.email, addUser.result.firstname, addUser.result.lastname, addUser.result.isadmin);
				const user = {
					id: addUser.result.id,
					email: addUser.result.email,
					firstname: addUser.result.firstname,
					lastname: addUser.result.lastname,
					isadmin: addUser.result.isadmin,
					token,
				};
				return reqResponses.handleSignupsuccess('successfully signed up', user, res);
			}
		} catch (error) {
			console.log(error.toString());
			return reqResponses.handleError(500, error.toString(), res);
		}
	}
}

export default Users;
