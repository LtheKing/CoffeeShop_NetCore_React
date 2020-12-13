import React, { useEffect, useContext } from "react"
import { BrowserRouter as Link } from 'react-router-dom';
import {
    Form,
    FormGroup,
    Label,
    Input,
    Button
} from "reactstrap";
//context
import CoffeeContext from "../context/CoffeeContext"
import '../ListCoffee.scss';

const CoffeeList = () => {
    const { getCoffee, coffees, editCoffee, deleteCoffee, loading } = useContext(CoffeeContext);
    useEffect(() => {
        getCoffee()
    }, [coffees])

    const onEditClick = (e) => {
        console.log(e)
    }

    return (
        <div className="App">
            <h1>Coffee List</h1>

            <table align='center'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Size</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {coffees.map(item => (
                        <tr key={item.id}>
                            <td key={item.name}>{item.name}</td>
                            <td key={item.price}>{item.price}</td>
                            <td key={item.size}>{item.size}</td>
                            <td className="td_buttons">
                                {/* <Link to={`/EditCoffee/${item.id}`} color="warning" className="btn btn-warning mr-1">
                                    <Button>Edit</Button>
                                </Link> */}

                                <a className="lc_btnEdit" href={`/EditCoffee/${item.id}`}>Edit</a> &nbsp;
                                <Button className="lc_btnDelete" onClick={() => deleteCoffee(item.id)}>Delete</Button>
                            </td>
                        </tr>
                    ))}

                </tbody>
            </table>

            <a href="/AddCoffee">More Coffee ?</a>
        </div>
    )
}

export default CoffeeList