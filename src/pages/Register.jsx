import NavBar from "../components/NavBar"
import { Link } from "react-router-dom"
import { ImHipster2 } from "react-icons/im";
import { ImHeart } from "react-icons/im";

const Register = () => {
  return (
    <div>
      <NavBar />
      <h1 className="title_main">Como você irá usar sua conta WiseCare?</h1>
      <div className="register_container">
        <div>
          <Link to="/register/hire"><ImHipster2 id="icon_hire" /></Link>
          <h3>Patrono</h3>
        </div>
        <h4>OU</h4>
        <div>
          <Link to="/register/care"><ImHeart id="icon_care" /></Link>
          <h3>Cuidador</h3>
        </div>
      </div>
    </div>
  )
}

export default Register