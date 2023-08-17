import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Card from './pages/Card';
import Login from './pages/Login';
import SignUp from './pages/SignUp';


function App() {

  return (
    <Routes>
      <Route path='/' element={<Home/>}/ >
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<SignUp />}/>
      <Route path='/cards' element={<Card />} />
    </Routes>
  )
}

export default App;
