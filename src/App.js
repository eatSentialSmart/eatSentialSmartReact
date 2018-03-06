import React, { Component } from 'react';
import './App.css';
import Layout from './Views/Layout';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Video from './Views/Video';
import Home from './Views/Home';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
        <Layout />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/videos" component={Video} />
            <Route path="/" component={Home} />
          </Switch>
          
        </div>
      </Router>
    );
  }
}

export default App;
