import { BrowserRouter, Routes,Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import Shop from './pages/Shop/Shop'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/Navbar/NavBar'
import IsNotLogged from './components/log/IsNotLogged.jsx'
import IsLogged from './components/log/IsLogged.jsx'

function App() {

  return (
    <>
 

<BrowserRouter>
<NavBar/>
  <Routes>
    <Route path='/' element={<IsLogged><Home/></IsLogged>}/>
    <Route path='/cart' element={<IsLogged><Cart/></IsLogged>}/>
    <Route path='shop/:page?' element={<IsLogged><Shop/></IsLogged>}/>
        <Route path='/login'
         element={
          <IsNotLogged>
         <Login/>
         </IsNotLogged>
         }/>
    <Route path='/register' element={

<IsNotLogged>
    <Register/>
    </IsNotLogged>


    }/>
  </Routes>
</BrowserRouter>
    </>
  )
}

export default App


// fetch("http://localhost:3000/products?_limit=4&_page=1")
// .then(res => res.json)
// .then(data => console.log(data))
