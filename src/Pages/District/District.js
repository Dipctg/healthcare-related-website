import React from 'react';
import { ListGroup } from 'react-bootstrap';

const District = () => {
    return (
        <div>
            <h3>Choose Your Location</h3>

            <div>
                <ListGroup as="ul">
                    <ListGroup.Item as="li" >
                        Chittagong
                    </ListGroup.Item>
                    <ListGroup.Item as="li">Dhaka</ListGroup.Item>
                    <ListGroup.Item as="li" >
                        Khulna
                    </ListGroup.Item>
                    <ListGroup.Item as="li">Shylet</ListGroup.Item>
                </ListGroup>
            </div>
        </div>
    );
};

export default District;