import React, { Component } from "react";
import { Form, Row, Col } from "react-bootstrap";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { TextField, Button } from "@material-ui/core";

import "../App.css";

export default class SearchFrom extends Component {
  render() {
    return (
      <div className="SearchFrom">
        <Form onSubmit={this.props.handleSearchSubmit}>
          <Row className="Row">
            <Col md="auto" className="SearchCol">
              <Autocomplete
                disableEnforceFocus
                disableClearable
                freeSolo
                options={this.props.stockList.map(
                  (option) => option.Symbol + ", " + option.Name
                )}
                onChange={this.props.handleAutocompleteChange}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Search for a Stock"
                    type="text"
                    className="textSearchField"
                    variant="outlined"
                    InputProps={{ ...params.InputProps, type: "search" }}
                    onChange={this.props.handleSearchTextChange}
                  />
                )}
              />
            </Col>
            <Col className="SearchCol">
              <Button type="submit" size="large">
                <i className="fa fa-search" style={{ fontSize: "27px" }} />
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
    );
  }
}
