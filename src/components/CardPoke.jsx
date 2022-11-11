import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Button, Card } from 'react-bootstrap';

const CardPoke = (props) => {
  return (
    <div className='col'>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={props.src} />
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  )
}

export default CardPoke