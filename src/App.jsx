import { Navigate, Route, Routes } from 'react-router-dom'
import LoginPage from './components/LoginPage'
import RegisterPage from './components/RegisterPage'
import Profile from './components/profile/Profile'
import ProductListPage from './components/product/ProductListPage'
import Home from './components/Home'
import CategoryPage from './components/CategoryPage'
import CartPage from './components/cart/CartPage'
import ProductDetail from './components/ProductDetail'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login"/>} />
      <Route path="/home" element={<Home/>} />
      <Route path="/login" element={<LoginPage/>} />
      <Route path="/register" element={<RegisterPage/>} />
      <Route path="/profile" element={<Profile/>} />
      <Route path="/products" element={<ProductListPage/>} />
      <Route path="/category/:categoryName" element={<CategoryPage />} />
      <Route path="/cart" element={<CartPage/>} />
      <Route path="/product/:productId" element={<ProductDetail />} />
    </Routes>
  )
}

export default App
