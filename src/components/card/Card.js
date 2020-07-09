import React, { Component } from "react";
import { Card, CardTitle, CardText, Row, Col } from "reactstrap";
import "./card.css";
//import books from "../../services/api";

class Tard extends Component {
  constructor(props) {
    super(props);
    this.state = { books: [] };
  }
  componentDidMount() {
    fetch("https://viagem-literaria.firebaseio.com/.json")
      .then((response) => response.json())
      .then((data) => this.setState({ books: data }));
  }
  render() {
    const { books } = this.state;
    console.log(books.filter(book=>book.Continente==='Asia'))
    
    return (
      <Row className="container">
        {books.map((book) => (
          <Col sm="3">
            <Card className=" card-container" body>
              <CardTitle>{book.Autor}</CardTitle>
              <CardText>{book.Pais} </CardText>
            </Card>
          </Col>
        ))}
      </Row>
    );
  }
}

export default Tard;
