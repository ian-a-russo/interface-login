const getUser = async (nome: string, senha: string) => {

  try {
    const response = await fetch(`http://localhost:5500/users/${senha}/${nome}`);
    if (!response.ok) {
        throw new Error("Erro na requisição");
    }

    const usuario = await response.json();
    return usuario;
  } catch(erro) {}
};

const addUser = async (nome: string, senha: string) => {
    try {
      const response = await fetch("http://localhost:5500/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ nome, senha }),
      });
  
      if (!response.ok) {
        throw new Error("Erro na requisição");
      }
      const newUser = await response.json();
    } catch (error) {
      console.error("Erro ao adicionar usuário:", error);
    }
  };

const verificarSeSenhaCorresponde = (repeteSenha: string, senha: string) => {
  if(repeteSenha == senha){
    return true;
  }
  return false;
}

const verificarNovoUsuario = async (
  repeteSenha: string,
  senha: string,
  nome: string,
) => {
  const users = await getUser(nome, senha);
  if(users == true) {
    return alert("Usuário indisponível!")
  }
  if(verificarSeSenhaCorresponde(repeteSenha, senha) == false) {
    return alert("As senhas não correspondem!")
  }
}

export { getUser, addUser, verificarSeSenhaCorresponde, verificarNovoUsuario };
