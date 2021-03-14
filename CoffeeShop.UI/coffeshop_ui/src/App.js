import React, { Component, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './App.scss';

//components
import ListCoffee from './components/coffee/ListCoffee';
import Home from './components/coffee/Home';
import AddCoffe from './components/coffee/AddCoffee'
import EditCoffee from './components/coffee/EditCoffee'
import Login from './components/Login'

//context
import CoffeeState from './context/CoffeeState';
import TestPage from './components/TestPage';

function App() {
  return (

    <CoffeeState>
      <Router>
          <Switch>
            <Route path='/' exact component={Login} />
            <Route path='/Home'  component={Home} />
            <Route path='/AddCoffee' component={AddCoffe} />
            <Route path='/ListCoffee' component={ListCoffee} />
            <Route path='/EditCoffee/:id' component={EditCoffee} />
            <Route path='/TestPage' component={TestPage} />
          </Switch>
      </Router>
    </CoffeeState>

  );
}

export default App;

