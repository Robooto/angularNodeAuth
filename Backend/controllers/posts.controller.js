const express = require('express');
const router = express.Router();
const regRepo = require('../repo/registerRepository');
const postRepo = require('../repo/postRepository');

class PostsController {

    constructor(router) {
        this.router = router;
        this.init();
    }

    async getPosts(req, res) {
        const posts = await postRepo.getPosts(req.params.id)
            .catch((err) => this.handleError(err, res));
        res.send(posts);
    }

    async savePost(req, res) {
        const post = req.body;
        post.author = '5a4d5c21d10e3a32c0516bbd';
        const savedPost = await postRepo.savePost(post)
            .catch((err) => this.handleError(err, res));
        res.send(savedPost);
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
        this.router.get('/users', this.getUsers.bind(this));
        this.router.get('/users/:id', this.getUser.bind(this));
        this.router.get('/:id', this.getPosts.bind(this));
        this.router.post('/', this.savePost.bind(this));
    }

    handleError(err, res) {
        console.error(err);
        res.status(500).send({ error: err });
    }
}
const posts = new PostsController(router);
module.exports = posts.router;