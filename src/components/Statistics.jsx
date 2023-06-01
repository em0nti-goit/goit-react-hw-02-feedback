import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'react-bootstrap';

const Statistics = ({
  good = 0,
  neutral = 0,
  bad = 0,
  total = 0,
  positivePercentage = 0,
}) => {
  return (
    <Table striped borderless className="w-25">
      <tbody>
        <tr>
          <td className="fw-bold">Good:</td>
          <td>{good}</td>
        </tr>
        <tr>
          <td className="fw-bold">Neutral:</td>
          <td>{neutral}</td>
        </tr>
        <tr>
          <td className="fw-bold">Bad:</td>
          <td>{bad}</td>
        </tr>
        <tr>
          <td className="fw-bold">Total:</td>
          <td>{total}</td>
        </tr>
        <tr>
          <td className="fw-bold">Positive Feedback:</td>
          <td>{positivePercentage}%</td>
        </tr>
      </tbody>
    </Table>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
