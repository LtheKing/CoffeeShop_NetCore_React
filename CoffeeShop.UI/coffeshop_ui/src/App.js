import React, { Component, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './App.scss';

//components
import ListCoffee from './components/ListCoffee';
import ListCoffee2 from './components/ListCoffee2';
import Home from './components/Home';
import AddCoffe from './components/AddCoffee'
import EditCoffee from './components/EditCoffee'

//context
import CoffeeState from './context/CoffeeState';
import TestPage from './components/TestPage';

function App() {
  return (

    <CoffeeState>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/AddCoffee">More Coffee</Link>
              </li>
              <li>
                <Link to="/ListCoffee">List Coffee</Link>
              </li>
              <li>
                <Link to="/TestPage">Test Page</Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/AddCoffee' component={AddCoffe} />
            <Route path='/ListCoffee' component={ListCoffee2} />
            <Route path='/EditCoffee/:id' component={EditCoffee} />
            <Route path='/TestPage' component={TestPage} />
          </Switch>
        </div>
      </Router>
    </CoffeeState>

  );
}

export default App;

