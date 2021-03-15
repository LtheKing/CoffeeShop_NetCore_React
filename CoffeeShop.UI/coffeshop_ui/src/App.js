import React, { Component, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './App.scss';

//components
import ListCoffee from './components/coffee/ListCoffee';
import Home from './components/coffee/Home';
import AddCoffe from './components/coffee/AddCoffee'
import EditCoffee from './components/coffee/EditCoffee'
import Login from './components/Login'
import CoffeeArranger from './components/coffee/CoffeeArranger'

//context
import CoffeeState from './context/CoffeeState';

function App() {
  return (

    <CoffeeState>
      <Router>
        <Switch>
          <Route path='/' exact component={Login} />
          <Route path='/Home' component={Home} />
          <Route path='/AddCoffee' component={AddCoffe} />
          <Route path='/ListCoffee' component={ListCoffee} />
          <Route path='/CoffeeArranger' component={CoffeeArranger} />
          <Route path='/EditCoffee/:id' component={EditCoffee} />
        </Switch>
      </Router>
    </CoffeeState>

  );
}

export default App;

