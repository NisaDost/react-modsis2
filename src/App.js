import './App.css';
import Home from './pages/home';
import Login from "./components/login"
import Register from "./components/register"
import Modeldetails from "./components/modeldetails"



import { Route, Routes } from 'react-router-dom';



function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}  />
        <Route path='/login' element={<Login/>}  />
        <Route path='/register' element={<Register/>}  />
        <Route path='/modeldetails' element={<Modeldetails/>} />


        
      </Routes>

    </div>
  );
}

export default App;
