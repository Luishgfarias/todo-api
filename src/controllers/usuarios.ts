import { RequestHandler } from "express";
import {
  atualizarUsuario,
  buscarUsuarioPorId,
  criarUsuario,
  deletarUsuario,
} from "../services/usuario";
import {
  schemaAtualizarUsuario,
  schemaIdUsuario,
  schemaUsuario,
} from "../schemas/usuario";

const buscarPorId: RequestHandler = async (req, res) => {
  const id = req.user!.id;

  const usuarioBD = await buscarUsuarioPorId(id);
  if (!usuarioBD) {
    res.status(500).json({
      resposta: "erro",
    });
  }

  res.status(usuarioBD.status).json({
    resposta: usuarioBD.resposta,
  });
};

const criar: RequestHandler = async (req, res) => {
  const verificarSchema = schemaUsuario.safeParse(req.body);
  if (!verificarSchema.success) {
    res.status(400).json({
      resposta: verificarSchema.error.format(),
    });
    return;
  }

  const novoUsuario = await criarUsuario(verificarSchema.data);

  res.status(novoUsuario.status).json({
    resposta: novoUsuario.resposta,
  });
};

const atualizar: RequestHandler = async (req, res) => {
  const id = req.user!.id;

  const verificarSchema = schemaAtualizarUsuario.safeParse(req.body);
  if (!verificarSchema.success) {
    res.status(400).json({
      resposta: verificarSchema.error.format(),
    });
    return;
  }

  const resultado = await atualizarUsuario(id, verificarSchema.data);

  res.status(resultado.status).json({
    resposta: resultado.resposta,
  });
};

const deletar: RequestHandler = async (req, res) => {
  const { id } = req.query;
  const validarUuid = schemaIdUsuario.safeParse(id);
  if (!validarUuid.success) {
    res.status(400).json({
      resposta: validarUuid.error.format(),
    });
    return;
  }

  const resultado = await deletarUsuario(validarUuid.data);

  res.status(resultado.status).json({
    resposta: resultado.resposta,
  });
};

export { buscarPorId, criar, atualizar, deletar };
