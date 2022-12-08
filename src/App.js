import './App.css';
import Home from './pages/Home';
import Details from './pages/Details';
import { Route, Routes, Link } from 'react-router-dom'

function App() {
  return(
    <div className='bg-blue-700 min-h-screen mx-auto'>
      <div className='container mx-auto p-5'>
        <div className="max-w-md container mx-auto">
          <Link to="/"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2560px-International_Pok%C3%A9mon_logo.svg.png" /></Link>
        </div>
      </div>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:id" element={<Details />} />
      </Routes>
    </div>
  )
}

export default App;
