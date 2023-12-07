import NavBar from "../components/NavBar";
import ImageUpload from "../components/ImageUpload"

const Hire = () => {
  return (
    <div>
        <NavBar />
        <h1 className="title_main">Patrono, crie sua conta WiseCare!</h1>
        <div className="register_care">
          <h3>REGISTRAR</h3>
          <div className="imgUp">
            <ImageUpload />
          </div>
         
          <form action=""  method="post" className="form_container">
            <label htmlFor="nome">Nome Completo:*</label>
            <input type="text" id="nome" name="nome" placeholder="Seu nome" required/>

            <label htmlFor="email">E-mail:*</label>
            <input type="email" name="email" placeholder="Seu e-mail" required />
            
            <label htmlFor="cpf">CPF:*</label>
            <input type="text" name="cpf" placeholder="Seu CPF" required />

            <label htmlFor="telefone">DDD:*</label>
            <input type="tel" name="ddd" placeholder="DDD" required />

            <label htmlFor="telefone">Telefone:*</label>
            <input type="tel" name="telefone" placeholder="Seu nº de celular" required />

            <label htmlFor="cep">CEP:*</label>
            <input type="text" name="cep" placeholder="Seu CEP" required />

            <label htmlFor="rua">Rua/Avenida:*</label>
            <input type="text" name="logradouro" placeholder="Nome da sua rua" required />

            <label htmlFor="numero">Número Residencial/Comercial:*</label>
            <input type="text" name="numero" required />

            <label htmlFor="complemento">Complemento:</label>
            <input type="text" name="complemento" placeholder="Insira um complemento"/>

            <label htmlFor="bairro">Bairro:*</label>
            <input type="text" name="bairro" placeholder="Nome do seu bairro" required />

            <label htmlFor="cidade">Cidade:*</label>
            <input type="text" name="cidade" placeholder="Nome da sua cidade" required />

            <label htmlFor="estado">Estado/Província:*</label>
            <input type="text" name="estado" placeholder="Nome do estado onde reside" required />


            <label htmlFor="pais">País:*</label>
            <input type="text" name="pais" placeholder="Seu país" required />

            <label htmlFor="idade">Data de nascimento:*</label>
            <input type="date" name="idade" required/>
            
            <label htmlFor="profissao">Profissão:</label>
            <input type="text" name="profissao"/>
            
            <label htmlFor="relacao">Relação com o paciente:*</label>
            <select id="relacaoId" name="relacao" required>
              <option value="">-</option>
              <option value="feminino">Filho(a)</option>
              <option value="feminino">Irmão ou irmã</option>
              <option value="masculino">Primo(a)</option>
              <option value="outro">Outro</option>
            </select>

            <label htmlFor="genero">Gênero:*</label>
            <select id="genero" name="genero" required>
              <option value="">-</option>
              <option value="feminino">Feminino</option>
              <option value="masculino">Masculino</option>
              <option value="outro">Outro</option>
            </select>
            
            <label htmlFor="tipoSanguineo">Tipo sanguíneo:*</label>
            <select id="tipoSang" name="tipoSanguineo" required>
              <option value="">-</option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="O">O</option>
              <option value="AB">AB</option>
            </select>

            <label htmlFor="status">Status atual:*</label>
            <select id="status" name="status" required>
              <option value="">-</option>
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

export default Hire