import conectarAoBanco from "../config/configMongoBD.js";
const connectionDB = await conectarAoBanco(process.env.TOKEN_MONBODB);

export default async function getAllPosts(){
    const db = connectionDB.db("imersao-alura-gatinhos");
    const collections = db.collection("catPosts")
    return collections.find().toArray();
}
