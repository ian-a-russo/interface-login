import { pool } from "../database/bancoDeDados";

const verificarSeUsuarioExiste = async (nome: string) => {
  try {
    const { rows } = await pool.query("SELECT * FROM login WHERE username = $1", 
      [nome]
    );
    console.log(rows.length > 0);
    return rows.length > 0;
  } catch (erro) {
  }
};

export { verificarSeUsuarioExiste };
