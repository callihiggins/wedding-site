import React, { Component } from 'react';
import 'airbnb-js-shims';
import { BrowserRouter as Router, Route } from "react-router-dom";
import ScrollToTop from 'react-router-scroll-top'
import Menu from './Menu';
import Home from './Home';
import RSVP from './RSVP';
import FAQ from './FAQ';
import Registry from './Registry';
import Travel from './TravelInfo';
import Details from './Details';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <ScrollToTop>
          <div className="app">
            <header className="app-header">
              <Menu />
            </header>
            <div className="app-body">
              <Route exact path="/" component={Home} />
              <Route path="/travel" component={Travel} />
              <Route path="/details" component={Details} />
              <Route path="/registry" component={() => { 
                window.location.href = 'https://www.zola.com/registry/calliandlucas/'; 
                return null;
              }}/>
              <Route path="/rsvp" component={RSVP} />
              <Route path="/faq" component={FAQ} />
            </div>
          </div>
        </ScrollToTop>
      </Router>
    );
  }
}

export default App;

