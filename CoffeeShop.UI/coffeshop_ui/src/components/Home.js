import React, {Component} from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return(
        <div>
            <h1>Welcome to Coffee Shop Web App</h1>
            <Link to="/ListCoffee">Coffee List</Link>
            <Link to="/AddCoffee">Add List</Link>
        </div>

    );
}

export default Home;
