import NavBar from "../components/NavBar"
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <NavBar />
      <h1 className="title_main">Entre na sua conta WiseCare!</h1>
      <div className="auth_container">
        <div className="auth_inputs">
          <h3>ENTRAR</h3>
          <form action="">
            <input type="email" name="" id="" placeholder="E-mail" />
            <input type="password" name="" id="" placeholder="Senha" />
            <div><input type="button" value="Entrar" className="buttons"/></div> 
          </form>
          <h5>Se não tiver uma conta, <Link to="/register"><u>clique aqui</u></Link>.</h5>
        </div>
      </div>
    </div>
  )
}

export default Login