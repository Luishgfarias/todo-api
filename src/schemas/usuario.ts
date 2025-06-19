import z from "zod";

export const schemaUsuario = z.object({
  nome: z
    .string({
      required_error: "O nome é obrigatório",
      invalid_type_error: "O nome deve ser uma string",
    })
    .min(2, "O nome deve ter no minimo 2 caracteres"),
  email: z.string({
    required_error: "O email é obrigatório",
    invalid_type_error: "O email deve ser uma string",
  }).email("O email deve ser um email válido"),
  senha: z.string({
    required_error: "A senha é obrigatória",
    invalid_type_error: "A senha deve ser uma string",
  }).min(6, "A senha deve ter no minimo 6 caracteres"),
});

export const schemaAtualizarUsuario = z.object({
  nome: z
    .string({
      invalid_type_error: "O nome deve ser uma string",
    })
    .min(2, "O nome deve ter no minimo 2 caracteres")
    .optional(),
  email: z
    .string({
      invalid_type_error: "O email deve ser uma string",
    })
    .email("O email deve ser um email válido")
    .optional(),
  senha: z
    .string({
      invalid_type_error: "A senha deve ser uma string",
    })
    .min(6, "A senha deve ter no minimo 6 caracteres")
    .optional(),
});

export const schemaIdUsuario = z.string().uuid();