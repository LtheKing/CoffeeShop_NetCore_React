import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Link } from 'react-router-dom';

//components
import EditCoffee from './EditCoffee';
import { Button } from 'reactstrap';

export default class ListCoffee extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            items: []
        }
    }

    componentDidMount() {
        const aksios = axios.create({
            baseURL: 'https://localhost:5001/api',
            timeout: 1000,
            headers: { 'X-Custom-Header': 'foobar' }
        });

        aksios.get('/Coffee')
            .then(response => {
                this.setState(
                    { 
                        items: response.data,
                        isLoaded: true 
                    }
                )
            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {
        var { isLoaded, items } = this.state;
        var data = items.value;
        if (!isLoaded) {
            return <div>Loading. . . .</div>
        } else {

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
                            {data.map(item => (
                                <tr key={item.id}>
                                    <td key={item.name}>{item.name}</td>
                                    <td key={item.price}>{item.price}</td>
                                    <td key={item.size}>{item.size}</td>
                                    <td>
                                        <Link to = {`/EditCoffee/${item.id}`}>
                                            <Button>Edit</Button>
                                        </Link>

                                        <Link to='/DeleteCoffee'>
                                            <button>Delete</button>
                                        </Link>
                                    </td>
                                </tr>
                            ))}

                        </tbody>
                    </table>

                    <a href="/AddCoffee">More Coffee ?</a>
                </div>
            );
        }

    }
}