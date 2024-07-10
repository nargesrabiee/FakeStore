import './ProductsRow.css';
import { Container, Row } from 'react-bootstrap';
import ProductHomeCard from './ProductHomeCard';


function ProductsRow() {

    const newProducts = [
        { id: 1, title: "Fjallraven - Foldsack No.1", image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg", price: "500$", rate: 4.5},
        { id: 17, title: "Pierced Owl Rose Gold", image: "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg", price: "9.99$", rate: 3},
        { id: 12, title: "WD 4TB Gaming Drive", image: "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg", price: "114$", rate: 4.8},
        { id: 4, title: "Mens Casual Slim Fit", image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg", price: "15.99$", rate: 2.1}
    ]


    return (
        <div class="products-container">
            <Container>
                <Row className='text-center'>
                    <p className="myfont display-6">New For You</p>
                </Row>
                <Row className='mt-4'>
                    {newProducts.map(product=>{
                        return <ProductHomeCard key={product.id} {...product}/>
                    })}
                </Row>
            </Container>
        </div>
    )
}

export default ProductsRow;