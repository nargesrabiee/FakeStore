import './FollowInstagram.css';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import { BsInstagram } from "react-icons/bs";
import ClothesImage from '../../images/clothes.jpg';
import WomanClothesImage1 from '../../images/woman clothes 3.jpg';
import WomanClothesImage2 from '../../images/woman clothes 5.jpg';



function FollowInstagram() {
    return (
        <div class="socialmedia-container">
            <Container>
                <Row className='align-items-center'>
                    <Col md={6} className='mb-4'>
                        <h3 className="myfont my-4">Follow Instagram</h3>
                        <p className="my-3 fs-5"><BsInstagram style={{ color: 'palevioletred' }} /> fake_shop</p>
                        <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, nihil! Amet consequuntur placeat
                            odio deserunt minima nisi maiores eos quo?</p>
                        <button className="btn mt-4 fw-bold">Discover Now</button>
                    </Col>
                    <Col md={6}>
                        <Carousel className='imgs-sliders'>
                            <Carousel.Item interval={2000}>
                                <img src={ClothesImage} className="d-block w-100" />
                            </Carousel.Item>
                            <Carousel.Item interval={2000}>
                                <img src={WomanClothesImage1} className="d-block w-100" />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src={WomanClothesImage2} className="d-block w-100" />
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default FollowInstagram;