const express = require('express');
const router = express.Router();

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

    init() {
        this.router.get('/', this.getPosts);
    }
}
const posts = new PostsController(router);
posts.init();
module.exports = posts.router;