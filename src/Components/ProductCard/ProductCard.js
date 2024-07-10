import React from 'react';
import './ProductCard.css';
import { Col } from 'react-bootstrap';
import { BsFillStarFill } from "react-icons/bs";
import { Link } from 'react-router-dom';


export default function ProductCard(props) {
    return (
        <Col md={6} lg={4} className="mt-4">
            <div className="card product-card">
                <div className="img-card-container">
                    <img src={props.image} className="card-img-top" />
                </div>
                <div className="card-body">
                    <h5 className="card-title text-center my-3">{props.title.slice(0, 38)}</h5>
                </div>
                <div className="product-details fw-bold px-3">
                    <span className="rate">
                        <BsFillStarFill className='star-icon' />
                        <span className="rate-value">{props.rating.rate}</span>
                    </span>
                    <span className="price">{props.price}$</span>
                </div>
                <Link to={`/product/${props.id}`}><button type="button" className="btn mt-4">Show Details</button></Link>
            </div>
        </Col>
    )
}
