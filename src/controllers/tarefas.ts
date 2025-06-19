import { RequestHandler } from "express";
import {
  schemaAlterarConclusaoTarefa,
  schemaApagarTarefas,
  schemaBuscarTarefasPorTitulo,
  schemaEditarTarefa,
  schemaNovaTarefa,
} from "../schemas/tarefas";
import {
  alterarConclusaoTarefa,
  buscarTarefaPorId,
  buscarTarefas,
  criarTarefa,
  deletarTarefa,
  deletarVariasTarefas,
  editarTarefa,
} from "../services/tarefas";

const buscar: RequestHandler = async (req, res) => {
  const query = {
    pagina: Number(req.query.pagina),
    titulo: req.query.titulo,
  };
  const validarSchemaBuscarTarefasPorTitulo =
    schemaBuscarTarefasPorTitulo.safeParse(query);

  if (!validarSchemaBuscarTarefasPorTitulo.success) {
    res.status(400).json({
      erro: validarSchemaBuscarTarefasPorTitulo.error.format(),
    });
    return;
  }

  const usuarioId = req.user!.id;

  const resultado = await buscarTarefas(
    usuarioId,
    validarSchemaBuscarTarefasPorTitulo.data.titulo || "",
    validarSchemaBuscarTarefasPorTitulo.data.pagina
  );

  res.status(resultado.status).json({
    resposta: resultado.resposta,
  });
};

const buscarPorId: RequestHandler = async (req, res) => {
  const { id } = req.params;
  const usuarioId = req.user!.id;

  const resultado = await buscarTarefaPorId(+id, usuarioId);

  res.status(resultado.status).json({
    resposta: resultado.resposta,
  });
};

const criar: RequestHandler = async (req, res) => {
  const bodyNovaTarefa = req.body;
  const usuarioId = req.user!.id;

  const novaTarefa = { ...bodyNovaTarefa, usuarioId };

  const validarSchemaNovaTarefa = schemaNovaTarefa.safeParse(novaTarefa);

  if (!validarSchemaNovaTarefa.success) {
    res.status(400).json({
      erro: validarSchemaNovaTarefa.error.format(),
    });
    return;
  }

  const resultado = await criarTarefa(validarSchemaNovaTarefa.data);

  res.status(resultado.status).json({
    resposta: resultado.resposta,
    tarefa: resultado.tarefa,
  });
};

const editar: RequestHandler = async (req, res) => {
  const { id } = req.params;
  const body = req.body;

  if (isNaN(Number(id))) {
    res.status(400).json({
      resposta: "ID inválido",
    });
    return;
  }

  const validarSchemaEditarTarefa = schemaEditarTarefa.safeParse(body);
  const usuarioId = req.user!.id;

  if (!validarSchemaEditarTarefa.success) {
    res.status(400).json({
      erro: validarSchemaEditarTarefa.error.format(),
    });
    return;
  }

  const resultado = await editarTarefa(
    Number(id),
    validarSchemaEditarTarefa.data,
    usuarioId
  );

  res.status(resultado.status).json({
    resposta: resultado.resposta,
    tarefa: resultado.tarefa,
  });
};

const alterarConclusao: RequestHandler = async (req, res) => {
  const { id } = req.params;
  const usuarioId = req.user!.id;
  const body = req.body;

  if (isNaN(Number(id))) {
    res.status(400).json({
      resposta: "ID inválido",
    });
    return;
  }

  const validarSchemaAlterarConclusaoTarefa =
    schemaAlterarConclusaoTarefa.safeParse(body);

  if (!validarSchemaAlterarConclusaoTarefa.success) {
    res.status(400).json({
      erro: validarSchemaAlterarConclusaoTarefa.error.format(),
    });
    return;
  }

  const resultado = await alterarConclusaoTarefa(
    Number(id),
    validarSchemaAlterarConclusaoTarefa.data.concluida,
    usuarioId
  );

  res.status(resultado.status).json({
    resposta: resultado.resposta,
    tarefa: resultado.tarefa,
  });
};

const apagar: RequestHandler = async (req, res) => {
  const usuarioId = req.user!.id;
  const { id } = req.query;

  if (isNaN(Number(id))) {
    res.status(400).json({
      resposta: "ID inválido",
    });
    return;
  }

  const resultado = await deletarTarefa(Number(id), usuarioId);

  res.status(resultado.status).json({
    resposta: resultado.resposta,
  });
};

const apagarVarios: RequestHandler = async (req, res) => {
  const { ids } = req.body;

  const validarSchemaApagarTarefas = schemaApagarTarefas.safeParse({ ids });
  if (!validarSchemaApagarTarefas.success) {
    res.status(400).json({
      erro: validarSchemaApagarTarefas.error.format(),
    });
    return;
  }

  const resultado = await deletarVariasTarefas(
    validarSchemaApagarTarefas.data.ids
  );
  res.status(resultado.status).json({
    resposta: resultado.resposta,
  });
};

export {
  buscarPorId,
  buscar,
  criar,
  editar,
  alterarConclusao,
  apagar,
  apagarVarios,
};
