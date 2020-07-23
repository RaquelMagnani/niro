import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import AuthorCard from "../AuthorCard/AuthorCard";
import { Link } from "react-router-dom";
import "./continentList.css";

const filterContinent = (list, continenteName) => {
  return list.filter((book) => book.Continente === continenteName);
};
class ContinentList extends Component {
  constructor(props) {
    super(props);
    this.state = { authors: [] };
  }
  componentDidMount() {
    fetch("https://viagem-literaria.firebaseio.com/.json")
      .then((response) => response.json())
      .then((data) => this.setState({ authors: data }));
  }

  filterCountry() {
    const allCountries = filterContinent(
      this.state.authors,
      this.props.continent
    ).map((author) => author.Pais);
    const countries = allCountries.filter((item, index) => {
      return allCountries.indexOf(item) === index;
    });
    return countries.sort();
  }

  render() {
    const { authors } = this.state;
    const { continent } = this.props;

    return (
      <>
        <Row className="container">
          <Col md="12">
            <h1 className="mt-5">{continent}</h1>
          </Col>
        </Row>

        <Row className="container mt-5">
          {filterContinent(authors, continent).map((item) => (
            <AuthorCard name={item.Autor} pais={item.Pais} 
            color={item.Continente} />
          ))}
        </Row>
        <Row className="container">
          <Col md="12">
            <h5 className="mt-5 text-align-center ">
              Conhece mais alguém para indicar?{" "}
              <Link className="link--container" to="/colabore">
                Colabore
              </Link>
            </h5>
          </Col>
        </Row>
      </>
    );
  }
}

export default ContinentList;
