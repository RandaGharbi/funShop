import React, { Component } from 'react';
import Routes from './routes/routes';

class App extends Component {
  constructor() {
    super();
    this.state = {
      appName: 'Login with Facebook and Google using ReactJS and RESTful APIs',
    };
  }

  render() {
    return (
      <div>
        <Routes name={this.state.appName} />
      </div>
    );
  }
}
export default App;
