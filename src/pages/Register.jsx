import NavBar from "../components/navbar"

const Register = () => {
    return (
      <div>
        <NavBar />
        <h1 className="title_main">Crie sua conta WiseCare!</h1>
        <div className="register_container">
          <form action="">
              <h3>ENTRAR</h3>
              <label htmlFor="nome">Nome:</label>
              <input type="text" id="nome" name="nome" required/>
          </form>
        </div>
      </div>
    )
  }
  
  export default Register