import express from "express";
import multer from "multer";
import {getPosts,postSomething,uploadImage} from "../controller/controller.js";

const storage = multer.diskStorage({//Trecho de código necessário para funcionar no windows
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
})
const multerUpload = multer({ dest: "./uploads" , storage})

const routes = (app) =>{
    app.use(express.json());
    app.get("/posts", getPosts);//.get recebe
    app.post("/posts",postSomething);
    app.post("/upload",multerUpload.single("imagem"), uploadImage)//.post envia
}

export default routes;
