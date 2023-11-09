import { Link } from "react-router-dom";


function NavBar(){
    return(
        <nav id="navbar_container">
            <Link to="/"><img src="../src/assets/logo_wisecare.png" alt="Logo da WiseCare, uma lâmpada com bigode." /></Link>
            <h1>WiseCare</h1>
            <div className="navbar_links">
                <Link to="/">Início</Link>
                <Link to="/about">Sobre Nós</Link>
                <a href="">Contato</a>
                <a href="">Políticas</a>
            </div>
            <div className="navbar_login">
                <Link to="/login">Entrar </Link>|
                <Link to="/register"> Registrar</Link>
            </div>
        </nav>
    )
}

export default NavBar;