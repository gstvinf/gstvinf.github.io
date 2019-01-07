import React, { Component } from 'react';
import logo from './logo.svg';
import perfil from "./img/perfil.jpg"
import { Image } from 'react-bootstrap';

import './App.css';
// import {
//   Route,
//   NavLink,
//   HashRouter
// } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Work from "./pages/Work";
import Contact from "./pages/Contact";


/**
 * helper:
 * https://diessi.ca/
 * https://react-bootstrap.github.io
 * https://www.kirupa.com/react/creating_single_page_app_react_using_react_router.htm
 * https://github.com/ReactTraining/react-router
 * 
 */

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>Home</h2>
        {/* <img src={perfil} width={300} height={300} /> */}
        <Image src={perfil} circle width={300} height={300} />
        <div>
          descrição descrição descrição descrição descrição descrição descrição descrição descrição descrição descrição descrição descrição descrição descrição
       </div>
      </div>
      // <HashRouter>
      //   <div>
      //     <h1>Simple SPA</h1>
      //     <ul className="header">
      //       <li><NavLink to="/">Home</NavLink></li>
      //       <li><NavLink to="/about">About</NavLink></li>
      //       <li><NavLink to="/work">Work</NavLink></li>
      //       <li><NavLink to="/contact">Contact</NavLink></li>
      //     </ul>
      //     <div className="content">
      //       <Route exact path="/" component={Home} />
      //       <Route path="/about" component={About} />
      //       <Route path="/work" component={Work} />
      //       <Route path="/contact" component={Contact} />
      //     </div>
      //   </div>
      // </HashRouter>
    );
  }
}

export default App;
