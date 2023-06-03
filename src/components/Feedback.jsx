import React from 'react';
import { Container } from 'react-bootstrap';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Section from './Section';
import Notification from './Notification';

const Feedback = ({ state, onLeaveFeedback }) => {
  const total = state.good + state.neutral + state.bad;
  const positivePercentage =
    total > 0 ? Math.round((state.good * 100) / total) : 0;

  return (
    <Container className="p-5">
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(state)}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>
      <Section title="Statistics">
        {total > 0 ? (
          <Statistics
            good={state.good}
            neutral={state.neutral}
            bad={state.bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        ) : (
          <Notification message="There is no feedback given" />
        )}
      </Section>
    </Container>
  );
};
export default Feedback;
