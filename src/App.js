import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import { Helmet } from 'react-helmet';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Helmet>
            <style>{'body { background-color: #44bd32; }'}</style>
          </Helmet>
          <Switch>
            <Route path="/login" component={Login} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
