import NavBar from "../components/navbar"

const Care = () => {
  return (
    <div>
        <NavBar />
        <h1 className="title_main">Cuidador, crie sua conta WiseCare!</h1>
        <div className="register_container"> {/*Definir outro nome de class para este elemento, pois já é usado na primeira parte do register*/}
          <form action="">
              <h3>REGISTRAR</h3>
              <label htmlFor="nome">Nome Completo:</label>
              <input type="text" id="nome" name="nome" required/>
              <label htmlFor="idade">Idade:</label>
              <input type="date" name="" id="" />
              <label htmlFor="genero">Gênero:</label>
              <select id="genero" name="genero" required>
                <option value="feminino">Feminino</option>
                <option value="masculino">Masculino</option>
                <option value="outro">Outro</option>
              </select>
          </form>
        </div>
      </div>
  )
}

export default Care