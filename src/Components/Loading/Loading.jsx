import React from 'react';
import './Loading.css';
import { Spinner } from 'react-bootstrap';

export default function Loading() {
    return (
        <div className='laoding-container'>
            <span style={{ fontSize: '20px' }}>Loading</span>
            <Spinner animation="grow" size="sm" />
            <Spinner animation="grow" size="sm" />
            <Spinner animation="grow" size="sm" />
        </div>
    )
}
