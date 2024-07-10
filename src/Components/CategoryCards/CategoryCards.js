import { Container, Row } from "react-bootstrap";
import CategoryCard from "./CategoryCard";


function CategoryCards() {
    const categoryItems = [
        {id:1, name: "men's clothing", icon: "apparel"},
        {id:2, name: "women's clothing", icon: "checkroom"},
        {id:3, name: "jewelery", icon: "diamond"},
        {id:4, name: "electronics", icon: "headphones"}
    ];

    return (
        <Container className="mt-5">
            <Row>
                {categoryItems.map(item=>{
                    return <CategoryCard key={item.id} {...item}/>
                })}
            </Row>
        </Container>
    )
}

export default CategoryCards