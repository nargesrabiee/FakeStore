import React from 'react';
import './CategorySection.css';
import { FaCaretRight } from "react-icons/fa6";
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function CategorySection() {
    return (
        <Col className="categories-part">
            <h3 className="myfont text-center mb-2">Categories</h3>
            <hr className="mx-4" />
            <ul className="mt-4">
                <Link to="/category/women's clothing">
                    <li className="categories-link" id="women's clothing" onClick="getCategoryName(id)">
                    <FaCaretRight className='icon' /> Women's Clothing
                </li>
                </Link>
                <Link to="/category/men's clothing">
                    <li className="categories-link" id="men's clothing" onClick="getCategoryName(id)">
                    <FaCaretRight className='icon' /> Men's Clothing
                </li>
                </Link>
                <Link to="/category/jewelery">
                    <li className="categories-link" id="jewelery" onClick="getCategoryName(id)">
                    <FaCaretRight className='icon' /> Jewelery
                </li>
                </Link>
                <Link to="/category/electronics">
                    <li className="categories-link" id="electronics" onClick="getCategoryName(id)">
                    <FaCaretRight className='icon' /> Electronics
                </li>
                </Link>
            </ul>
        </Col>
    )
}
