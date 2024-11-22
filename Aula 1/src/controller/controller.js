import {getAllPosts,createPost} from "../models/models.js";
import fs from "fs";
export async function getPosts(req,res) {
    const posts = await getAllPosts();
    res.status(200).json(posts);
}

export async function postSomething(req,res){
    const newPost = req.body;
    try{
        const postCreated = await createPost(newPost);
        res.status(200).json(postCreated);
    }catch(e){
        console.error(e);
        res.status(500).json({"Error":"Resquest Failed"})
    }
}

export async function uploadImage(req,res){

    const newPost = {
        descricao: "",
        imgURL: req.file.originalname,
        atl: ""
    }
    

    try{
        const postCreated = await createPost(newPost);
        const updatedImage = `uploads/${postCreated.insertedId}.png`
        fs.renameSync(req.file.path,updatedImage);
        res.status(200).json(postCreated);
    }catch(e){
        console.error(e);
        res.status(500).json({"Error":"Resquest Failed"})
    }
}