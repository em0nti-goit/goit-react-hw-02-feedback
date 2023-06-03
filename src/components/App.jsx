import Feedback from './Feedback';
import React, { Component } from 'react';

class App extends Component {
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
    return <Feedback state={{...this.state}} onLeaveFeedback={this.onLeaveFeedback}/>;
  }
};

export default App;
