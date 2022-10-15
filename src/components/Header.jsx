import React from 'react'
import { useAuth0 } from '@auth0/auth0-react';
import logo from '../imagenes/logo192.png'
import { NavLink } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaSearch, FaUserAlt, FaShoppingCart } from 'react-icons/fa';
import { FiLogOut } from 'react-icons/fi';
import {IconContext} from 'react-icons';


export const Header = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const { logout } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    isAuthenticated && (
      <>
      {/* <div>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>Email: {user.email}</p>
      </div> */}
      <Navbar collapseOnSelect bg="dark" variant="dark" expand="lg">
        <Container fluid>
          <NavLink to='/home'>
              <img fluid src={logo} height="100" alt="No encontrada" />
          </NavLink>
          
          <Navbar.Brand><h1>Hola! {user.name} </h1></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '400px', textAlign: "center" }}
                navbarScroll
              >
                <h5>
                    <NavLink className="nav-item nav-link text-center">
                        <NavDropdown title="Armado" id="navbarScrollingDropdown" >
                            <NavDropdown.Item><NavLink to='/principiantes' className="nav-item nav-link text-center bg-dark"><strong>Principiantes</strong></NavLink></NavDropdown.Item>
                            <NavDropdown.Item><NavLink to='/conocedores' className="nav-item nav-link text-center bg-dark"><strong>Conocedores</strong></NavLink></NavDropdown.Item>
                            {/* <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">
                                Something else here
                            </NavDropdown.Item> */}
                        </NavDropdown>
                      </NavLink>
                </h5>
                <Nav.Link><h5><NavLink to='/reseñas' className="nav-item nav-link text-center">Reseñas</NavLink></h5></Nav.Link>
                <Nav.Link><h5><NavLink to='/soporte' className="nav-item nav-link text-center">Soporte</NavLink></h5></Nav.Link>
                <Nav.Link><h5><NavLink to='/nosotros' className="nav-item nav-link text-center">Nosotros</NavLink></h5></Nav.Link>
                <Nav.Link><h5><NavLink to='/ranking' className="nav-item nav-link text-center">Ranking</NavLink></h5></Nav.Link>
              </Nav>
              <Form className="d-flex">
                <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                />
                <IconContext.Provider value={{ size:'25px', color: 'white'}}>
                    <Button variant="link"><NavLink to=''><FaSearch/></NavLink></Button>
                    <Button variant="link"><NavLink to='/perfil'><FaUserAlt/></NavLink></Button>
                    <Button variant="link"><NavLink to='/carrito'><FaShoppingCart/></NavLink></Button>
                    
                </IconContext.Provider>

                <IconContext.Provider value={{ size:'30px', color: 'red'}}>
                    <Button onClick={() => logout({ returnTo: window.location.origin})} variant="link"><FiLogOut/></Button>   
                </IconContext.Provider>
                    
               </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
    )
  );
};