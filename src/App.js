import { BrowserRouter } from 'react-router-dom';
import MainRoutes from './core/routes/MainRoutes';
import Layout from './core/components/layout/Layout';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <MainRoutes />
      </Layout> 
    </BrowserRouter>
  );
}

export default App;
