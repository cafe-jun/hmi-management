import AppRouter from './router';
import { AppProvider } from './routers/provider';

function App() {
  return (
    <AppProvider>
      <AppRouter />
    </AppProvider>
  );
}

export default App;
