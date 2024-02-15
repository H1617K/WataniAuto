
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Page/Login';
import NewRegister from './Page/NewRegister';
import Forgetpassword from './Page/Forgetpassword';
import  Home from './Page/Home';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="Home" element={<Home/>} />
      </Routes>
      <Routes>
        <Route path="Login" element={<Login/>} />
      </Routes>
      <Routes>
        <Route path="NewRegister" element={<NewRegister/>} />
      </Routes>
      <Routes>
        <Route path="Forgetpassword" element={<Forgetpassword/>} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;