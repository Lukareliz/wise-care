import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'

import './App.css'

function App() {
  return (
    <div>
      <Outlet />
      <div className='div'></div>
      <Footer />
    </div>
  )
}

export default App
