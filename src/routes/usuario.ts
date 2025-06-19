import express from "express";
import * as ControllerDeUsuario from "../controllers/usuarios";
import { verificarToken } from "../middlewares/autorizacao";

const rotasDeUsuario = express.Router();

rotasDeUsuario.get("/", verificarToken, ControllerDeUsuario.buscarPorId);
rotasDeUsuario.post("/", ControllerDeUsuario.criar);
rotasDeUsuario.put("/", verificarToken, ControllerDeUsuario.atualizar);
rotasDeUsuario.delete("/", verificarToken, ControllerDeUsuario.deletar);

export default rotasDeUsuario;