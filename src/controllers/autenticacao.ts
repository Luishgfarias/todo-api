import { RequestHandler } from "express";
import { autenticacaoDeUsuario } from "../services/autenticacao";
import { schemaLoginUsuario } from "../schemas/autenticacao";

export const autenticacaoDeUsuarioPorEmailESenha: RequestHandler = async (
  req,
  res
) => {
  const verificarSchema = schemaLoginUsuario.safeParse(req.body);
  if (!verificarSchema.success) {
    res.status(400).json({
      erro: verificarSchema.error.format(),
    });
    return;
  }
  const usuarioAutenticado = await autenticacaoDeUsuario(
    verificarSchema.data.email,
    verificarSchema.data.senha
  );

  res.status(usuarioAutenticado.status).json(usuarioAutenticado.resposta);
};
