import conectarAoBanco from "../config/configMongoBD.js";
const connectionDB = await conectarAoBanco(process.env.TOKEN_MONBODB);

export async function getAllPosts(){//Retorna todos os posts
    const db = connectionDB.db("imersao-alura-gatinhos");
    const collections = db.collection("catPosts");
    return collections.find().toArray();
}

export async function createPost(newPost) {//Permite a criação de um post
    const db = connectionDB.db("imersao-alura-gatinhos");
    const collections = db.collection("catPosts");
    return collections.insertOne(newPost);
}
