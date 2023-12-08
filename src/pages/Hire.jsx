
import { useState } from "react";
import ImageUpload from "../components/ImageUpload";
import NavBar from "../components/NavBar";

const endpoint = import.meta.env.VITE_API_URL + "/usuario/cadusuario";


const Hire = () => {

  // Atributos do endereço
  const endereco = {
    cep: "",
    logradouro: "",
    numero: "",
    complemento: "",
    bairro: "",
    cidade: "",
    estado: "",
    pais: "",
  };

  const paciente = {
    nomeP: "",
    tipoSanguineo: "",
    idadeP: "",
    medicamentosOption: false,
    medicamentos: "",
    cpfP: "",
    comorbidadesOption: false,
    comorbidades: "",
    generoP: "",
    sobreP: ""
  }

  // Atributos do usuário
  const usuario = {
    idUsuario: null,
    nome: "",
    idade: "",
    email: "",
    telefone: "",
    endereco: endereco,
    genero: "",
    cpf: "",
    tipo: "PATRONO",
    rg: "",
    profissao: "",
    relacaoPaciente: "",
    paciente: paciente
  };


  // Variaveis para desabilitar os campos de input de endereço
  const boolCamposEndereco = {
    disableLogadouro: false,
    disableBairro: false,
    disableCidade: false,
    disableEstado: false,
    disablePais: false
  }

  const [objUsuario, setUsuario] = useState(usuario);
  const [objPaciente, setPaciente] = useState(paciente);
  const [objEndereco, setEndereco] = useState(endereco);
  const [controleEnderecoInput, setDisableOrEnable] = useState(boolCamposEndereco);

  // Função que redireciona o usuario para a pagina de login apos a conclusão do cadastro
  function redirectLoginPage() {
    window.location.href = "/login"
  }

  const buscaEndereco = (valor) => {
    //console.log(valor)
    let cep = valor.target.value
    if (cep.length !== 8) {
      return false
    } else {
      fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(resposta => resposta.json())
        .then(enderecoApi => {
          //console.log(enderecoApi)
          setEndereco({
            ...objEndereco, logradouro: enderecoApi.logradouro,
            bairro: enderecoApi.bairro,
            cidade: enderecoApi.localidade,
            estado: enderecoApi.uf,
            complemento: enderecoApi.complemento,
            pais: "Brasil",
            cep: cep
          });
          // setDisableOrEnable({...controleEnderecoInput, disableLogadouro: true});

        })
        .then(desabilitaCampos())
    }
  }

  // Função que envia o cadastro para o backend
  const enviaCadastro = () => {
    event.preventDefault();
    objUsuario.endereco = objEndereco;
    objUsuario.paciente = objPaciente;

    console.log(objUsuario)
    //console.log(JSON.stringify(objUsuario));
    fetch(endpoint, {
      method: 'post',
      body: JSON.stringify(objUsuario),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },

    })

      .then(valorRetorno => valorRetorno.json())
      .then(respostaAPi => {
        
        if (respostaAPi.erro === null) {
          console.log('Sucesso: => ', respostaAPi)
          // Redireciona o usuario para tela de login
          redirectLoginPage();
          window.confirm("Cadastro realizado com sucesso! \nAguarde o email com o login e senha\n para acessar sua conta! Deseja ser redirecionado agora?")

        } else {
          console.log(respostaAPi)
          alert("Houve algum erro \n" + respostaAPi.erro + " ao cadastrar\rRecaregue a pagina!")
        }
      })
      .catch(erro => {
        alert("Houve algum erro interno ao cadastrar\rRecaregue a pagina!")
        console.error("O erro foi: ", erro.message);

      });
  };



  const desabilitaCampos = () => {

    /* A variavel novoControleEnderecoInput vira um objeto permitindo com que eu traga os metodos e atributos do objeto controleEnderecoInput 
    */
    const novoControleEnderecoInput = { ...controleEnderecoInput };

    if (objEndereco.logradouro !== "") {
      novoControleEnderecoInput.disableLogadouro = true;
    }
    if (objEndereco.bairro !== "") {
      novoControleEnderecoInput.disableBairro = true;
    }
    if (objEndereco.cidade !== "") {
      novoControleEnderecoInput.disableCidade = true;
    }
    if (objEndereco.estado !== "") {
      novoControleEnderecoInput.disableEstado = true;
    }
    setDisableOrEnable(novoControleEnderecoInput);
    console.log(JSON.stringify(controleEnderecoInput))
  }


  return (
    <div>
      <NavBar />
      <h1 className="title_main">Patrono, crie sua conta WiseCare!</h1>
      <div className="register_care">
        <h3>REGISTRAR</h3>
        <div className="imgUp">
          <ImageUpload />
        </div>

        <form onSubmit={enviaCadastro} method="post" className="form_container">

          <label htmlFor="nome">Nome Completo:*</label>
          <input type="text" id="nome" name="nome" placeholder="Seu nome" required value={objUsuario.nome}
            onChange={(evento) => setUsuario({ ...objUsuario, nome: evento.target.value })} />

          <label htmlFor="email">E-mail:*</label>
          <input type="email" name="email" placeholder="Seu e-mail" required
            value={objUsuario.email}
            onChange={(evento) => setUsuario({ ...objUsuario, email: evento.target.value })} />

          <label htmlFor="cpf">CPF:*</label>
          <input type="text" name="cpf" maxLength={14} placeholder="Seu CPF" required
            value={objUsuario.cpf}
            onChange={(evento) => setUsuario({ ...objUsuario, cpf: evento.target.value })} />

          <label htmlFor="rg">RG:*</label>
          <input type="text" name="rg" placeholder="Seu RG" required
            value={objUsuario.rg}
            onChange={(evento) => setUsuario({ ...objUsuario, rg: evento.target.value })} />


          <label htmlFor="telefone">Telefone:*</label>
          <input type="tel" name="telefone" maxLength={11} placeholder="Seu nº de celular" required
            value={objUsuario.telefone}
            onChange={(evento) => setUsuario({ ...objUsuario, telefone: evento.target.value })} />

          <label htmlFor="cep">CEP:*</label>
          <input type="text" name="cep" maxLength={8} placeholder="Seu CEP" onChange={buscaEndereco}
            required
          />


          <label htmlFor="rua">Rua/Avenida:*</label>
          <input type="text" disabled={controleEnderecoInput.disableLogadouro} name="logradouro"
            placeholder="Nome da sua rua" value={objEndereco.logradouro}
            onChange={(evento) => setEndereco({ ...objEndereco, logradouro: evento.target.value })}
            required />

          <label htmlFor="numero">Número Residencial/Comercial:*</label>
          <input type="text" name="numero" value={objEndereco.numero}
            onChange={(evento) => setEndereco({ ...objEndereco, numero: evento.target.value })}
            placeholder="Número da sua residência" required />

          <label htmlFor="complemento">Complemento:</label>
          <input type="text" name="complemento" value={objEndereco.complemento}
            onChange={(evento) => setEndereco({ ...objEndereco, complemento: evento.target.value })}
            placeholder="Insira um complemento" />

          <label htmlFor="bairro">Bairro:*</label>
          <input type="text" disabled={controleEnderecoInput.disableBairro} name="bairro" value={objEndereco.bairro}
            onChange={(evento) => setEndereco({ ...objEndereco, bairro: evento.target.value })}
            placeholder="Nome do seu bairro" required />

          <label htmlFor="cidade">Cidade:*</label>
          <input type="text" disabled={controleEnderecoInput.disableCidade} name="cidade" value={objEndereco.cidade}
            onChange={(evento) => setEndereco({ ...objEndereco, cidade: evento.target.value })}
            placeholder="Nome da sua cidade" required />

          <label htmlFor="estado">Estado/Província:*</label>
          <input type="text" disabled={controleEnderecoInput.disableEstado} name="estado" value={objEndereco.estado}
            onChange={(evento) => setEndereco({ ...objEndereco, estado: evento.target.value })}
            placeholder="Nome do estado onde reside" required />

          <label htmlFor="pais">País:*</label>
          <input type="text" disabled={controleEnderecoInput.disablePais} name="pais" value={objEndereco.pais}
            onChange={(evento) => setEndereco({ ...objEndereco, pais: evento.target.value })}
            placeholder="Seu país" required />

          <label htmlFor="idade">Data de nascimento:*</label>
          <input type="date" name="idade" required
            value={objUsuario.idade}
            onChange={(evento) => setUsuario({ ...objUsuario, idade: evento.target.value })} />

          <label htmlFor="profissao">Profissão:</label>
          <input type="text" placeholder="Diga com o que trabalha , EX: Engenheiro" name="profissao" value={objUsuario.profissao}
            onChange={(evento) => setUsuario({ ...objUsuario, profissao: evento.target.value })} />

          <label htmlFor="relacao">Relação com o paciente:*</label>
          <select id="relacaoId" name="relacao" required
            value={objUsuario.relacaoPaciente}
            onChange={(evento) => setUsuario({ ...objUsuario, relacaoPaciente: evento.target.value })} >

            <option value="">-</option>
            <option value="FILHO(A)">Filho(a)</option>
            <option value="IRMÃO(A)">Irmão ou irmã</option>
            <option value="PRIMO(A)">Primo(a)</option>
            <option value="SOBRINHO(A)">Sobrinho(a)</option>
            <option value="AMIGO(A)">Amigo(a)</option>
            <option value="NETO(A)">Neto(a)</option>
            <option value="OUTRO">Outro</option>
          </select>

          <label htmlFor="genero">Gênero:*</label>
          <select id="genero" name="genero" required
            value={objUsuario.genero}
            onChange={(evento) => setUsuario({ ...objUsuario, genero: evento.target.value })}>
            <option value="">-</option>
            <option value="F">Feminino</option>
            <option value="M">Masculino</option>
            <option value="O">Outro</option>
          </select>

          <br>
          </br>

          <h3>Dados Paciente</h3>

          <label htmlFor="nomeP">Nome do Paciente:*</label>
          <input type="text" id="nomeP" name="nomeP" placeholder="DIgite o nome do paciente" required value={objPaciente.nome}
            onChange={(evento) => setPaciente({ ...objPaciente, nomeP: evento.target.value })} />

          <label htmlFor="idadeP">Data de nascimento do Paciente:*</label>
          <input type="date" name="idadeP" required
            value={objUsuario.idadeP}
            onChange={(evento) => setPaciente({ ...objPaciente, idadeP: evento.target.value })} />

          <label htmlFor="tipoSanguineo">Tipo sanguíneo do Paciente:*</label>
          <select id="tipoSang" name="tipoSanguineo" required
            value={objPaciente.tipoSanguineo}
            onChange={(evento) => setPaciente({ ...objPaciente, tipoSanguineo: evento.target.value })}>
            <option value="">-</option>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="O">O</option>
            <option value="AB">AB</option>
          </select>

          <label htmlFor="cpfP">CPF do Paciente:*</label>
          <input type="text" name="cpfP" maxLength={14} placeholder="Digite o CPF Do paciente" required
            value={objPaciente.cpfP}
            onChange={(evento) => setPaciente({ ...objPaciente, cpfP: evento.target.value })} />


<label htmlFor="genero">Gênero Paciente:*</label>
          <select id="generoP" name="generoP" required
            value={objPaciente.generoP}
            onChange={(evento) => setPaciente({ ...objPaciente, generoP: evento.target.value })}>
            <option value="">-</option>
            <option value="F">Feminino</option>
            <option value="M">Masculino</option>
            <option value="O">Outro</option>
          </select>

          <label htmlFor="medicamentosOption">Toma medicamentos ?*</label>
          <select id="medicamentosOption" name="medicamentosOption" required
            value={objPaciente.medicamentosOption}
            onChange={(evento) => setPaciente({ ...objPaciente, medicamentosOption: evento.target.value })}>
            <option value="">-</option>
            <option value="true">Sim</option>
            <option value="false">Não</option>
          </select>

          {objPaciente.medicamentosOption === "true" && (

            <>
              <label htmlFor="medicamentos">Quais medicamentos o paciente toma:*</label>
              <input type="text" name="medicamentos" maxLength={14} placeholder="Digite o nome dos medicamentos" required
                value={objPaciente.medicamentos}
                onChange={(evento) => setPaciente({ ...objPaciente, medicamentos: evento.target.value })} />
            </>

          )}

          <label htmlFor="comorbidadOption">O paciente possui alguma comorbidade ?*</label>
          <select id="comorbidadOption" name="comorbidadOption" required
            value={objPaciente.comorbidadesOption}
            onChange={(evento) => setPaciente({ ...objPaciente, comorbidadesOption: evento.target.value })}>
            <option value="">-</option>
            <option value="true">Sim</option>
            <option value="false">Não</option>
          </select>

          {objPaciente.comorbidadesOption === "true" && (

            <>
              <label htmlFor="comorbidades">Quais comormidades/doenças o mesmo possui:*</label>
              <input type="text" name="comorbidades" maxLength={14} placeholder="Digite o nome dos medicamentos" required
                value={objPaciente.comorbidades}
                onChange={(evento) => setPaciente({ ...objPaciente, comorbidades: evento.target.value })} />
            </>

          )}

          <label htmlFor="sobreP">Descreva sobre o paciente:</label>
          <textarea name="sobreP" 
          value={objPaciente.sobreP}
          onChange={(evento) => setPaciente({ ...objPaciente, sobreP: evento.target.value })}
          cols="30" rows="10" placeholder="Conte nos mais sobre o paciente e quais cuidados o mesmo precisa ter"></textarea>

          <input type="submit" value="Registrar" className="buttons" />
        </form>
      </div>
    </div>
  )
}

export default Hire