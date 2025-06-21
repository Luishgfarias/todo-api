import express from "express";
import 'dotenv/config'
import rotas from "./routes";
import { rotaNaoEncontrada, erroServerInterno } from "./routes/tratadorDeErros";
import swaggerUi from "swagger-ui-express";
import swaggerDocs from "./libs/swagger.json"
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* Documentação com swagger */
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))

/* Rotas */
app.use(rotas)

/* tratador de erros */
app.use(rotaNaoEncontrada)
app.use(erroServerInterno)

/* Servidor */
app.listen(process.env.PORT, () =>
  console.log("O servidos esta rodando na porta ", process.env.PORT)
);
