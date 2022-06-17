import { useState } from 'react';
import MainRoutes from './routes';
import Header from './shared/Components/Header';
import Cart from './shared/Components/Cart';

function App() {
  const [handleToggleCart, setHandleToggleCart] = useState(false);

  return (
    <div>
      <Header setHandleToggleCart={setHandleToggleCart} />
      <MainRoutes />
      {handleToggleCart && <Cart setHandleToggleCart={setHandleToggleCart} />}
    </div>
  );
}

export default App;
