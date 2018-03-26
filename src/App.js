import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Recipe from './Views/Recipe';
import DesktopLayout from './Views/DesktopLayout';
import MobileLayout from './Views/MobileLayout';
import Article from './Views/Article';
import Video from './Views/Video';
import Footer from './Views/Footer';

export default props => (

  <Router>
    <div className="App">
      <DesktopLayout>
      <Switch>
        <Route exact path="/" component={Recipe} />
        <Route exact path="/articles" component={Article} />
        <Route exact path="/videos" component={Video} />
        <Route path="/" component={Recipe} />
      </Switch>
      </DesktopLayout>
      <MobileLayout>
      <Switch>
        <Route exact path="/" component={Recipe} />
        <Route exact path="/articles" component={Article} />
        <Route exact path="/videos" component={Video} />
        <Route path="/" component={Recipe} />
      </Switch>
      </MobileLayout>
      <Footer />
    </div>
  </Router>
)
