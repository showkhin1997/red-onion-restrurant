import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './BreakFastItem.css';

const BreakFastItem = (props) => {
    // console.log(props.item)
    const { title, price, description, img } = props.item;
    return (
        <Col>
            <Card className="item-card-Style mb-5 h-100 w-75 mx-auto">
                <Card.Img variant="top" src={img} className="w-50 mx-auto mt-3 mb-3" />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <h4>Price: ${price}</h4>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default BreakFastItem;