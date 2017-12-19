const express = require('express');
const router = express.Router();
const regRepo = require('../repo/registerRepository');
const jwt = require('jwt-simple');

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
		const userData = req.body;

		const user = await regRepo.findUser(userData.email);
		if (!user)
			return res.status(401).send({ message: 'Email or Password invalid' });

		if (userData.pwd != user.pwd)
			return res.status(401).send({ message: 'Email or Password invalid' });

		const payload = {};

		const token = jwt.encode(payload, '123');

		res.status(200).send({token: token});
	}

	init() {
		this.router.post('/', this.register);
		this.router.post('/login', this.loginUser);
	}
}
const register = new RegisterController(router);
register.init();
module.exports = register.router;