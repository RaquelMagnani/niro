import React, {Component} from 'react';
import {Row} from "reactstrap";
import AuthorCard from '../AuthorCard/AuthorCard'
import './continentList.css'
import DropDown from '../DropDown/DropDown';

const filterContinent = (list,continenteName)=>{
    return list.filter(book=>book.Continente=== continenteName)
}
class ContinentList extends Component {
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
        <>
        <Row>
       
        </Row>
        <Row className="container mt-5">
          {filterContinent(authors,continent).map((book) => (
            <AuthorCard name={book.Autor} 
            pais={book.Pais}/>
          ))}
        </Row>
        </>
      );
    }
  }



export default ContinentList;
