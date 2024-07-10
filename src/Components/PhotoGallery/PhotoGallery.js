import './PhotoGallery.css';
import { Container, Row, Col } from 'react-bootstrap';
import WomanClothesImage1 from '../../images/woman clothes 1.jpg'
import WomanClothesImage2 from '../../images/woman clothes 2.jpg'
import WomanClothesImage3 from '../../images/woman clothes 4.jpg'
import ManClothesImage from '../../images/man clothes.jpg'


function PhotoGallery() {
    return (
        <Container style={{ marginTop: "160px" }}>
            <Row>
                <Col md={5}>
                    <img className="img-fluid gallery-img" src={WomanClothesImage3} alt="woman clothes" />
                </Col>
                <Col md={7}>
                    <Row>
                        <Col>
                            <img className="img-fluid gallery-img mb-4" src={WomanClothesImage1} alt="woman clothes" />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <img className="img-fluid gallery-img" src={ManClothesImage} alt="woman clothes" />
                        </Col>
                        <Col>
                            <img className="img-fluid gallery-img" src={WomanClothesImage2} alt="man clothes" />
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default PhotoGallery;