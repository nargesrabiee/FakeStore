import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Modal } from 'react-bootstrap';
import './Products.css';
import axios from 'axios';
import Menu from '../Menu/Menu'
import HeaderPage from '../HeaderPage/HeaderPage';
import ProductCard from '../ProductCard/ProductCard';
import CategorySection from '../CategorySection/CategorySection';
import Footer from '../Footer/Footer';
import {
  BsX,
  BsFillXSquareFill
} from "react-icons/bs";

export default function Products() {

  const [products, setProducts] = useState([])

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(response => {
        if (response.status === 200) {
          setProducts(response.data)
        } else {
          setShowFailedModal(true)
        }
      })
      .catch(err => {
        setShowFailedModal(true)
      })
  }, [])

  // Modal States
  const [showFailedModal, setShowFailedModal] = useState(false)

  return (
    <>
      <Menu />
      <HeaderPage pageTitle="Our Products" />
      <Container className='mt-5'>
        <Row>
          <Col md={8} lg={9}>
            <Row className='container-products'>
              {products.map(product => {
                return <ProductCard key={product.id} {...product} />
              })}
            </Row>
          </Col>
          <Col md={4} lg={3}>
            <Row className='mt-4'>
              <CategorySection />
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
