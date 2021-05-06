import "./App.css";
import React from "react";
import { Card, Button } from "react-bootstrap";
import SearchFrom from "./Componets/SearchFrom";
import Chart from "./Componets/Chart";
import dotenv from "dotenv";
import {
  getStock,
  getStockList,
  getAllStockList,
} from "./handlers/Stock-Handler";

dotenv.config({
  path: "./.env",
});

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stockList: [],
      completeStockList: [],
      stock: "",
      result: [],
    };
  }

  async componentDidMount() {
    let completeStockList = await getAllStockList();
    this.setState({
      completeStockList,
      stockList: completeStockList,
    });
  }

  handleSearchTextChange = async (event) => {
    if (event.target.value.length != 0) {
      let stockList = await getStockList(event.target.value);
      this.setState({
        stockList,
      });
    } else {
      let stockList = this.state.completeStockList;
      this.setState({
        stockList,
      });
    }
  };

  handleSearchSubmit = async (event) => {
    event.stopPropagation();
    event.preventDefault();
    let result = await getStock(this.state.stock);
    this.setState({
        result,
      });
    console.log(result);
  };

  handleAutocompleteChange = (event, values) => {
    this.setState({
      stock: values,
    });
  };

  render() {
    console.log(this.state.result.length);
    return (
      <div className="App">
        <SearchFrom
          handleSearchTextChange={this.handleSearchTextChange}
          handleSearchSubmit={this.handleSearchSubmit}
          stockList={this.state.stockList}
          handleAutocompleteChange={this.handleAutocompleteChange}
        ></SearchFrom>
       {this.state.result.length > 0 ? <Card className="Card">
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Chart data={this.state.result}/>
          </Card.Body>
        </Card>: null}
      </div>
    );
  }
}
