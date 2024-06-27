import express, { Response, Request, NextFunction } from "express";
import bodyParser from "body-parser";
import { adicionarUsuario } from "./src/services/api/adicionarUsuario";
import { verificarSeUsuarioExiste } from "./src/services/api/verificarSeUsuarioExiste";
import { verificarSenha } from "./src/services/api/verificarSenha";

const app = express();
const PORT = 5500;

app.use((req: Request, res: Response, next: NextFunction) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
});

app.use(bodyParser.json());

app.get("/users/:senha/:nome", async (req: Request, res: Response) => {
  const nomeUsuario = req.params.nome;
  console.log("Nome do usuário:", nomeUsuario);

  try {
    const existeUsuario = await verificarSeUsuarioExiste(nomeUsuario);
    console.log("Usuário existe:", existeUsuario);
    const senhaUsuario = req.params.senha;
    console.log("Senha fornecida:", senhaUsuario);

    const senhaVerificada = await verificarSenha(nomeUsuario, senhaUsuario);
    console.log("Senha verificada:", senhaVerificada);


    if (existeUsuario == true && senhaVerificada == true) {
      res.status(200).json(true);
      return;
    }
    console.log("Usuário não encontrado.");
    res.status(200).json(false);
    return;
  } catch (erro) {
  }
});

app.post("/users", async (req: Request, res: Response) => {
  const { nome, senha } = req.body;
  console.log("Nome:", nome);
  console.log("Senha:", senha);

  try {
    
    const usuarioExiste = await verificarSeUsuarioExiste(nome);
    console.log("Usuário já existe:", usuarioExiste);

    if (usuarioExiste == true) {
      res.json("Esse usuário já existe!");
      return;
    }

    await adicionarUsuario(nome, senha);
    console.log("Usuário adicionado com sucesso!");

    res.status(201).json("Usuário cadastrado com sucesso!");
    return;
  } catch (erro) {
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://127.0.0.1:${PORT}`);
});
