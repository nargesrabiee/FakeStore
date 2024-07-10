import React from 'react';
import './Breadcrumb.css';
import { MdOutlineChevronRight } from "react-icons/md";
import { Link } from 'react-router-dom';

export default function Breadcrumb(props) {
  return (
    <div class="container mt-4">
        <div class="breadcrumbs">
            <Link to='/products'>Products</Link>
            <MdOutlineChevronRight />
            <Link to={`/category/${props.category}`} className='breadcrumb-link'>{props.category}</Link>
            <MdOutlineChevronRight />
            <Link to=''>{props.name}</Link>
        </div>
    </div>
  )
}
