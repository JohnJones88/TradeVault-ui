import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import React from 'react';

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
      <Card className="" style={{ width: '18rem', height: '30vh' }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>{age}</ListGroup.Item>
          <ListGroup.Item>{condition}</ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <Card.Link href="#">View</Card.Link>
          <Card.Link href="#">Trade</Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
}


export default TradeVaultCard;