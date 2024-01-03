
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Page/Home';
import Login from './Page/Login';
import NewRegister from './Page/NewRegister';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="HomePage" element={<Home />} />
      </Routes>
      <Routes>
        <Route path="Login" element={<Login/>} />
      </Routes>
      <Routes>
        <Route path="NewRegister" element={<NewRegister/>} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;