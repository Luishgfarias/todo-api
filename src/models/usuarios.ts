import e from "express";
import { db } from "../libs/prisma";
import { AtualizarUsuario, NovoUsuario } from "../types/usuario";

const buscarUsuarioPorEmail = async (email: string) => {
  try {
    const usuario = await db.usuario.findUnique({
      where: {
        email,
      },
    });
    return usuario;
  } catch (error) {
    throw error;
  }
};

const buscarUsuarioPorId = async (id: string) => {
  try {
    const usuario = await db.usuario.findUnique({
      where: {
        id,
      },
      omit: {
        senha: true,
      }
    });
    return usuario;
  } catch (error) {
    throw error;
  }
};

const criarUsuario = async (novoUsuario: NovoUsuario, id: string) => {
  try {
    const usuario = await db.usuario.create({
      data: {
        id: id,
        ...novoUsuario
      },
      omit: {
        senha: true,
      }
    });
    return usuario;
  } catch (error) {
    throw error;
  }
};

const atualizarUsuario = async (
  id: string,
  dadosUsuarioAtualizados: Partial<AtualizarUsuario>
) => {
  try {
    const usuario = await db.usuario.update({
      where: { id },
      data: dadosUsuarioAtualizados,
      omit: {
        senha: true,
      }
    });
    return usuario;
  } catch (error) {
    throw error;
  }
};

const deletarUsuario = async (id: string) => {
  try {
    await db.usuario.delete({
      where: { id }
    });
  } catch (error) {
    throw error;
  }
};

export {
  buscarUsuarioPorEmail,
  buscarUsuarioPorId,
  criarUsuario,
  atualizarUsuario,
  deletarUsuario,
};