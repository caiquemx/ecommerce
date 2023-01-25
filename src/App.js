import CartProvider from './context/cartContext';
import AppRoutes from './routes';

function App() {
  return (
    <div>
      <CartProvider>
        <AppRoutes />
      </CartProvider>
    </div>
  );
}

export default App;
