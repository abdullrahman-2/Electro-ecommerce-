
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./navbar.css"
import { NavLink } from 'react-router-dom';
import LogOutBtn from '../logoutBtn/LogOutBtn';
import { useSelector } from 'react-redux';
function NavBar(){
  const isAuth = useSelector(state => state.authSlice.isAuth)

  return (
    <>
 <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#home"><img src='public/assets/logo.png'/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto  d-flex justify-content-between align-items-center w-100">
            <div className="links-items d-flex gap-3">
              <NavLink to="/" className="nav__link text-decoration-none text-black">
                Home
              </NavLink>
              <NavLink to="/shop" className="nav__link text-decoration-none text-black">
                Shop
              </NavLink>
              <NavLink to="/cart" className="nav__link text-decoration-none text-black">
                Cart
              </NavLink>
            </div>
            <div className="d-flex align-items-center gap-3">
            {isAuth? <NavLink ><LogOutBtn/></NavLink>:<>  <NavLink to="/login" className="nav__link text-decoration-none text-black">
                Login
              </NavLink>
              <NavLink to="/register" className="nav__link text-decoration-none text-black">
                Register
              </NavLink></>}
            
             
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}

  


export default NavBar