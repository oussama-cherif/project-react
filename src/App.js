import { BrowserRouter } from 'react-router-dom';
import MainRoutes from './core/routes/MainRoutes';
import Layout from './core/components/layout/Layout';
import { UserContext } from './core/context/UserContext';
import { useState } from 'react';

function App() {
  const [user, setUser] = useState(JSON.parse(sessionStorage.getItem('USER')))
  //const [user, setUser] = useState(null);
  return (
    <UserContext.Provider value={[user, setUser]}>
      <BrowserRouter>
        <Layout>
          <MainRoutes />
        </Layout> 
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
