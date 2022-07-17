import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Profile from './Pages/Profile';
import ProductDetails from './Pages/ProductDetails';
import AdminAddProducts from './Pages/AdminAddProducts';
import NotFound from './Pages/NotFound';

function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/perfil" element={<Profile />} />
      <Route path="/catalog/:id" element={<ProductDetails />} />
      <Route path="/admin" element={<AdminAddProducts />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default MainRoutes;
