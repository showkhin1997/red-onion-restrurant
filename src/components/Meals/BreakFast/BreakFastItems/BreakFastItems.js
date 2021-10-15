import React from 'react';
import { useEffect } from 'react';
import { Row } from 'react-bootstrap';
import { useState } from 'react';
import BreakFastItem from '../BreakFastItem/BreakFastItem';

const BreakFastItems = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('./breakfast.json')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])

    return (
        <div>
            <Row xs={1} md={3} sm={2} className="g-5 mt-5">
                {
                    items.map(item => <BreakFastItem
                        key={item.id}
                        item={item}
                    ></BreakFastItem>)
                }
            </Row>
        </div>
    );
};

export default BreakFastItems;