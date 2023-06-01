import React from 'react';
import { Component } from 'react';
import { Container, Row, ButtonGroup, Button, Table } from 'react-bootstrap';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleBtnClick = e => {
    if (e.target.dataset.good) {
      this.setState(prevState => ({ good: prevState.good + 1 }));
    } else if (e.target.dataset.neutral) {
      this.setState(prevState => ({ neutral: prevState.neutral + 1 }));
    } else if (e.target.dataset.bad) {
      this.setState(prevState => ({ bad: prevState.bad + 1 }));
    }
  };

  render() {
    const total = this.state.good + this.state.neutral + this.state.bad;
    return (
      <Container>
        <h2>Please leave feedback</h2>
        <Row className="justify-content-center">
          <ButtonGroup className="btn-group-lg" onClick={this.handleBtnClick}>
            <Button variant="outline-success" data-good>
              Good
            </Button>
            <Button variant="outline-warning" data-neutral>
              Neutral
            </Button>
            <Button variant="outline-danger" data-bad>
              Bad
            </Button>
          </ButtonGroup>
        </Row>
        <h2>Statistics</h2>
        <Table striped borderless className="w-25">
          <tbody>
            <tr>
              <td className="fw-bold">Good:</td>
              <td>{this.state.good}</td>
            </tr>
            <tr>
              <td className="fw-bold">Neutral:</td>
              <td>{this.state.neutral}</td>
            </tr>
            <tr>
              <td className="fw-bold">Bad:</td>
              <td>{this.state.bad}</td>
            </tr>
            <tr>
              <td className="fw-bold">Total:</td>
              <td>{total}</td>
            </tr>
            <tr>
              <td className="fw-bold">Positive Feedback:</td>
              <td>{Math.round((this.state.good * 100) / total) || '0'}%</td>
            </tr>
          </tbody>
        </Table>
      </Container>
    );
  }
}

export default Feedback;
