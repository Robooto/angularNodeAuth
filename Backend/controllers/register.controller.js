const express = require('express');
const router = express.Router();
const regRepo = require('../repo/registerRepository');
const jwt = require('jwt-simple');
const bcrypt = require('bcrypt-nodejs');

class RegisterController {

	constructor(router) {
		this.router = router;
		this.init();
	}

	register(req, res) {
		const userData = req.body;
		regRepo.saveUser(userData)
			.then(doc => res.status(200))
			.catch(err => res.status(500));
	}

	async loginUser(req, res) {
		const loginData = req.body;

		const user = await regRepo.findUser(loginData.email);
		if (!user)
			return res.status(401).send({ message: 'Email or Password invalid' });

		bcrypt.compare(loginData.pwd, user.pwd, (err, isMatch) => {
			if (!isMatch)
			  return res.status(401).send({ message: 'Email or Password invalid' });

			const payload = {};

			const token = jwt.encode(payload, '123');

			res.status(200).send({token: token});
		});
	}

	init() {
		this.router.post('/', this.register.bind(this));
		this.router.post('/login', this.loginUser.bind(this));
	}
}
const register = new RegisterController(router);
module.exports = register.router;