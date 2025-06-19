import express from "express";
import rotasDeTarefas from "./tarefas";
import rotasDeUsuario from "./usuario";
import { randomUUID } from "crypto";
import { verificarToken } from "../middlewares/autorizacao";
import rotasAutenticacao from "./autenticacao";

const rotas = express.Router();

// Rotas de Tarefas
rotas.use("/tarefas", verificarToken, rotasDeTarefas);

// Rotas de Usuários
rotas.use("/usuario", rotasDeUsuario);

// Rota de autenticação
rotas.use("/", rotasAutenticacao);

rotas.get("/", (req, res) => {
  res.send("Servidor OK!" + randomUUID());
});

export default rotas;