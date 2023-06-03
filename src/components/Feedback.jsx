import React from 'react';
import { Component } from 'react';
import { Container } from 'react-bootstrap';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Section from './Section';
import Notification from './Notification';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = option => {
    this.setState(prevState => {
      return { [option]: prevState[option] + 1 };
    });
  };

  render() {
    const total = this.state.good + this.state.neutral + this.state.bad;
    const positivePercentage =
      total > 0 ? Math.round((this.state.good * 100) / total) : 0;

    return (
      <Container className="p-5">
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          {total > 0 ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          ) : (
            <Notification message="There is no feedback given" />
          )}
        </Section>
      </Container>
    );
  }
}

export default Feedback;
