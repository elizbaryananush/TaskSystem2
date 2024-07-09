import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import MainPage from './Pages/MainPage';
// import Sidebar from './Components/Sidebar';
// import Calendar from './Components/Calendar';
// import RightPart from './Components/RightPart';
import RegisterPage from './Pages/RegisterPage';

function App() {
  return (
    <div className="App">
      <Router>
        {/* <Sidebar /> */}
        <Routes>
          {/* <Route path='/' Component={MainPage} /> */}
          <Route path='/' Component={RegisterPage} />
        </Routes>
        {/* <RightPart /> */}
      </Router>
    </div>
  );
}

export default App;
