import { AppProvider } from './routers/provider';
import AppRouter from './router';

function App() {
  return (
    <AppProvider>
      <AppRouter />
    </AppProvider>
  );
}

export default App;
