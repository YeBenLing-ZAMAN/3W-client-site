import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Component/Authencation/Login';
import SignUp from './Component/Authencation/SignUp';
import Navbar from './Component/Header.js/Navbar';
import Home from './Component/Home/Home';
import Footer from './Component/Footer/Footer';


function App() {
  return (
    <>
    <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
