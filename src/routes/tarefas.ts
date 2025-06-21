import express from "express";
import * as ControllerDeTarefas from "../controllers/tarefas";

const rotasDeTarefas = express.Router();

rotasDeTarefas.get("/", ControllerDeTarefas.buscar);
rotasDeTarefas.get("/:id", ControllerDeTarefas.buscarPorId);
rotasDeTarefas.post("/", ControllerDeTarefas.criar);
rotasDeTarefas.put("/:id", ControllerDeTarefas.editar);
rotasDeTarefas.patch("/:id", ControllerDeTarefas.alterarConclusao);
rotasDeTarefas.delete("/apagar-varias", ControllerDeTarefas.apagarVarios);
rotasDeTarefas.delete("/:id", ControllerDeTarefas.apagar);

export default rotasDeTarefas;