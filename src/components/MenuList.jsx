import { Link } from "react-router-dom"

const MenuList = () => {
    return (
        <div id="menu_list">
            <Link to="/">Início</Link>
            <Link to="/about">Sobre Nós</Link>
            <a href="">Contato</a>
            <a href="">Políticas</a>
            <Link to="/login">Entrar </Link>
            <Link to="/register"> Registrar</Link>
        </div>
    )
}

export default MenuList