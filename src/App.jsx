import { Outlet } from 'react-router-dom'
import NavBar from './components/navbar.jsx'

import './App.css'

function App() {
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
    
  )
}

export default App
