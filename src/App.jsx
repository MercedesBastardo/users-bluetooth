import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import UserCreate from './pages/UserCreate';
import './App.css'
import UserConection from './pages/UserConection';

function App() {
  

  return (
    <>

      <BrowserRouter>

        <Routes>

        <Route path="/" element={<Login />} />

					<Route path="/me" element={<UserConection />} />
					<Route path="/create" element={<UserCreate />} />
					
        
        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
