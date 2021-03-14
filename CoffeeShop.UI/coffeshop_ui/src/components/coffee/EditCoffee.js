import React, { useEffect, useContext, useState } from 'react'
import CoffeeContext from "../../context/CoffeeContext"
import { Link, useHistory } from "react-router-dom"
import {
    Form,
    FormGroup,
    Label,
    Input,
    Button
} from "reactstrap";

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
        history.push("/ListCoffee")
    }

    return (
        <div>
            <h1>this is edit page</h1>
            <Form onSubmit={onSubmit} align="center">
                <FormGroup>
                    <Label>Name</Label>
                    <Input type="text" value={selectedCoffee.name} onChange={onChange} name="name" placeholder="Enter Coffee Name" required></Input>

                    <Label>Size</Label>
                    <Input type="text" value={selectedCoffee.size} onChange={onChange} name="size" placeholder="Size" required></Input>

                    <Label>Price</Label>
                    <Input type="number" value={selectedCoffee.price} onChange={onChange} name="price" placeholder="Price" required></Input>

                </FormGroup>
                <Button type="submit">Edit Coffee</Button>
                <Button className="btn btn-danger ml-2"><Link to="/">Cancel</Link></Button>
            </Form>
        </div>
    )
}

export default EditCoffee
