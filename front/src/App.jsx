import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './Pages/Layout';
import RegisterPage from './Pages/RegisterPage';
import SignInPage from './Pages/SignInPage';
import { useState } from 'react';

function App() {
  const [token , setToken] = useState(localStorage.token)
  return (
    <div className="App">
      <Router>
        <Routes>
          {token ? <Route path='*' Component={Layout} /> : null}
          <Route path='/signup' Component={RegisterPage} />
          <Route path='/signin' Component={SignInPage} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
