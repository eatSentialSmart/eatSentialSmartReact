import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Views/Home';
import DesktopLayout from './Views/DesktopLayout';
import MobileLayout from './Views/MobileLayout';
import Article from './Views/Article';
import Video from './Views/Video';
import Footer from './Views/Footer';

export default props => (

  <Router>
    <div className="App">
      <DesktopLayout />
      <MobileLayout />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/articles" component={Article} />
        <Route exact path="/videos" component={Video} />
        <Route path="/" component={Home} />
      </Switch>
      <Footer />
    </div>
  </Router>
)
