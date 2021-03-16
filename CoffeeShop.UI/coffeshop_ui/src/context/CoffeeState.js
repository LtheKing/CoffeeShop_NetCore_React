import React, { useReducer } from "react";

//context
import CoffeeContext from "./CoffeeContext"

//reducer
import CoffeeReducer from "./CoffeeReducer"

//types 
import {
    GET_COFFEES,
    CREATE_COFFEE,
    UPDATE_COFFEE,
    DELETE_COFFEE,
    GET_BY_ID
} from "./CoffeeTypes"

const CoffeeState = ({ children }) => {
    //define the state
    const initialState = {
        coffees: [],
        coffee: {},
        loading: true
    }

    const [state, dispatch] = useReducer(CoffeeReducer, initialState)

    const getCoffee = async () => {
        try {
            const coffees = await fetch(
                "https://localhost:5001/api/Coffee"
            )
            const toJSON = await coffees.json()
            dispatch({ type: GET_COFFEES, payload: toJSON.value })
        } catch( err ) {
            console.log(err)
        }
    }

    const getCoffeeById = async (coffeeId) => {
        try {
            const coffee = await fetch(
                `https://localhost:5001/api/Coffee/GetById/${coffeeId}`
            )
            const toJSON = await coffee.json()
            dispatch({ type: GET_BY_ID, payload: toJSON.value })
        } catch (err) {
            console.log(err)
        }
    }

    const updateCoffee = async (selectedCoffee) => {
        // console.log(selectedCoffee)
        try {
            const coffee = await fetch("https://localhost:5001/api/Coffee/UpdateCoffee", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(selectedCoffee)
            })
            const toJSON = await coffee.json()

            dispatch({ type: UPDATE_COFFEE, payload: toJSON })
        } catch (error) {
            console.log(error)
        }
    }

    const insertCoffee = async (dataCoffee) => {
        // console.log(dataCoffee)
        try {
            const coffee = await fetch("https://localhost:5001/api/Coffee", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(dataCoffee)
            })
            const toJSON = await coffee.json()

            dispatch({ type: CREATE_COFFEE, payload: toJSON })
        } catch (error) {
            console.log(error)
        }
    }

    const deleteCoffee = async (id) => {
        try {
            await fetch(`https://localhost:5001/api/Coffee/DeleteCoffee/${id}`, {
                method: "DELETE"
            });

            dispatch({ type: DELETE_COFFEE, payload: id })
        } catch (error) {
            console.log(error)
        }
    }

    const {coffees, coffee, loading} = state

    return (
        <CoffeeContext.Provider
            value={{
                coffee,
                coffees,
                loading,
                getCoffee,
                updateCoffee,
                insertCoffee,
                deleteCoffee
            }}
        >
            {children}
        </CoffeeContext.Provider>
    )
}

export default CoffeeState