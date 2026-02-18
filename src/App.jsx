import { Button, Typography } from '@mui/material'
import { Navigate, Route, Routes } from 'react-router-dom'
import LoginPage from './components/LoginPage'
import RegisterPage from './components/RegisterPage'
import Profile from './components/profile/Profile'
import Navbar from './components/Navbar/Navbar'
import ProductListPage from './components/product/ProductListPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login"/>} />
      <Route path="/navbar" element={<Navbar/>} />
      <Route path="/login" element={<LoginPage/>} />
      <Route path="/register" element={<RegisterPage/>} />
      <Route path="/profile" element={<Profile/>} />
      <Route path="/product" element={<ProductListPage/>} />
    </Routes>
  )
}

export default App
