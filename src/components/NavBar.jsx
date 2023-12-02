import { Link } from "react-router-dom";
import { ImMenu } from "react-icons/im";
import MenuList from "./MenuList";
import { useState } from "react";


function NavBar() {

    const [menu, setMenu] = useState(false)

    const showMenu = () => setMenu(!menu)

    if(menu){
        document.body.style.overflow = 'hidden'
    } else {
        document.body.style.overflow = ''
    }

    return (
        <div>

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
                <ImMenu id="menu_icon" onClick={showMenu}/>
            </nav>
            {menu && <MenuList active={setMenu}/>}
        </div>
    )
}

export default NavBar;