
import 'express';
import { TipoUsuario } from '../usuario';

declare module 'express-serve-static-core' {
  interface Request {
    user?: TipoUsuario;
  }
}