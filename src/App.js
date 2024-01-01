
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Page/Home';
import Login from './Page/Login';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="HomePage" element={<Home />} />
      </Routes>
      <Routes>
        <Route path="LoginPage" element={<Login />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;