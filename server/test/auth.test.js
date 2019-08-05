/* eslint-disable max-len */
import chai from 'chai';
import chaiHttp from 'chai-http';
import dotenv from 'dotenv';
import userData from '../Mockdata/users';
import app from '../../app';
import Db from '../db/Db';
// import Token from '../helpers/Jwt';
import EncryptData from '../helpers/Encrypt';

dotenv.config();
chai.should();
chai.use(chaiHttp);
const hashedPassword = EncryptData.generateHash(process.env.password);

const user = {
	firstname: 'test',
	lastname: 'test',
	email: 'test1@mail.com',
	password: hashedPassword,
	isAdmin: false,
};

describe('/USERS auth', () => {
	before('add user', async (done) => {
		Db.query('INSERT INTO users (firstname, lastname, email, password, isAdmin) values($1, $2, $3, $4, $5)',
			[user.firstname, user.lastname, user.email, user.password, user.isAdmin]);
		done();
	});

	after('after all test', (done) => {
		Db.query('DELETE FROM users');
		Db.query('DROP TABLE IF EXISTS users');
		done();
	});

	describe('/POST AUTHENTICATION ', () => {
		it('should fail with empty firstname field', (done) => {
			chai.request(app)
				.post('/api/v2/signup')
				.send(userData.user1)
				.end((err, res) => {
					res.should.have.status(400);
					if (err) return done();
					done();
				});
		});

		it('should fail with empty lastname field', (done) => {
			chai.request(app)
				.post('/api/v2/signup')
				.send(userData.user2)
				.end((err, res) => {
					res.should.have.status(400);
					if (err) return done();
					done();
				});
		});

		it('should fail with empty email field', (done) => {
			chai.request(app)
				.post('/api/v2/signup')
				.send(userData.user3)
				.end((err, res) => {
					res.should.have.status(400);
					if (err) return done();
					done();
				});
		});

		it('should fail with empty password field', (done) => {
			chai.request(app)
				.post('/api/v2/signup')
				.send(userData.user4)
				.end((err, res) => {
					res.should.have.status(400);
					if (err) return done();
					done();
				});
		});

		it('should successfully sign up user', (done) => {
			chai.request(app)
				.post('/api/v2/signup')
				.send(userData.user5)
				.end((err, res) => {
					res.should.have.status(201);
					if (err) return done();
					done();
				});
		});

		it('should check user email already exist', (done) => {
			chai.request(app)
				.post('/api/v2/signup')
				.send(userData.user6)
				.end((err, res) => {
					res.should.have.status(409);
					if (err) return done();
					done();
				});
		});
	});
});
