import AppProvider from './context/appContext';
import AppRoutes from './routes';

function App() {
  return (
    <div>
      <AppProvider>
        <AppRoutes />
      </AppProvider>
    </div>
  );
}

export default App;
