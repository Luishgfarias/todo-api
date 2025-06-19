import { RequestHandler } from "express";
import {
    autenticacaoDeUsuario
} from "../services/autenticacao";
import { schemaLoginUsuario } from "../schemas/autenticacao";

export const autenticacaoDeUsuarioPorEmailESenha: RequestHandler = async (
  req,
  res
) => {
  const verificarSchema = schemaLoginUsuario.safeParse(req.body);
  if (!verificarSchema.success) {
    res.status(400).json({
      resposta: verificarSchema.error.format(),
    });
    return;
  }
  const usuarioAutenticado = await autenticacaoDeUsuario(verificarSchema.data.email, verificarSchema.data.senha);
  if (!usuarioAutenticado) {
    res.status(500).json({
      resposta: "erro",
    });
    return;
  }

  res.status(usuarioAutenticado.status).json({
    resposta: usuarioAutenticado.resposta,
  });
}