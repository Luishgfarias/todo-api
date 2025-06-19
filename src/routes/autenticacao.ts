import express from "express";
import { autenticacaoDeUsuarioPorEmailESenha } from "../controllers/autenticacao";

const rotasAutenticacao = express.Router();

rotasAutenticacao.post("/login", autenticacaoDeUsuarioPorEmailESenha);

export default rotasAutenticacao;
