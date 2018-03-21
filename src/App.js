import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Video from './Views/Video';
import Home from './Views/Home';
import Footer from './Views/Footer';
import Article from './Views/Article';
import Navbar from './Views/Navbar';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/articles" component={Article} />
            <Route exact path="/videos" component={Video} />
            <Route path="/" component={Home} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
