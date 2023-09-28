import { BrowserRouter } from 'react-router-dom';
import MainRoutes from './core/routes/MainRoutes';
import Header from './core/components/layout/Header';
import Footer from './core/components/layout/Footer';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <MainRoutes />
      <Footer/>      
    </BrowserRouter>
  );
}

export default App;
