import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import DinnerItem from '../DinnerItem/DinnerItem';

const DinnerItems = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('./dinnerItem.json')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])
    return (
        <div id="dinner">
            <Row xs={1} md={3} sm={2} className="g-5 mt-5">
                {
                    items.map(item => <DinnerItem
                        key={item.id}
                        item={item}
                    ></DinnerItem>)
                }
            </Row>
        </div>
    );
};

export default DinnerItems;