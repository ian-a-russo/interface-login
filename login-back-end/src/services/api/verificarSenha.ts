import { pool } from "../database/bancoDeDados";

const verificarSenha = async (nome: string, senha: string) => {
    try {
        const { rows } = await pool.query(
          "SELECT senha FROM login WHERE username = $1",
          [nome]
        );
        const resultado = rows[0].senha == senha

        if (resultado == true) {
          console.log("Senha correta");
          return resultado;
        } 
        console.log("Senha incorreta");
        return resultado;

      } catch (erro) {
      }
    };

export { verificarSenha }