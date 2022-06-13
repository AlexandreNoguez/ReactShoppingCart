import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Profile from './Pages/Profile'
import Cart from './Pages/Cart'

function MainRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/perfil" element={<Profile />} />
            <Route path="/carrinho" element={<Cart />} />
            <Route path="/*" element={<Home />} />
        </Routes>
    )
}

export default MainRoutes
