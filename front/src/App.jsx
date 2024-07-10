import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './Pages/Layout';
import RegisterPage from './Pages/RegisterPage';
import SignInPage from './Pages/SignInPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='*' Component={Layout} />
          <Route path='/signup' Component={RegisterPage} />
          <Route path='/signin' Component={SignInPage} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
