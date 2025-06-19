import * as jwt from "jsonwebtoken";

export const decodificarToken = (token: string) => {
  try {
    const decoded = jwt.verify(token, process.env.SECRET!) as {
      id: string;
      email: string;
    };
    return decoded;
  } catch (error) {
    throw error;
  }
};
