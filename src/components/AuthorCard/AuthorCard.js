import React from 'react';
import { Card, CardTitle, CardText, Col } from 'reactstrap';
import './authorCard.css';
//import books from "../../services/api";

const AuthorCard = (props) => {
  return (
    <Col sm="4">
      <Card className=" card-container" body>
        <CardTitle>{props.name}</CardTitle>
        <CardText>{props.pais} </CardText>
      </Card>
    </Col>
  );
};

export default AuthorCard;
