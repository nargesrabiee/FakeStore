import React from 'react';
import './HeaderPage.css';
import { Container } from 'react-bootstrap';

export default function HeaderPage(props) {
    return (
        <section className="page-header align-items-center text-center">
            <Container>
                <h2 className="myfont">{props.pageTitle}</h2>
            </Container>
        </section>
    )
}
