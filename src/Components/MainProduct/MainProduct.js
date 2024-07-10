import React, { useEffect, useState } from 'react';
import './MainProduct.css';
import { useParams } from 'react-router-dom';
import Menu from '../Menu/Menu';
import Breadcrumb from '../Breadcrumb/Breadcrumb';
import { Container, Row, Col, Modal } from 'react-bootstrap';
import {
    BsCartPlus,
    BsX,
    BsFillCheckSquareFill,
    BsFillXSquareFill,
    BsFillExclamationSquareFill
} from "react-icons/bs";
import axios from 'axios';
import Footer from '../Footer/Footer';
import Loading from '../Loading/Loading';

export default function MainProduct() {

    const userCart = JSON.parse(localStorage.getItem('userCart'));
    const siteUser = JSON.parse(localStorage.getItem('userInfo'))

    const param = useParams()

    let [product, setProduct] = useState({})
    let [loading, setLoading] = useState(true)

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${param.productID}`)
            .then(response => {
                if (response.status === 200) {
                    setProduct(response.data)
                    setLoading(false)
                }
            })
            .catch(err => {
                setShowFailedModal(true)
            })

        window.scrollTo(0, 0)
    }, [])

    function addToCart(id) {
        if (siteUser) {
            axios.get(`https://fakestoreapi.com/products/${id}`)
                .then(response => {

                    if (response.status === 200) {
                        let hasItem = userCart.find(item => {
                            return item.id === response.data.id
                        })

                        if (hasItem) {
                            setShowAlertModal(true)
                        } else {
                            let newPro = {
                                ...response.data,
                                proCount: 1
                            }
                            console.log(newPro);
                            userCart.push(newPro)
                            localStorage.setItem('userCart', JSON.stringify(userCart))
                            setShowSuccessModal(true)
                        }

                    } else {
                        setFailedModalTxt('Operation failed')
                        setShowFailedModal(true)
                    }
                })
                .catch(err => {
                    setFailedModalTxt('Connecting error')
                    setShowFailedModal(true)
                })
        } else {
            setShowWarningModal(true)
        }
    }

    // Modal States
    const [showSuccessModal, setShowSuccessModal] = useState(false)
    const [showWarningModal, setShowWarningModal] = useState(false)
    const [showFailedModal, setShowFailedModal] = useState(false)
    const [showAlertModal, setShowAlertModal] = useState(false)
    const [failedModalTxt, setFailedModalTxt] = useState('')

    return (
        <>
            <Menu />
            {loading ?
                <Loading /> :
                <>
                    <Breadcrumb category={product.category} name={product.title} />
                    <Container>
                        <Row className="mt-5 align-items-center">
                            <Col md={6}>
                                <Row>
                                    <Col>
                                        <h1 className="product-title">{product.title}</h1>
                                        <p className="my-5 product-description">{product.description}</p>
                                    </Col>
                                </Row>
                                <Row>
                                    <div className="col-12">
                                        <span className="fs-4 fw-bold me-5 product-price">{product.price}$</span>
                                        <button className="btn buy-btn" onClick={() => addToCart(product.id)}><BsCartPlus /> Add To Cart</button>
                                    </div>
                                </Row>
                            </Col>

                            <Col md={6}>
                                <div className="product-img">
                                    <img className="mt-5" src={product.image} />
                                </div>
                            </Col>
                        </Row>
                    </Container>
                    <Footer />
                </>}

            {/* Success Modal */}
            <Modal
                show={showSuccessModal}
                backdrop="static"
            >
                <Modal.Header style={{ border: 'none' }}>
                    <div className='modal-content-conteiner'>
                        <p>
                            <BsFillCheckSquareFill className='text-success' style={{ marginRight: '8px' }} />
                            Product added to cart
                        </p>
                        <BsX className='icon' onClick={() => setShowSuccessModal(false)} />
                    </div>
                </Modal.Header>
            </Modal>

            {/* Warning Modal */}
            <Modal
                show={showWarningModal}
                backdrop="static"
            >
                <Modal.Header style={{ border: 'none' }}>
                    <div className='modal-content-conteiner'>
                        <p>
                            <BsFillExclamationSquareFill className='text-warning' style={{ marginRight: '8px' }} />
                            Login to your account
                        </p>
                        <BsX className='icon' onClick={() => setShowWarningModal(false)} />
                    </div>
                </Modal.Header>
            </Modal>

            {/* Failed Modal */}
            <Modal
                show={showFailedModal}
                backdrop="static"
            >
                <Modal.Header style={{ border: 'none' }}>
                    <div className='modal-content-conteiner'>
                        <p>
                            <BsFillXSquareFill className='text-danger' style={{ marginRight: '8px' }} />
                            {failedModalTxt}
                        </p>
                        <BsX className='icon' onClick={() => setShowFailedModal(false)} />
                    </div>
                </Modal.Header>
            </Modal>

            {/* Alert Modal */}
            <Modal
                show={showAlertModal}
                backdrop="static"
            >
                <Modal.Header style={{ border: 'none' }}>
                    <div className='modal-content-conteiner'>
                        <p style={{fontSize: '15px'}}>
                            You have added this product to your shopping cart.To increase the number of products, refer to the cart
                        </p>
                        <BsX className='icon' onClick={() => setShowAlertModal(false)} />
                    </div>
                </Modal.Header>
            </Modal>
        </>
    )
}
