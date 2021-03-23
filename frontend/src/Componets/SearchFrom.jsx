import React, { Component } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import "../App.css";

export default class SearchFrom extends Component {
  render() {
    return (
      <div className="SearchFrom">
        <Form onSubmit={this.props.handleSearchSubmit}>
          <Row className="Row">
            <Col md="auto" className="SearchCol">
              <Form.Control
                type="text"
                placeholder="Search for a Stock"
                className="textSearchField"
                onChange={this.props.handleSearchTextChange}
                required
              />
            </Col>
            <Col className="SearchCol">
              <Button variant="primary" type="submit" size="sm">
                <i className="fa fa-search" style={{ fontSize: "27px" }} />
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
    );
  }
}
