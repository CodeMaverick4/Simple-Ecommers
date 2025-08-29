import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CardComponent({ product }) {

    return (
        <div className=''>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={product.imageUrl} />
                <Card.Body>
                    <Card.Title>{product.title}</Card.Title>

                    <div className='d-flex justify-content-between mt-4'>
                        <span>$ {product.price}</span>
                        <Button variant="primary" className='card-btn'>Add to Cart</Button>
                    </div>

                </Card.Body>
            </Card>
        </div>
    );
}

export default CardComponent;