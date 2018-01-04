const express = require('express');
const router = express.Router();
const regRepo = require('../repo/registerRepository');
const postRepo = require('../repo/postRepository');
const jwt = require('jwt-simple');

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
        post.author = req.userId;
        const savedPost = await postRepo.savePost(post)
            .catch((err) => this.handleError(err, res));
        res.send(savedPost);
    }

    async getUsers(req, res) {
        const users = await regRepo.GetUsers()
            .catch((err) => this.handleError(err, res));
        res.send(users);
    }

    async getUser(req, res) {
        const user = await regRepo.GetUser(req.params.id)
            .catch((err) => this.handleError(err, res));
        res.send(user);
    }

    init() {
        this.router.get('/users', this.checkAuthenticated, this.getUsers.bind(this));
        this.router.get('/users/:id', this.getUser.bind(this));
        this.router.get('/:id', this.getPosts.bind(this));
        this.router.post('/',this.checkAuthenticated, this.savePost.bind(this));
    }

    checkAuthenticated(req, res, next) {
        if(!req.header('authorization')) {
            return res.status(401).send({message: 'Unauthorized. Missing Auth Header'})
        }
        let token = req.header('authorization').split(' ')[1];
        if(!token) {
            return res.status(401).send({message: 'Unauthorized. Invalid Token'});
        }
        let payload = jwt.decode(token, '123');

        if(!payload) {
            return res.status(401).send({message: 'Unauthorized. Auth Header Invalid'});
        }

        req.userId = payload.sub;
        next();
    }

    handleError(err, res) {
        console.error(err);
        res.status(500).send({ error: err });
    }
}
const posts = new PostsController(router);
module.exports = posts.router;