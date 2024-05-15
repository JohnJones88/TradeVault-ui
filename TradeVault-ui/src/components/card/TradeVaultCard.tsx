import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import React from 'react';
import { Col, Row } from 'react-bootstrap';

interface CardProps {
  id: number
  image: string
  name: string
  description: string
  age: number
  condition: string
}

function TradeVaultCard({ id, image, age, name, description, condition }: CardProps) {
  return (
    <div className="container">
      <div className="" style={{ width: '18rem', height: "15rem", marginBottom: "20px", border: "solid" }}>
        <Row>
          <Col>
            1 of 2
            <img className="Image"></img>
          </Col>
          <Col>
            2 of 2
            <div>
              <p className='Name'>{name}</p>
              <p className='Description'>{description}</p>
              <p className='Condition'>{condition}</p>
              <a href="#" className="btn btn-primary">View</a>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}


export default TradeVaultCard;