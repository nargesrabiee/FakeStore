import { Link } from 'react-router-dom';
import './CategoryCard.css';
import { Col } from 'react-bootstrap';


function CategoryCard(props) {
    return (
        <Col sm={6} md={3} className='mt-4'>
            <Link to={`/category/${props.name}`}>
                <div className="card category-card" id={props.name}>
                    <div className="card-body text-center ">
                        <span className="material-symbols-outlined fs-1 mb-3">
                            {props.icon}
                        </span>
                        <h5 className="card-title myfont fs-4">{props.name}</h5>
                    </div>
                </div>
            </Link>
        </Col>
    )
}

export default CategoryCard;