import { buscarSeletor, buscarInput, buscarModal } from "./services/api/domUtils";
import { 
  getUser, 
  addUser, 
  verificarSeSenhaCorresponde, 
  verificarNovoUsuario 
} from "./services/api/clientHTTP";

const usuarioLogin = buscarInput("#nome-usuario");
const senhaLogin = buscarInput("#senha-usuario");
const cadastrar = buscarSeletor("#cadastrar");
const dialogCadastrar = buscarModal("#cadastrar-novo-usuario");
const confirmarLogin = buscarSeletor("#botao-enviar");
const confirmarNovoUsuario = buscarSeletor("#confirmar-novo-usuario");
const fecharDialog = buscarSeletor("#fechar-dialog");
const carregamento = buscarModal("#carregamento");

confirmarLogin?.addEventListener("click", async () => {
  let usuario = usuarioLogin.value;
  let senha = senhaLogin.value;  
  const users = await getUser(usuario, senha);
  if(users == true) {
    carregamento.style.display = 'flex';
    usuario = usuarioLogin.value = "";
    senha = senhaLogin.value = "";      
        window.location.href = 'https://www.mercadolivre.com.br/';


    return;
  }
  return alert("Usuário e/ou senha incorreta!");
})

cadastrar?.addEventListener("click", () => {
  dialogCadastrar.style.display = 'flex';
});

fecharDialog?.addEventListener("click", () => {
  dialogCadastrar.style.display = 'none';
});

confirmarNovoUsuario?.addEventListener("click", async () => {
  let novoUsuario = buscarInput("#novo-usuario").value;
  let novaSenha = buscarInput("#nova-senha").value;
  let repeteSenha = buscarInput("#repete-senha").value;
  const verificarRepeteSenha = verificarSeSenhaCorresponde(repeteSenha, novaSenha);
  const users = await getUser(novoUsuario, novaSenha)
  console.log(users);
  if(users == false && verificarRepeteSenha == true) {
    await addUser(novoUsuario, novaSenha);
    dialogCadastrar.style.display = 'none';
    alert("Usuário cadastrado com sucesso!");
    novoUsuario = buscarInput("#novo-usuario").value = "";
    novaSenha = buscarInput("#nova-senha").value = "";
    repeteSenha = buscarInput("#repete-senha").value = "";
    return;
  }
  return verificarNovoUsuario(repeteSenha, novaSenha, novoUsuario)
})