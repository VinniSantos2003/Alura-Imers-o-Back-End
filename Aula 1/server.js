import express from "express";

const app = express();
app.listen(3000,() =>{
    console.log("The server has been started.");
});

app.get("/",(req,res) => {
    res.status(200).send("Hello world!");
    //
});
app.get("/api",(req,res)=>{
    res.status(200).send("Tem uma API aqui, eu acho");
})