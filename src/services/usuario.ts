import { randomUUID } from "crypto";
import * as ModelDeUsuarios from "../models/usuarios";
import { AtualizarUsuario, NovoUsuario } from "../types/usuario";
import * as bcrypt from "bcrypt";

const buscarUsuarioPorEmail = async (email: string) => {
  try {
    const usuario = await ModelDeUsuarios.buscarUsuarioPorEmail(email);
    if (!usuario) {
      return {
        resposta: "Usuário inexistente",
        status: 400,
      };
    }

    return {
      resposta: usuario,
      status: 200,
    };
  } catch (error) {
    throw error;
  }
};

const buscarUsuarioPorId = async (id: string) => {
  try {
    const usuario = await ModelDeUsuarios.buscarUsuarioPorId(id);
    if (!usuario) {
      return {
        resposta: "Usuário inexistente",
        status: 400,
      };
    }

    return {
      resposta: usuario,
      status: 200,
    };
  } catch (error) {
    throw error;
  }
};

const criarUsuario = async (novoUsuario: NovoUsuario) => {
  try {
    const usuarioExiste = await buscarUsuarioPorEmail(novoUsuario.email);
    if (usuarioExiste.status === 200) {
      return {
        resposta: "Já existe um usuário com esse email",
        status: 400,
      };
    }

    // criando a senha criptografada
    const salt = await bcrypt.genSalt(12);
    const senhaCriptografada = await bcrypt.hash(novoUsuario.senha, salt);

    // criando o novo usuário com a senha criptografada
    const usuarioComSenhaCriptografada = {
      ...novoUsuario,
      senha: senhaCriptografada,
    };
    const idDoUsuario = randomUUID();
    const usuario = await ModelDeUsuarios.criarUsuario(
      usuarioComSenhaCriptografada,
      idDoUsuario
    );
    return {
      resposta: {
        usuario,
      },
      status: 201,
    };
  } catch (error) {
    throw error;
  }
};

const atualizarUsuario = async (
  id: string,
  dadosUsuarioAtualizados: Partial<AtualizarUsuario>
) => {
  try {
    const usuarioExiste = await buscarUsuarioPorId(id);
    if (usuarioExiste.status === 400) {
      return {
        resposta: usuarioExiste.resposta,
        status: usuarioExiste.status,
      };
    }
    let usuarioComSenhaCriptografada: Partial<AtualizarUsuario> | undefined;
    if (dadosUsuarioAtualizados.senha) {
      // criando a senha criptografada
      const salt = await bcrypt.genSalt(12);
      const senhaCriptografada = await bcrypt.hash(
        dadosUsuarioAtualizados.senha,
        salt
      );

      // dados do usuário com a senha criptografada
      usuarioComSenhaCriptografada = {
        ...dadosUsuarioAtualizados,
        senha: senhaCriptografada,
      };
    }
    const usuario = await ModelDeUsuarios.atualizarUsuario(
      id,
      usuarioComSenhaCriptografada || dadosUsuarioAtualizados
    );
    return {
      resposta: {
        usuario,
      },
      status: 200,
    };
  } catch (error) {
    throw error;
  }
};

const deletarUsuario = async (id: string) => {
  try {
    const usuarioExiste = await buscarUsuarioPorId(id);
    if (usuarioExiste.status === 400) {
      return {
        resposta: usuarioExiste.resposta,
        status: usuarioExiste.status,
      };
    }

    await ModelDeUsuarios.deletarUsuario(id);
    return {
      resposta: "Usuário deletado com sucesso",
      status: 200,
    };
  } catch (error) {
    throw error;
  }
};

export { buscarUsuarioPorId, criarUsuario, atualizarUsuario, deletarUsuario };
