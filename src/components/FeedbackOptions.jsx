import React from 'react';
import PropTypes from 'prop-types';
import { ButtonGroup, Button } from 'react-bootstrap';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ButtonGroup className="btn-group-lg" onClick={onLeaveFeedback}>
      {options.map(option => {
        return (
          <Button
            variant="light"
            onClick={() => onLeaveFeedback(option)}
            key={option}
            className={option}
          >
            {option}
          </Button>
        );
      })}
    </ButtonGroup>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
