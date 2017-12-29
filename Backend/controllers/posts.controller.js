const express = require('express');
const router = express.Router();
const regRepo = require('../repo/registerRepository');

class PostsController {

    constructor(router) {
        this.router = router;
        this.init();
    }

    getPosts(req, res) {
        const posts = [
            {message: 'hello'},
            {message: 'hi'}
        ];
        res.send(posts);
    }

    async getUsers(req, res) {
        var users = await regRepo.GetUsers()
            .catch((err) => this.handleError(err, res));
        res.send(users);
    }

    async getUser(req, res) {
        var user = await regRepo.GetUser(req.params.id)
            .catch((err) => this.handleError(err, res));
        res.send(user);
    }

    init() {
        this.router.get('/', this.getPosts.bind(this));
        this.router.get('/users', this.getUsers.bind(this));
        this.router.get('/users/:id', this.getUser.bind(this));
    }

    handleError(err, res) {
        console.error(err);
        res.status(500).send({ error: err });
    }
}
const posts = new PostsController(router);
module.exports = posts.router;