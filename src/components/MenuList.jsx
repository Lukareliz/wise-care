import { Link } from "react-router-dom"

const MenuList = () => {
    return (
        <div id="menu_list">
            <Link to="/">Início</Link>
            <Link to="/about">Sobre Nós</Link>
            <Link to="/contact">Contato</Link>
            <Link to="/policies">Políticas</Link>
            <Link to="/login">Entrar </Link>
            <Link to="/register"> Registrar</Link>
        </div>
    )
}

export default MenuList