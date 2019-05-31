import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom'

import Abstract from './pages/Abstract'
import About from './pages/About'
import Figurative from './pages/Figurative'
import SidePanel from './components/SidePanel'

import 'styles/global.css'

export default class App extends Component {
  render() {
    return (
      <div>
        <SidePanel/>
        <Switch>
          <Route exact path="/about" component={About} />
          <Route exact path="/figurative" component={Figurative}/>
          <Route exact path="/abstract" component={Abstract}/>
          <Route component={Abstract}/>
        </Switch>
      </div>
    )
  }
}
