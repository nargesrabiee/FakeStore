import React from 'react';
import './User.css';
import { BsArrowLeft, BsPersonCircle, BsBoxArrowLeft, BsEnvelopeAt } from "react-icons/bs";
import { ImCheckmark2 } from "react-icons/im";
import { Link,useNavigate } from 'react-router-dom';
import { Container, Row, Col, Accordion } from 'react-bootstrap';

export default function User() {

    let siteUser = JSON.parse(localStorage.getItem('userInfo'))
    let navigate = useNavigate()

    function exitUser(){
        siteUser = ''
        localStorage.setItem('userInfo', JSON.stringify(siteUser))
        navigate('/')
    }

    return (
        <>
            {/* navbar */}
            <nav className="navbar navbar-expand-lg">
                <Container>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item me-3 fs-5 previousPage">
                            <Link to={'/'}><BsArrowLeft className='icon' /></Link>
                        </li>
                    </ul>
                    <a className="navbar-brand logo myfont" href="#">LOGO</a>
                </Container>
            </nav>

            {/* header */}
            <div className="userPage-header py-4 mt-4">
                <Container>
                    <Row className="align-items-center">
                        <Col md={2} className="mb-2">
                            <BsPersonCircle className="user-icon display-1" />
                        </Col>
                        <Col md={10}>
                            <div className="user-name fs-2 pb-3">{siteUser.name.firstname} {siteUser.name.lastname}</div>
                            <div className="fs-6 user-email"><BsEnvelopeAt /> {siteUser.email}</div>
                            <button className="btn mt-3 exit-btn" onClick={exitUser}><BsBoxArrowLeft /> Exit</button>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* body */}
            <div className="container mt-5">
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>
                            <span className='fs-5 fw-bold'>Personal Information</span>
                        </Accordion.Header>
                        <Accordion.Body>
                            <p className="fw-bold">
                                <ImCheckmark2 style={{ marginRight: '4px', marginBottom: '3px' }} />
                                Firstname: <span className="firstname-info fw-normal">{siteUser.name.firstname}</span>
                            </p>
                            <p className="fw-bold">
                                <ImCheckmark2 style={{ marginRight: '4px', marginBottom: '3px' }} />
                                Lastname: <span className="lastname-info fw-normal">{siteUser.name.lastname}</span>
                            </p>
                            <p className="fw-bold">
                                <ImCheckmark2 style={{ marginRight: '4px', marginBottom: '3px' }} />
                                Email: <span className="email-info fw-normal">{siteUser.email}</span>
                            </p>
                            <p className="fw-bold">
                                <ImCheckmark2 style={{ marginRight: '4px', marginBottom: '3px' }} />
                                Address: <span className="address-info fw-normal">{siteUser.address.city}, {siteUser.address.street}, zipcode:{siteUser.address.zipcode}</span>
                            </p>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </>
    )
}
