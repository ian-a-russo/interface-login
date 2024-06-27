import { pool } from "../database/bancoDeDados"

const adicionarUsuario = async (nome: string, senha: string) => {
    try {    
        const result = await pool.query(
        "INSERT INTO login (username, senha) VALUES ($1, $2) RETURNING *",
        [nome, senha]

    )} catch(erro) {
    }
}

export { adicionarUsuario };