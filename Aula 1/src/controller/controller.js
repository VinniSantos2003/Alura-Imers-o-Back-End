import getAllPosts from "../models/models.js";

export default async function getPosts(req,res) {
    const posts = await getAllPosts();
    res.status(200).json(posts);
}
