import React, { Component, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import '../../App.scss';

function CoffeeArranger(props) {
    console.log(props);
    return (
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
                    <li className="menu_logout">
                        <Link to="/#">Logout</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default CoffeeArranger;

