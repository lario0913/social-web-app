const Post = require("../../models/Post")

module.exports = {
    Query: {
        // Use Post model to fetch the post
        async getPosts(){
            try{
                const posts = await Post.find()
                return posts
            }catch(err){
                throw new Error(err)
            }
        }
    }
}