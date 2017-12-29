const mongoose = require('mongoose');
const User = require('../models/User');

class RegisterRepository {
    
    saveUser(userData) {
        const user = new User(userData);

        return user.save();
    }

    async findUser(email) {
        const user = await User.findOne({email: email});
        return user;
    }

    async GetUsers() {
        const users = await User.find({}, '-pwd -__v');
        return users;
    }

    async GetUser(id) {
        const users = await User.findById(id, '-pwd -__v');
        return users;
    }
}

module.exports = new RegisterRepository();