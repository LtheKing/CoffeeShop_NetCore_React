import React, {useState, useEffect, useContext} from 'react';
import CoffeeContext from "../context/CoffeeContext"

const TestPage = () => {
    const [item, setItem] = useState(0);
    // const [coffees, setCoffees] = useState([]);
    const { getCoffee, editCoffee, coffee, coffees } = useContext(CoffeeContext);
    
    useEffect(() => {
        if (item == 1) {
            getCoffee()
        } else {
            editCoffee(2)
        }
    }, [item])

    return(
        <div>
            this is test page

            <button onClick={() => setItem(1)}>Get Coffees</button>
            <button onClick={() => setItem(2)}>Get One Coffee</button>

            {coffees.map(coffee => {
                return <pre key={coffee.id}>{JSON.stringify(coffee)}</pre>
            })}

        <h1>{coffee}</h1>
        </div>
    )
}

export default TestPage;