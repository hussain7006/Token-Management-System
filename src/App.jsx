import { Routes, Route } from 'react-router-dom'

import './App.css';
// import Routing from './Routing';
import Navbar from './UiComponents/Header/Navbar'
import Home from './Pages/Home/Home'
import SingIn from './Pages/SignIn/SingIn';
import NotFound from "./Pages/NotFound/NotFound";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} ></Route>
        <Route path='SignIn' element={<SingIn />} ></Route>
        <Route path='*' element={<NotFound />} ></Route>
      </Routes>
    </>
  );
}

export default App;
