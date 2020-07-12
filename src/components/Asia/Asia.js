import React, {Component} from 'react';
import { Card, CardTitle, CardText, Row, Col } from "reactstrap";
import './asia.css'

const filterContinent = (list,continenteName)=>{
    return list.filter(book=>book.Continente=== continenteName)
}
class Asia extends Component {
    constructor(props) {
      super(props);
      this.state = { authors: [] };
    }
    componentDidMount() {
      fetch("https://viagem-literaria.firebaseio.com/.json")
        .then((response) => response.json())
        .then((data) => this.setState({ authors: data }));
    };

    render() {
      const { authors } = this.state;
      const {continent}= this.props
      
      return (
        <Row className="container">
          {filterContinent(authors,continent).map((book) => (
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



export default Asia;
