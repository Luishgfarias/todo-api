import z from "zod";
import { schemaUsuario, schemaAtualizarUsuario } from "../schemas/usuario";

export type TipoUsuario = {
    id: string;
    email: string;
};
export type NovoUsuario = z.infer<typeof schemaUsuario>;
export type AtualizarUsuario = z.infer<typeof schemaAtualizarUsuario>;