//types
import  {
    GET_COFFEES,
    UPDATE_COFFEE,
    CREATE_COFFEE,
    DELETE_COFFEE,
    EDIT_COFFEE,
    GET_BY_ID
} from "./CoffeeTypes"

export default (state, {type, payload}) => {
    switch(type){
        case GET_COFFEES:
            return {
                ...state,
                loading: false,
                coffees: payload
            }
        case GET_BY_ID:
            return {
                ...state,
                coffee: payload
            }
        case UPDATE_COFFEE:
            const updateCoffee = payload;
            const updateCoffees = state.coffees.map(coffee => {
                if (coffee.id === updateCoffee.id) {
                    return updateCoffee
                }

                return coffee;
            })
            return {
                ...state,
                coffees : updateCoffees
            }
        case CREATE_COFFEE:
            return {
                ...state,
                coffees: [payload, ...state.coffees]
            }
        case DELETE_COFFEE:
            return {
                ...state,
                coffees: state.coffees.filter(coffee => {
                    return coffee.id !== payload;
                })
            }
        default:
            return state
    }
}