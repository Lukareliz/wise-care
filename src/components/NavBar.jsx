

function NavBar(){
    return(
        <nav id="navbar_container">
            <img src=".\src\assets\logo_wisecare.png" alt="Nothing :(" />
            <h1>WiseCare</h1>
            <div className="navbar_links">
                <a href="">Home</a>
                <a href="">Sobre Nós</a>
                <a href="">Contato</a>
                <a href="">Políticas</a>
            </div>
            <div className="navbar_login">
                <a href="">Login </a>|
                <a href=""> Cadastre-se</a>
            </div>
        </nav>
    )
}

export default NavBar;