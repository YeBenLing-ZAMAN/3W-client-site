import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Component/Authencation/Login';
import SignUp from './Component/Authencation/SignUp';
import Navbar from './Component/Header.js/Navbar';
import Notice from './Component/Header.js/Notice';

function App() {
  return (
    <>
    <Navbar></Navbar>
    <Notice></Notice>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;
