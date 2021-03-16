import React, { Component, useContext, useReducer, useState } from 'react';
import { Link, useHistory } from "react-router-dom"
import axios from 'axios';
import CoffeeContext from "../../context/CoffeeContext"
import alertify from 'alertifyjs';
import 'alertifyjs/build/css/alertify.css';

const AddCoffe = () => {
    const { insertCoffee, coffees } = useContext(CoffeeContext);
    const history = useHistory();
    const [ coffee, setCoffee ] = useState({
        Name: '',
        Size: '',
        Price: 0
    });

    const nameOnChange = (e) => {
        setCoffee({
            ...coffee,
            [e.target.name]: e.target.value
        });
    }

    const priceOnChange = (e) => {
        setCoffee({
            ...coffee,
            [e.target.name]: parseInt(e.target.value)
        });
    }

    const sizeOnChange = (e) => {
        setCoffee({
            ...coffee,
            [e.target.name]: e.target.value
        });
    }

    const onSubmit = (e) => {
        e.preventDefault();
        insertCoffee(coffee);
        alertify.success('new Coffee added');
        history.push('/ListCoffee');
    }

    return (
        <div className="container_form add_coffee_form">
            <h1 align="center">diss is insert page</h1>

            <form action="" method="" align="center" onSubmit={onSubmit}>
                <div>
                    <label htmlFor="Name">Name :</label>
                    <input type="text" name="Name" id="input_name" onChange={nameOnChange} />
                </div>

                <div>
                    <label htmlFor="">Price :</label>
                    <input type="number" name="Price" id="input_price" onChange={priceOnChange} />
                </div>

                <div>
                    <label htmlFor="">Size :</label>
                    <input type="text" name="Size" id="input_size" onChange={sizeOnChange} />
                </div>

                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}

export default AddCoffe