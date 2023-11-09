import NavBar from "../components/navbar"
import ImageUpload from "../components/ImageUpload";

const Care = () => {
  return (
    <div>
      <NavBar />
      <h1 className="title_main">Cuidador, crie sua conta WiseCare!</h1>
      <div className="register_care">
        <h3>REGISTRAR</h3>
        <ImageUpload />
        <form action="" method="post" className="form_container">
          <label htmlFor="nome">Nome Completo:*</label>
          <input type="text" id="nome" name="nome" placeholder="Seu nome" required />

          <label htmlFor="email">E-mail:*</label>
          <input type="email" name="email" placeholder="Seu e-mail" required />

          <label htmlFor="telefone">Telefone:*</label>
          <input type="tel" name="telefone" placeholder="()xxxx-xxxx" required />

          <label htmlFor="rua">Rua/Avenida:*</label>
          <input type="text" name="logradouro" placeholder="Nome da sua rua" required />

          <label htmlFor="numero">Número Residencial/Comercial:*</label>
          <input type="text" name="numero" placeholder="Número da sua residência" required/>

          <label htmlFor="complemento">Complemento:</label>
          <input type="text" name="complemento" placeholder="Insira um complemento"/>

          <label htmlFor="bairro">Bairro:*</label>
          <input type="text" name="bairro" placeholder="Nome do seu bairro" required/>

          <label htmlFor="cidade">Cidade:*</label>
          <input type="text" name="cidade" placeholder="Nome da sua cidade" required/>

          <label htmlFor="estado">Estado/Província:*</label>
          <input type="text" name="estado" placeholder="Nome do estado onde reside" required/>

          <label htmlFor="cep">CEP:*</label>
          <input type="text" name="cep" placeholder="Seu CEP" required/>

          <label htmlFor="pais">País:*</label>
          <input type="text"  name="pais" placeholder="Seu país" required/>

          <label htmlFor="idade">Idade:</label>
          <input type="date" name="idade"/>

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

          <input type="submit" value="Registrar" className="buttons" />
        </form>
      </div>
    </div>
  )
}

export default Care