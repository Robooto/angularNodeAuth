const mongoose = require('mongoose');
const Post = require('../models/Post');

class PostRepository {
    
    async savePost(postData) {
        const postModel = new Post(postData);
        const post = await postModel.save();
        return post;
    }
}

module.exports = new PostRepository();