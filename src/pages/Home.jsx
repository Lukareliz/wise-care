import Carrossel from '../components/sliderHome.jsx'
import NavBar from '../components/NavBar.jsx'

const Home = () => {
  return (
    <div>
      <NavBar />
      <Carrossel />
      <h1 className='title_main'>Encontre cuidadores!</h1>
    </div>
    
  )
}

export default Home