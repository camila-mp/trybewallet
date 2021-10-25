import React from 'react';
import { Route } from 'react-router-dom';
import Login from './pages/Login';
import Wallet from './pages/Wallet';

class App extends React.Component {
  render() {
    return (
      <div className="app-div">
        <h2>Oi</h2>
        <Route exact path="/" component={ Login } />
        <Route path="/carteira" component={ Wallet } />
      </div>
    );
  }
}

export default App;
