import express from "express";
import 'dotenv/config'
import rotas from "./routes";
import { rotaNaoEncontrada, erroServerInterno } from "./routes/tratadorDeErros";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* Rotas */
app.use(rotas)

/* tratador de erros */
app.use(rotaNaoEncontrada)
app.use(erroServerInterno)

/* Servidor */
app.listen(process.env.PORT, () =>
  console.log("O servidos esta rodando na porta ", process.env.PORT)
);
