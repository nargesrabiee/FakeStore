import './Slider.css';
import { Container, Row, Col } from 'react-bootstrap';
import { BsFillCaretRightFill } from "react-icons/bs";
import SliderImage from '../../images/slider-photo-withoutBG.png';
import { Link } from 'react-router-dom';


function Slider() {
    return (
        <>
            <Container>
                <Row className='align-items-center'>
                    <Col xs={12} md={6}>
                        <h1 className="slider-title myfont">New</h1>
                        <h1 className="slider-subtitle myfont">Arrival</h1>
                        <p className="my-5 fs-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus ab ipsa
                            maxime
                            deserunt illum
                            dignissimos accusamus quis expedita provident? Provident mollitia dolore magnam repellendus suscipit
                            placeat incidunt dolor, sapiente harum, consectetur saepe sed aperiam earum doloremque fugiat, natus
                            voluptate explicabo?</p>
                        <Link to='/products'><button type="button" className="btn btn-lg slider-btn">Shop Now <BsFillCaretRightFill /></button></Link>
                    </Col>
                    <Col xs={12} md={6}>
                        <img className="img-fluid slider-image" src={SliderImage} alt="" />
                    </Col>
                </Row>
            </Container>
            <div className="slider-design-row"></div>
        </>
    )
}

export default Slider