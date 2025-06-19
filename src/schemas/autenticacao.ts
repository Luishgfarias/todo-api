import z from "zod";

export const schemaLoginUsuario = z.object({
  email: z.string({
    required_error: "O email é obrigatório",
    invalid_type_error: "O email deve ser uma string",
  }).email("O email deve ser um email válido"),
  senha: z.string({
    required_error: "A senha é obrigatória",
    invalid_type_error: "A senha deve ser uma string",
  }).min(6, "A senha deve ter no minimo 6 caracteres"),
});

