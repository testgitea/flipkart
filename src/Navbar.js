import { NavLink, Route, Routes } from 'react-router-dom'
import { ReactComponent as Brand } from './logo.svg'
import './navbar.css'
import GetData from './GetData'
import Footer from './Footer'
import Upload2 from './Upload2'
import Shoes1 from './Shoes1'
import Electronic from './Electronic'
import MenCloth from './MenCloth'
import WomenCloth from './WomenCloth'
import Item from './Item'
import Login from './Login'


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <Brand />
        </div>
        <div className="nav-elements">
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/Electronic">Electronics</NavLink>
            </li>
            <li>
              <NavLink to="/MenCloth">MenCloths</NavLink>
            </li>
            <li>
              <NavLink to="/WomenCloth">WomenCloths</NavLink>
            </li>
            <li>
              <NavLink to="/Shoes1">Shoes</NavLink>
            </li>
            
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
            <li>
              <NavLink to="/upload">Upload</NavLink>
            </li>
            <li>
              <NavLink to="/Login">Login</NavLink>
            </li>
            
          </ul>
          <Routes>
        <Route path='/' element={<GetData></GetData>}></Route>
        <Route path='/upload' element={<Upload2></Upload2>}></Route>
        <Route path='/Electronic' element={<Electronic></Electronic>}></Route>
        <Route path='/Shoes1' element={<Shoes1></Shoes1>}></Route>
        <Route path='/MenCloth' element={<MenCloth></MenCloth>}></Route>
        <Route path='/WomenCloth' element={<WomenCloth></WomenCloth>}></Route>
        <Route path='/Item' element={<Item></Item>}></Route>
        <Route path='/Login' element={<Login></Login>}></Route>


        </Routes>
        <br></br>
        <Footer></Footer>
        </div>
      </div>
    </nav>
  )
}

export default Navbar