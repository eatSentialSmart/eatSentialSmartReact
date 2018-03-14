import React, { Component } from 'react';
import './App.css';
import Layout from './Views/Layout';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Video from './Views/Video';
import Home from './Views/Home';
import Footer from './Components/footer';
import Article from './Views/Article';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
        <Layout />
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
