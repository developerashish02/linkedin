
import './App.css';
import Reatc from 'react';
import { BrowserRouter as Router, Routes, Link, Route } from 'react-router-dom';
import Login from './components/Login';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
