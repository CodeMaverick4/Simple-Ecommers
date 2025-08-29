import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { CartContex } from '../context/cartContext';

function CardComponent({ product }) {
    const { setCartItems } = useContext(CartContex);
    const handleAddItem = () => {
        setCartItems(prev=>(
            {...prev , items: [...prev.items,product] , total:prev.total += product.price }
            ))
    }
    return (
        <div className=''>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={product.imageUrl} />
                <Card.Body>
                    <Card.Title>{product.title}</Card.Title>

                    <div className='d-flex justify-content-between mt-4'>
                        <span>$ {product.price}</span>
                        <Button variant="primary" className='card-btn' onClick={handleAddItem}>Add to Cart</Button>
                    </div>

                </Card.Body>
            </Card>
        </div>
    );
}

export default CardComponent;