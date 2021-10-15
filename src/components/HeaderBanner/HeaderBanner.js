import React from 'react';
import { FormControl, InputGroup, Button } from 'react-bootstrap';
import "./HeaderBanner.css";

const HeaderBanner = () => {
    return (
        <div className="search-field">
            <h1 className="word-wrap mb-3">Best food waiting for your belly</h1>
            <InputGroup className="mx-auto w-25" size="sm">
                <FormControl
                    placeholder="Search food items"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                />
                <Button variant="danger" id="button-addon2" size="sm">
                    Search
                </Button>
            </InputGroup>
        </div>
    );
};

export default HeaderBanner;