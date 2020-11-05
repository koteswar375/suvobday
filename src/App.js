import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import MastHead from './components/MastHead/MastHead';
import AboutMe from './components/About/About';
import Gallery from './components/Gallery/Gallery';
import * as M from 'materialize-css';
import { Route, Switch } from 'react-router-dom';
import Contact from './components/Contact/Contact';
class App extends Component {


  componentDidMount() {
    M.AutoInit();
    var elem = document.querySelector('.modal');
    var instance = M.Modal.getInstance(elem);
    if (new Date().toDateString() === "Thu Nov 05 2020") {
      instance.open()
    }
  }

  render() {
    return (

      <div className="App">
        <div id="modal1" className="modal">
          <div className="modal-content">
            <h5>Happy Birthday Suvojit</h5>
            <p>To the one and only 50 kg model, pro-affiliate marketer, a wonderful dancer cum artist, the guy who gave mesmerizing performance as "Mimo", the guy who can make gossip broadcast better than radiomirchi, a true friend sometimes pain in the ass, fun-to-have around, speaks from the heart, most of is bullshit anyways <span role="img">&#128540;</span></p>
            <p>Wish you all the best and hope that you fulfill your passion and get all the fame, money, respect you wish for.</p>
            <p>As shankar puts it, Happy Birthday $bs#!*@dk </p>
          </div>
        </div>
        <Header />
        <Switch>
          <Route path="/suvobday" render={props => <div>
            <MastHead />
            <AboutMe />
            <Gallery />
          </div>} exact />
          <Route path="/contact" component={Contact} />
          <Route path="/" render={props => <div>
            <MastHead />
            <AboutMe />
            <Gallery />
          </div>} />
        </Switch>
      </div>
    )
  }

};

export default App;