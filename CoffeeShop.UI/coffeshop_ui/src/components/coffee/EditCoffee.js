import React, { useEffect, useContext, useState } from 'react'
import CoffeeContext from "../../context/CoffeeContext"
import { Link, useHistory } from "react-router-dom"
import alertify from 'alertifyjs';
import 'alertifyjs/build/css/alertify.css';

const EditCoffee = (props) => {

    const { getCoffee, updateCoffee, coffees } = useContext(CoffeeContext);
    const [selectedCoffee, setSelectedCoffee] = useState({
        id: 0,
        name :'',
        size :'',
        price: 0 
    });

    const history = useHistory();
    const currentCoffeeId = props.match.params.id;

    useEffect(() => {
        if (coffees.length == 0) {
            getCoffee()
        } else {
            const coffeeId = parseInt(currentCoffeeId);
            const selectedCoffee = coffees.find(coffee => coffee.id === coffeeId);
            setSelectedCoffee(selectedCoffee);
        }
    }, [coffees])

    const onChange = (e) => {    
        setSelectedCoffee({
            ...selectedCoffee,
            [e.target.name]: e.target.type === 'number' ? parseInt(e.target.value) : e.target.value
        })
    }

    const onSubmit = (e) => {
        e.preventDefault();
        updateCoffee(selectedCoffee);
        alertify.success('Coffee Edited');
        history.push("/ListCoffee")
    }

    return (
        <div className="container_form add_coffee_form">
            <h1>this is edit page</h1>
            <form onSubmit={onSubmit} align="center">
                    <label>Name</label>
                    <input type="text" value={selectedCoffee.name} onChange={onChange} name="name" placeholder="Enter Coffee Name" required></input>

                    <label>Size</label>
                    <input type="text" value={selectedCoffee.size} onChange={onChange} name="size" placeholder="Size" required></input>

                    <label>Price</label>
                    <input type="number" value={selectedCoffee.price} onChange={onChange} name="price" placeholder="Price" required></input>

                <input type="submit" id="editCoffee_submitBtn" value="Submit"/>
                <button className="editCoffee_cancelBtn"><Link to="/ListCoffee">Cancel</Link></button>
            </form>
        </div>
    )
}

export default EditCoffee
