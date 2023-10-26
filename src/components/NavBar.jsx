import { Link } from "react-router-dom";


function NavBar(){
    return(
        <nav id="navbar_container">
            <img src=".\src\assets\logo_wisecare.png" alt="Nothing :(" />
            <h1>WiseCare</h1>
            <div className="navbar_links">
                <Link to="/">Início</Link>
                <a href="">Sobre Nós</a>
                <a href="">Contato</a>
                <a href="">Políticas</a>
            </div>
            <div className="navbar_login">
                <Link to="/login">Entrar </Link>|
                <Link to="/Register"> Registrar</Link>
            </div>
        </nav>
    )
}

export default NavBar;