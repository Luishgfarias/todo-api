import z from "zod";
import { schemaEditarTarefa, schemaNovaTarefa } from "../schemas/tarefas";

export type TipoTarefa = z.infer<typeof schemaNovaTarefa>;
export type TipoEditarTarefa = z.infer<typeof schemaEditarTarefa>;