import { TipoEditarTarefa, TipoTarefa } from "../types/tarefas";
import * as ModelTarefas from "../models/tarefas";

const buscarTarefas = async (
  usuarioId: string,
  titulo: string,
  pagina: number
) => {
  try {
    const itensPorPagina = 10;
    const pularItens = (pagina - 1) * itensPorPagina;

    const { tarefas, quantidadeDeTarefas } = await ModelTarefas.buscarTarefas(
      usuarioId,
      titulo,
      pularItens,
      itensPorPagina
    );
    return {
      resposta: {
        tarefas,
        totalDeTarefas: quantidadeDeTarefas,
        paginaAtual: pagina,
        totalDePaginas: Math.ceil(quantidadeDeTarefas / itensPorPagina),
      },
      status: 200,
    };
  } catch (error) {
    throw error;
  }
};

const buscarTarefaPorId = async (id: number, usuarioId: string) => {
  try {
    const tarefa = await ModelTarefas.buscarTarefaPorId(id, usuarioId);
    if (!tarefa) {
      return {
        resposta: "Tarefa não encontrada",
        status: 404,
      };
    }
    return {
      resposta: tarefa,
      status: 200,
    };
  } catch (error) {
    throw error;
  }
};

const buscarVariasTarefasPorId = async (ids: number[]) => {
  try {
    const tarefas = await ModelTarefas.buscarVariasTarefasPorId(ids);
    return tarefas;
  } catch (error) {
    throw error;
  }
};

const criarTarefa = async (novaTarefa: TipoTarefa) => {
  try {
    const tarefa = await ModelTarefas.criarTarefa(novaTarefa);
    return {
      resposta: "Tarefa adicionada com sucesso!",
      tarefa,
      status: 201,
    };
  } catch (error) {
    throw error;
  }
};

const editarTarefa = async (id: number, dados: TipoEditarTarefa, usuarioId: string) => {
  try {
    const tarefaExiste = await buscarTarefaPorId(id, usuarioId);

    if (tarefaExiste.status === 404) {
      return {
        resposta: tarefaExiste.resposta,
        status: tarefaExiste.status,
      };
    }

    const tarefa = await ModelTarefas.editarTarefa(id, dados);
    return {
      resposta: "Tarefa editada com sucesso!",
      tarefa,
      status: 200,
    };
  } catch (error) {
    throw error;
  }
};

const alterarConclusaoTarefa = async (id: number, concluida: boolean, usuarioId: string) => {
  try {
    const tarefaExiste = await buscarTarefaPorId(id, usuarioId);

    if (tarefaExiste.status === 404) {
      return {
        resposta: tarefaExiste.resposta,
        status: tarefaExiste.status,
      };
    }

    const tarefa = await ModelTarefas.alterarConclusaoTarefa(id, concluida);
    return {
      resposta: "Conclusao alterada com sucesso!",
      tarefa,
      status: 200,
    };
  } catch (error) {
    throw error;
  }
};

const deletarTarefa = async (id: number, usuarioId: string) => {
  try {
    const tarefaExiste = await buscarTarefaPorId(id, usuarioId);

    if (tarefaExiste.status === 404) {
      return {
        resposta: tarefaExiste.resposta,
        status: tarefaExiste.status,
      };
    }

    const tarefa = await ModelTarefas.deletarTarefa(id);
    return {
      resposta: "Tarefa deletada com sucesso!",
      tarefa,
      status: 200,
    };
  } catch (error) {
    throw error;
  }
};

const deletarVariasTarefas = async (ids: number[]) => {
  try {
    const tarefasExistem = await buscarVariasTarefasPorId(ids);

    if (!tarefasExistem || tarefasExistem.length === 0) {
      return {
        resposta: "Nenhuma tarefa encontrada",
        status: 404,
      };
    }

    const tarefas = await ModelTarefas.deletarVariasTarefas(ids);
    return {
      resposta: "Tarefas deletadas com sucesso!",
      tarefas,
      status: 200,
    };
  } catch (error) {
    throw error;
  }
};

export {
  criarTarefa,
  buscarTarefas,
  buscarTarefaPorId,
  editarTarefa,
  alterarConclusaoTarefa,
  deletarTarefa,
  deletarVariasTarefas,
};
