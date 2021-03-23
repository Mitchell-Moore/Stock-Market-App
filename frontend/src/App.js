import "./App.css";
import React from "react";
import { Card, Button } from "react-bootstrap";
import SearchFrom from "./Componets/SearchFrom";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: "",
    };
  }

  handleSearchTextChange = (event) => {
    this.setState({
      title: event.target.value,
    });
  };

  handleSearchSubmit = (event) => {
    event.stopPropagation();
    event.preventDefault();
  };

  render() {
    return (
      <div className="App">
        <SearchFrom
          handleSearchTextChange={this.handleSearchTextChange}
          handleSearchSubmit={this.handleSearchSubmit}
        ></SearchFrom>
        <Card className="Card">
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
