import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Modal } from 'react-bootstrap';
import Menu from '../Menu/Menu';
import HeaderPage from '../HeaderPage/HeaderPage';
import ProductCard from '../ProductCard/ProductCard';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Footer from '../Footer/Footer';
import {
    BsX,
    BsFillXSquareFill
} from "react-icons/bs";

export default function Category() {
    const [products, setProducts] = useState([])
    const param = useParams()

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/category/${param.categoryName}`)
            .then(response => {
                if(response.status === 200){
                    setProducts(response.data)
                } else {
                setShowFailedModal(true)
                }
            })
            .catch(err=>{
                setShowFailedModal(true)
            })
    })

    // Modal States
    const [showFailedModal, setShowFailedModal] = useState(false)

    return (
        <>
            <Menu />
            <HeaderPage pageTitle={param.categoryName} />
            <Container className='mt-5'>
                <Row>
                    <Col>
                        <Row className='container-products'>
                            {products.map(product=>(<ProductCard key={product.id} {...product} />))}
                        </Row>
                    </Col>
                </Row>
            </Container>
            <Footer />

            {/* Failed Modal */}
            <Modal
                show={showFailedModal}
                backdrop="static"
            >
                <Modal.Header style={{ border: 'none' }}>
                    <div className='modal-content-conteiner'>
                        <p>
                            <BsFillXSquareFill className='text-danger' style={{ marginRight: '8px' }} />
                            Connecting Error
                        </p>
                        <BsX className='icon' onClick={() => setShowFailedModal(false)} />
                    </div>
                </Modal.Header>
            </Modal>
        </>
    )
}
