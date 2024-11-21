import express from "express";

const arrayPosts = [
    {
        id: -1,
        descricao: "Item buscado não encontrado"
    },
    {
        id: 1,descricao: "Millie",image:"https://placecats.com/millie/300/150"
    },
    {
        id: 2,descricao: "Neo",image:"https://placecats.com/neo/300/200"
    },
    {
        id: 3,descricao: "Millie Neo",image:"https://placecats.com/millie_neo/300/200"
    },
    {
        id: 4,descricao: "Neo banana",image:"https://placecats.com/neo_banana/300/200"
    },
    {
        id: 5,descricao: "Neo 2",image:"https://placecats.com/neo_2/300/200"
    }
];//Array de objetos

const app = express();
app.use(express.json());
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
app.get("/api",(req,res)=>{
    res.status(200).send("Tem uma API aqui, eu acho");
});
app.get("/posts",(req,res)=>{
    res.status(200).json(arrayPosts);
});
app.get("/posts/:id",(req,res)=>{
    const i = searchPostId(req.params.id);
    res.status(200).json(arrayPosts[i]);
})