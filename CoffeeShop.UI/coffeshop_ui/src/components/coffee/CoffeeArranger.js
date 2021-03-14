import React, { Component, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
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

function CoffeeArranger() {
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
                            <li className="menu_logout">
                                <Link to="/#">Logout</Link>
                            </li>
                        </ul>
                    </nav>

                    <Switch>
                        <Route path='/' exact component={Home} />
                        <Route path='/Login' component={Login} />
                        <Route path='/AddCoffee' component={AddCoffe} />
                        <Route path='/ListCoffee' component={ListCoffee} />
                        <Route path='/EditCoffee/:id' component={EditCoffee} />
                        <Route path='/TestPage' component={TestPage} />
                    </Switch>
                </div>
            </Router>
        </CoffeeState>

    );
}

export default CoffeeArranger;

