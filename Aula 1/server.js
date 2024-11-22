import express from "express";
import routes from "./src/route/routes.js";

const app = express();
routes(app);
app.listen(3000,() =>{
    console.log("The server has been started.");
});


function searchPostId(id){
    return arrayPosts.findIndex((arrayPosts) => {
        return arrayPosts.id === Number(id);
        //Number(id) converte o "id" que provavelmente vem como texto no parametro da função
    })
};
app.get("/",(req,res) => {
    res.status(200).send("Hello world!");
    //status 200 representa um status de carregamento ok, caso seja "ok", envia uma determinada reposta
    //Site com significado dos status: https://http.cat/
});


// app.get("/api",(req,res)=>{
//     res.status(200).send("Tem uma API aqui, eu acho");
// });

// app.get("/posts/:id",(req,res)=>{
//     const i = searchPostId(req.params.id);
//     res.status(200).json(arrayPosts[i]);
// })