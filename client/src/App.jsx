import { useState } from 'react';
import MainRoutes from './routes';
import Cart from './shared/Components/Cart';

function App() {
  const [handleToggleCart, setHandleToggleCart] = useState(false);

  return (
    <div>
      <MainRoutes />
      {handleToggleCart && <Cart setHandleToggleCart={setHandleToggleCart} />}
    </div>
  );
}

export default App;
