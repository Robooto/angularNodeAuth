const mongoose = require('mongoose');
const User = require('../models/User');

class RegisterRepository {
    
    async saveUser(userData) {
        const userModel = new User(userData);
        const user = await userModel.save();
        return user;
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