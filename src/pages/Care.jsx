import { useState } from "react";
import ImageUpload from "../components/ImageUpload";
import NavBar from "../components/NavBar";

const endpoint = import.meta.env.VITE_API_URL +  "/usuario/addusuario";


const Care = () => {


//console.log(url)


  // Atributos do usuário
  const usuario = {
    idUsuario: null,
    nome: "",
    email: "",
    telefone: "",
    cep: "",
    logradouro: "",
    numero: "",
    complemento: "",
    bairro: "",
    cidade: "",
    estado: "",
    pais: "",
    idade: "",
    genero: "",
    status: "",
    sobre: "",
    tipo: "CUIDADOR",
  };

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




  // const valorDigitado = (eventKeyUp) => {
  //   console.log(eventKeyUp)
  //   setUsuario({ ...objUsuario, [eventKeyUp.target.name]: eventKeyUp.target.value })
  // };



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
            pais: "Brasil"
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


    const enviaCadastro = () => {
      //event.preventDefault(); // Previne o comportamento padrão de recarregar a página
      console.log(objUsuario);
      fetch(endpoint, {
        method: 'post',
        body: JSON.stringify(objUsuario),
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      })
        .then(valorRetorno => valorRetorno.json())
        .then(valorConvertido => { console.log(valorConvertido) })
    };

    //console.log("\n o valor e:", JSON.stringify(objUsuario))

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

          <h1>{import.meta.env.VITE_TEST_VAR}</h1>
          
         
          <form action=""  method="post" className="form_container">
            <label htmlFor="nome">Nome Completo:*</label>
            <input type="text" id="nome" name="nome" placeholder="Seu nome" required  value={objUsuario.nome}
            onChange={(evento) => setUsuario({ ...objUsuario, nome: evento.target.value })}/>

            <label htmlFor="email">E-mail:*</label>
            <input type="email" name="email" placeholder="Seu e-mail" required />

            <label htmlFor="telefone">Telefone:*</label>
            <input type="tel" name="telefone" placeholder="()xxxx-xxxx" required />

            <label htmlFor="cep">CEP:*</label>
            <input type="text" name="cep" placeholder="Seu CEP" onChange={buscaEndereco}
              required />

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

            <label htmlFor="idade">Idade:</label>
            <input type="date" name="idade" />

            <label htmlFor="genero">Gênero:*</label>
            <select id="genero" name="genero" required>
              <option value="feminino">Feminino</option>
              <option value="masculino">Masculino</option>
              <option value="outro">Outro</option>
            </select>

            <label htmlFor="status">Status atual:*</label>
            <select id="status" name="status" required>
              <option value="disponivel">Disponível</option>
              <option value="ocupado">Ocupado</option>
            </select>



            <label htmlFor="sobre">Sobre:</label>
            <textarea name="sobre" cols="30" rows="10" placeholder="Escreva sobre você"></textarea>

            <input type="submit"  value="Registrar" className="buttons" />
          </form>
        </div>
      </div>
    )

  }
  export default Care