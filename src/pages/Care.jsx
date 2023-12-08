import { useState } from "react";

import ImageUpload from "../components/ImageUpload";
import NavBar from "../components/NavBar";

const endpoint = import.meta.env.VITE_API_URL + "/usuario/cadusuario";


const Care = () => {


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

  // Atributos do usuário
  const usuario = {
    idUsuario: null,
    nome: "",
    idade: "",
    email: "",
    telefone: "",
    endereco: endereco,
    genero: "",
    status: "",
    cpf: "",
    sobre: "",
    tipoSanguineo: "",
    tipo: "CUIDADOR",
    rg: "",
    certificado: "",
    corenOption: false,
    docCoren: "",
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
  const [objEndereco, setEndereco] = useState(endereco);
  const [controleEnderecoInput, setDisableOrEnable] = useState(boolCamposEndereco);


  // função que captura uma imagem e converte para base64
  const capturaCertificado = (event) => {
    const certificado = event.target.files[0];

    console.log(certificado);

    // Convert the file to a Base64 string
    const reader = new FileReader();
    reader.readAsDataURL(certificado);
    reader.onloadend = () => {
      const base64String = reader.result.replace('data:', '').replace(/^.+,/, '');
      setUsuario({ ...objUsuario, certificado: base64String });
    }

  }

  // Função que redireciona o usuario para a pagina de login apos a conclusão do cadastro
  function Login() {
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

  // Função que envia o cadastro para o backend
  const enviaCadastro = () => {
    objUsuario.endereco = objEndereco;

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
        if (respostaAPi.status === "OK") {
          // limpa o timeout

          console.log('Sucesso: => ', respostaAPi)
          // Redireciona o usuario para tela de login
          Login();
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



console.log(JSON.stringify(objUsuario))


  // Randeriza a pagina HTML do componente
  return (


    <div>
      <NavBar />
      <h1 className="title_main">Cuidador, crie sua conta WiseCare!</h1>
      <div className="register_care">
        <h3>REGISTRAR</h3>
        <div className="imgUp">
          <ImageUpload />
        </div>


        {/* <form action=""  method="post" className="form_container"> */}
        <form onSubmit={enviaCadastro} className="form_container">

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

          <label htmlFor="genero">Gênero:*</label>
          <select id="genero" name="genero" required
            value={objUsuario.genero}
            onChange={(evento) => setUsuario({ ...objUsuario, genero: evento.target.value })}>
            <option value="">-</option>
            <option value="F">Feminino</option>
            <option value="M">Masculino</option>
            <option value="O">Outro</option>
          </select>

          <label htmlFor="tipoSanguineo">Tipo sanguíneo:*</label>
          <select id="tipoSang" name="tipoSanguineo" required
            value={objUsuario.tipoSanguineo}
            onChange={(evento) => setUsuario({ ...objUsuario, tipoSanguineo: evento.target.value })}>
            <option value="">-</option>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="O">O</option>
            <option value="AB">AB</option>
          </select>

          <label htmlFor="genero">Possui coren ativo ?: </label>
          <select id="corenOption" name="corenOption" required
            value={objUsuario.corenOption}
            onChange={(evento) => setUsuario({ ...objUsuario, corenOption: evento.target.value })}>
            <option value="">-</option>
            <option value="true">Sim</option>
            <option value="false">Não</option>
          </select>

          {/* o campo de input abaixo so aparece se o coren for inserido */}
          {objUsuario.corenOption === "true" && (
            <>
              <label htmlFor="docCoren">Digite o numero do coren:*</label>
              <input type="text" name="docCoren" value={objUsuario.docCoren}
                onChange={(evento) => setUsuario({ ...objUsuario, docCoren: evento.target.value })}
                placeholder="Digite seu coren" />
            </>
          )}

          <label htmlFor="status">Status atual:*</label>
          <select id="status" name="status" required
            value={objUsuario.status}
            onChange={(evento) => setUsuario({ ...objUsuario, status: evento.target.value })}>
            <option value="">-</option>
            <option value="disponivel">Disponível</option>
            <option value="ocupado">Ocupado</option>
          </select>

          <label htmlFor="arquivo">Anexar Certificados:</label>
          <input type="file" id="arquivo" name="arquivo" onChange={capturaCertificado} />

          <label htmlFor="sobre">Relate suas experiencias anteriores na profissão</label>
          <textarea name="sobre" cols="30" rows="10" placeholder="Escreva sobre os lugares onde trabalhou, o que aprendeu, o que gostou e o que não gostou."
            value={objUsuario.sobre}
            onChange={(evento) => setUsuario({ ...objUsuario, sobre: evento.target.value })} ></textarea>

          <input type="submit" value="Registrar" className="buttons" />

        </form>
      </div>
    </div>
  )

}
export default Care