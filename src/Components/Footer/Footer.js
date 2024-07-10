import './Footer.css';
import { Container, Row, Col } from 'react-bootstrap';
import { BsCheck, BsInstagram, BsWhatsapp, BsTelegram, BsFacebook } from "react-icons/bs";
import { Link } from 'react-router-dom';


function Footer() {
    return (
        <footer className='footer'>
            <Container className='footer-container'>
                <Row className='justify-content-between align-items-center'>
                    <Col md={3} className='mb-4'>
                        <h1 class="myfont footer-title fs-2 mb-4">Fake <span>Store</span></h1>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente et minima facere tempora consequuntur dolorum.</p>
                    </Col>
                    <Col md={3} className='mb-4'>
                        <h4 className="mb-3">Products</h4>
                        <Link to="/category/women's clothing" className='footer-link'>
                            <li><BsCheck /> Women's Clothing</li>
                        </Link>
                        <Link to="/category/men's clothing" className='footer-link'>
                            <li><BsCheck /> Men's Clothing</li>
                        </Link>
                        <Link to="/category/jewelery" className='footer-link'>
                            <li><BsCheck /> Jewelery</li>
                        </Link>
                        <Link to="/category/electronics" className='footer-link'>
                            <li><BsCheck /> Electronics</li>
                        </Link>
                    </Col>
                    <Col md={3} className='mb-4'>
                        <h4 className="mb-3">Contact us</h4>
                        <Link to="" className="footer-link"><li><BsInstagram /> fake_shop</li></Link>
                        <Link to="" className="footer-link"><li><BsWhatsapp /> online.shop</li></Link>
                        <Link to="" className="footer-link"><li><BsTelegram /> online.shop</li></Link>
                        <Link to="" className="footer-link"><li><BsFacebook /> online.shop</li></Link>
                    </Col>
                </Row>
            </Container>
            <div className="footer-row"></div>
        </footer>
    )
}

export default Footer;