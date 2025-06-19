import * as ModelDeUsuarios from "../models/usuarios";
import * as jwt from "jsonwebtoken";
import * as bcrypt from "bcrypt";

const compararSenhas = async (senha: string, senhaHash: string) => {
  return await bcrypt.compare(senha, senhaHash);
};

export const autenticacaoDeUsuario = async (email: string, senha: string) => {
  try {
    const usuario = await ModelDeUsuarios.buscarUsuarioPorEmail(email);
    if (!usuario) {
      return {
        resposta: "Email ou senha inválidos",
        status: 401,
      };
    }

    const senhaValida = await compararSenhas(senha, usuario.senha);
    if (!senhaValida) {
      return {
        resposta: "Email ou senha inválidos",
        status: 401,
      };
    }

    const token = jwt.sign(
      {
        id: usuario.id,
        email: usuario.email,
      },
      process.env.SECRET as jwt.Secret
    );
    return {
      resposta: {
        usuario: {
          id: usuario.id,
          nome: usuario.nome,
          email: usuario.email,
        },
        token,
      },
      status: 200,
    };
  } catch (error) {
    throw error;
  }
};