
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FooterOption } from './Component/Footer/Footer' 
import {BtnLogin} from './Component/BtnLogin/BtnLogin'
import Home from './Page/Home';
import Login from './Page/Login';

function App() {
  return (
    <>
    <BrowserRouter>
    <FooterOption/>
    <BtnLogin/>
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