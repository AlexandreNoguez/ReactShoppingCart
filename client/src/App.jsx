import { useState } from 'react';
import { Container } from '@mui/material';
import MainRoutes from './routes';
import Header from './shared/Components/Header';
import Cart from './shared/Components/Cart';

function App() {
  const [handleToggleCart, setHandleToggleCart] = useState(false);

  return (
    <div>
      <Header setHandleToggleCart={setHandleToggleCart} />
      <Container maxWidth="lg">
        <MainRoutes />
      </Container>
      {handleToggleCart && <Cart setHandleToggleCart={setHandleToggleCart} />}
    </div>
  );
}

export default App;
