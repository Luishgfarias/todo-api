import { RequestHandler } from "express";
import * as jwt from "jsonwebtoken";
import { decodificarToken } from "../utils/decodificador";

export const verificarToken: RequestHandler = async (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    res.status(401).json({ msg: "Acesso negado!" });
    return;
  }

  try {
    const secret = process.env.SECRET;

    jwt.verify(token, secret as string);
    const tokenDecodificado = decodificarToken(token);

    req.user = tokenDecodificado;

    next();
  } catch (erro) {
    res.status(403).json({ msg: "Acesso negado!" });
  }
};
