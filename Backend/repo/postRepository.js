const mongoose = require('mongoose');
const Post = require('../models/Post');

class PostRepository {

    async getPosts(author) {
        const posts = await Post.find({author});
        return posts;
    }
    
    async savePost(postData) {
        const postModel = new Post(postData);
        const post = await postModel.save();
        return post;
    }
}

module.exports = new PostRepository();