import './App.css';
import Home from './pages/home';
import Login from "./components/login"
import Register from "./components/register"
import Modelpage from "./components/modelpage"



import { Route, Routes } from 'react-router-dom';



function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}  />
        <Route path='/login' element={<Login/>}  />
        <Route path='/register' element={<Register/>}  />
        <Route path='/modelpage' element={<Modelpage/>}  />


        
      </Routes>

    </div>
  );
}

export default App;
