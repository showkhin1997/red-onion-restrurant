import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import LunchItem from '../LuchItem/LunchItem';

const LunchItems = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('./luchItem.json')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])

    return (
        <div id="lunch">
            <Row xs={1} md={3} sm={2} className="g-5 mt-5">
                {
                    items.map(item => <LunchItem
                        key={item.id}
                        item={item}
                    ></LunchItem>)
                }
            </Row>
        </div>
    );
};

export default LunchItems;