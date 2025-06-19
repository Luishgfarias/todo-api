import z from "zod";

export const schemaNovaTarefa = z.object({
  titulo: z.string().min(1, "O título é obrigatório"),
  descricao: z.string(),
  urgencia: z.enum(["PADRAO", "IMPORTANTE", "URGENTE", "CRITICA"]),
  usuarioId: z.string().uuid("ID de usuário inválido"),
  dataParaConclusao: z.coerce.date().optional(),
});

export const schemaEditarTarefa = z.object({
  titulo: z.string().min(1, "O título é obrigatório").optional(),
  descricao: z.string().optional(),
  urgencia: z.enum(["PADRAO", "IMPORTANTE", "URGENTE", "CRITICA"]).optional(),
  concluida: z.boolean().default(false).optional(),
  dataParaConclusao: z.coerce.date().optional(),
});

export const schemaAlterarConclusaoTarefa = z.object({
  concluida: z.boolean().default(false)
});

export const schemaApagarTarefas = z.object({
  ids: z.array(z.number().min(1, "ID inválido"))
});

export const schemaBuscarTarefasPorTitulo = z.object({
  titulo: z.string().optional(),
  pagina: z.number().min(1, "A página deve ser maior que 0")
});