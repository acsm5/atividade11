import dotenv from "dotenv";
import express from "express";      
import { selectUsuarios } from "./bd.js";
const app = express();              
const port = 3000;                 

dotenv.config();


app.get("/", (req, res) => {       
  console.log("Rota GET/ solicitada");
  res.json({
    nome: "Ayala Clara Silva Miranda",     
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

app.listen(port, () => {         
  console.log(`Serviço escutando na porta:  ${port}`);
});