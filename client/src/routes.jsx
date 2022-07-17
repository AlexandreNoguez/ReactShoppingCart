import { Routes, Route, useParams } from 'react-router-dom';
import Home from './Pages/Home';
import Profile from './Pages/Profile';
import ProductDetails from './Pages/ProductDetails';
import NotFound from './Pages/NotFound';

function MainRoutes() {
  const { title } = useParams()
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/perfil" element={<Profile />} /> */}
      <Route path="catalog">
        <Route path=":title" element={<ProductDetails />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default MainRoutes;
