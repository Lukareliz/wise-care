import Carrossel from '../components/sliderHome.jsx'
import NavBar from '../components/NavBar.jsx'

const Home = () => {
  return (
    <div>
      <NavBar />
      <Carrossel />
      <div className='title_main'>
        <h1>Encontre cuidadores!</h1>
      </div>
    </div>
    
  )
}

export default Home