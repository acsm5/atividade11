import dotenv from "dotenv";
import express from "express";      // Requisição do pacote do express
import { selectUsuarios } from "./bd.js";
const app = express();              // Instancia o Express
const port = 3000;                  // Define a porta

dotenv.config();

app.get("/", (req, res) => {        // Cria a rota da raiz do projeto
  console.log("Rota GET/ solicitada");
  res.json({
    nome: "Ayala Clara Silva Miranda",      // Substitua pelo seu nome
  });
});

app.get("/usuarios", async (req, res) => {
  console.log("Rota GET/usuarios solicitada");
  try {
    const usuarios = await selectUsuarios();
    res.json(usuarios);
  } catch (error) {
    res.status(error.status || 500).json({ message: error.message || "Erro!" });
  }
});

app.listen(port, () => {            // Um socket para "escutar" as requisições
  console.log(`Serviço escutando na porta:  ${port}`);
});