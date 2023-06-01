import React from 'react';
import { Component } from 'react';
import { Container, Row} from 'react-bootstrap';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleBtnClick = e => {
    if (e.target.dataset.option === 'good') {
      this.setState(prevState => ({ good: prevState.good + 1 }));
    } else if (e.target.dataset.option === 'neutral') {
      this.setState(prevState => ({ neutral: prevState.neutral + 1 }));
    } else if (e.target.dataset.option === 'bad') {
      this.setState(prevState => ({ bad: prevState.bad + 1 }));
    }
  };

  
  render() {
    const total = this.state.good + this.state.neutral + this.state.bad;
    const positivePercentage=Math.round((this.state.good * 100) / total);
    return (
      <Container>
        <h2>Please leave feedback</h2>
        <Row className="justify-content-center">
          <FeedbackOptions options={['good','neutral','bad']} onLeaveFeedback={this.handleBtnClick}/>
        </Row>
        <h2>Statistics</h2>
        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={total}
          positivePercentage={positivePercentage}
        />
      </Container>
    );
  }
}

export default Feedback;
