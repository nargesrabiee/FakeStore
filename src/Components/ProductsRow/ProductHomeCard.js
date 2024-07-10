import './ProductHomeCard.css';
import { Col } from 'react-bootstrap';
import { BsFillStarFill } from "react-icons/bs";
import { Link } from 'react-router-dom';


function ProductHomeCard(props) {
    return (
        <Col md={6} lg={3} className='mt-4'>
            <div className="card product-card">
                <div className="img-card-container">
                    <img src={props.image} className="card-img-top"
                        style={{ width: '130px', height: '130px' }} />
                </div>
                <div className="card-body">
                    <h5 className="card-title text-center my-3">{props.title}</h5>
                </div>
                <div className="product-details fw-bold px-3">
                    <span className="rate">
                        <BsFillStarFill className='star-icon' />
                        <span className="rate-value">{props.rate}</span>
                    </span>
                    <span className="price">{props.price}</span>
                </div>
                <Link to={`/product/${props.id}`}><button type="button" className="btn mt-4">Show Details</button></Link>
            </div>
        </Col>
    )
}

export default ProductHomeCard;