import React, { useState } from "react";
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Menu.css';
import { IoIosLogIn } from "react-icons/io";
import { BsCart4, BsFillPersonFill } from "react-icons/bs";
import { Link } from "react-router-dom";


function Menu() {
    const userCart = JSON.parse(localStorage.getItem('userCart'));
    const [proCartNum,setProCartNum] = useState(userCart.length)

    const siteUser = JSON.parse(localStorage.getItem('userInfo'))

    function showAlert(){
        alert('You should log in')
    }

    return (
        <Navbar expand="lg" >
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto mb-2 mb-lg-0">
                        <Nav.Link href="" className="me-3 fs-5"><Link to={'/'} className="menu-link">Home</Link></Nav.Link>
                        <NavDropdown title="Products" id="basic-nav-dropdown" className="me-3 fs-5">
                            <NavDropdown.Item href="#action/3.1"><Link to="/category/women's clothing" className="menu-link">Women's Clothing</Link></NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2"><Link to="/category/men's clothing" className="menu-link">Men's Clothing</Link></NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3"><Link to="/category/jewelery" className="menu-link">Jewelery</Link></NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3"><Link to="/category/electronics" className="menu-link">Electronics</Link></NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4"><Link to={'/products'} className="menu-link">All Products</Link></NavDropdown.Item>
                        </NavDropdown>
                        {siteUser
                            ? <Nav.Link href="" className="me-3 fs-5"><Link to={'/user'} className="menu-link"><BsFillPersonFill /> {siteUser.name.firstname} {siteUser.name.lastname}</Link></Nav.Link>
                            : <Nav.Link href="" className="me-3 fs-5"><Link to={'/login'} className="menu-link"><IoIosLogIn /> Login</Link></Nav.Link>
                        }
                        {siteUser
                            ? <Nav.Link href="" className="me-3 fs-5"><Link to={'/cart'} className="menu-link" style={{position: 'relative'}}><BsCart4 /> Cart<span className="cart-badge">{proCartNum}</span></Link></Nav.Link>
                            : <Nav.Link href="" className="me-3 fs-5" onClick={showAlert}><Link className="menu-link"><BsCart4 /> Cart</Link></Nav.Link>

                        }
                    </Nav>
                </Navbar.Collapse>

                <Nav.Link href="#" className="logo myfont">LOGO</Nav.Link>
            </Container>
        </Navbar>
    )
}

export default Menu
