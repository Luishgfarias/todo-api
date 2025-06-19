import { db } from "../libs/prisma";
import { TipoEditarTarefa, TipoTarefa } from "../types/tarefas";

const criarTarefa = async (novaTarefa: TipoTarefa) => {
  const tarefa = await db.tarefa.create({
    data: novaTarefa,
  });
  return tarefa;
};

const buscarTarefas = async (
  usuarioId: string,
  titulo: string,
  pularItens: number,
  itensPorPagina: number
) => {
  const [tarefas, quantidadeDeTarefas] = await Promise.all([
    db.tarefa.findMany({
      where: {
        usuarioId,
        titulo: {
          contains: titulo,
        },
      },
      select: {
        id: true,
        titulo: true,
        concluida: true,
        dataParaConclusao: true,
      },
      skip: pularItens,
      take: itensPorPagina,
    }),
    db.tarefa.count({
      where: {
        usuarioId,
        titulo: {
          contains: titulo,
        },
      },
    }),
  ]);
  return { tarefas, quantidadeDeTarefas };
};

const buscarTarefaPorId = async (id: number, usuarioId: string) => {
  const tarefa = await db.tarefa.findUnique({
    where: { id, usuarioId },
    omit: {
      usuarioId: true,
    },
  });
  return tarefa;
};

const buscarVariasTarefasPorId = async (ids: number[]) => {
  const tarefas = await db.tarefa.findMany({
    where: { id: { in: ids } },
    omit: {
      usuarioId: true,
    },
  });
  return tarefas;
};

const editarTarefa = async (id: number, dados: TipoEditarTarefa) => {
  const tarefa = await db.tarefa.update({
    where: { id },
    omit: {
      usuarioId: true,
    },
    data: dados,
  });
  return tarefa;
};

const alterarConclusaoTarefa = async (id: number, concluida: boolean) => {
  const tarefa = await db.tarefa.update({
    where: { id },
    omit: {
      usuarioId: true,
    },
    data: { concluida },
  });
  return tarefa;
};

const deletarTarefa = async (id: number) => {
  const tarefa = await db.tarefa.delete({
    where: { id },
  });
  return tarefa;
};

const deletarVariasTarefas = async (ids: number[]) => {
  const tarefas = await db.tarefa.deleteMany({
    where: {
      id: {
        in: ids,
      },
    },
  });
  return tarefas.count;
};

export {
  criarTarefa,
  buscarTarefas,
  buscarVariasTarefasPorId,
  buscarTarefaPorId,
  editarTarefa,
  alterarConclusaoTarefa,
  deletarTarefa,
  deletarVariasTarefas,
};
