import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import React from 'react';
import "./TradeVaultCard.css"
import { Badge, Col, Row } from 'react-bootstrap';

interface CardProps {
  id: number
  imageUrl: string
  name: string
  description: string
  age: number
  condition: string
}

function TradeVaultCard({ id, imageUrl, age, name, description, condition }: CardProps) {
  console.log(imageUrl)
  return (
    <div className='card tv-card p-3'>
      <Row>
        <Col className='col-5'>
          <img className="tv-card-image" src={imageUrl}></img>
        </Col>
        <Col className='col-7 ps-1'>
          <div>
            <h5 className='tv-card-name'>{name}</h5>
            <p className='tv-card-description'>{description}</p>
            <h6 className='tv-card-condition float-end'><Badge bg="primary">{condition}</Badge></h6>
          </div>
        </Col>
      </Row>
    </div>
  );
}


export default TradeVaultCard;