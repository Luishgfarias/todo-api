import { ErrorRequestHandler, RequestHandler } from "express";

export const rotaNaoEncontrada: RequestHandler = (req, res) => {
    res.status(404).json({erro: "Rota não encontrada"})
}
export const erroServerInterno: ErrorRequestHandler = (err, req, res, next) => {
    console.log(err)
    res.status(500).json({erro: "Ocorreu um erro. Tente novamente mais tarde"})
}