import NavBar from "../components/navbar"
import ImageUpload from "../components/ImageUpload";

const Care = () => {
  return (
    <div>
      <NavBar />
      <h1 className="title_main">Cuidador, crie sua conta WiseCare!</h1>
      <div className="register_care">
        <h3>REGISTRAR</h3>
        <form action="" method="post" className="form_container">
          <ImageUpload />

          <label htmlFor="nome">Nome Completo:*</label>
          <input type="text" id="nome" name="nome" placeholder="Seu nome" required />

          <label htmlFor="email">E-mail:*</label>
          <input type="email" name="" id="" placeholder="Seu e-mail" required />

          <label htmlFor="telefone">Telefone:*</label>
          <input type="tel" name="" id="" placeholder="()xxxx-xxxx" required />

          <label htmlFor="endereco">Endereço:*</label>
          <input type="text" name="" id="" placeholder="Seu endereço" required />

          <label htmlFor="idade">Idade:</label>
          <input type="date" name="" id="" />

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
          <textarea name="" id="" cols="30" rows="10" placeholder="Escreva sobre você"></textarea>

          <input type="submit" value="Registrar" className="buttons" />
        </form>
      </div>
    </div>
  )
}

export default Care