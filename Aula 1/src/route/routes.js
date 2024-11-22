import express from "express";
import getPosts from "../controller/controller.js";

const routes = (app) =>{
    app.use(express.json());
    app.get("/posts", getPosts);
}

export default routes;
