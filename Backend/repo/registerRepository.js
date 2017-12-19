const mongoose = require('mongoose');
const User = require('../models/User');

class RegisterRepository {
    constructor(user) {
        this.user = user;
    }
    
    saveUser(userData) {
        const user = new this.user(userData);

        return user.save();
    }

    async findUser(email) {
        const user = await this.user.findOne({email: email});
        return user;
    }
}

module.exports = new RegisterRepository(User);