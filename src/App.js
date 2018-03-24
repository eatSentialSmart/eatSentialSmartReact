import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Views/Home';
import Layout from './Views/Layout';
import Article from './Views/Article';
import Video from './Views/Video';

export default props => (

  <Router>
    <div className="App">
      <Layout />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/articles" component={Article} />
        <Route exact path="/videos" component={Video} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  </Router>
)
