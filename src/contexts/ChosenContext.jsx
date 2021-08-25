
import React, { useReducer } from 'react'
import { useHistory } from 'react-router-dom'
import { calcChosenSubPrice, calcChosenTotalPrice, } from '../Helpers/CalsPriceChosen'


export const chosenContext = React.createContext()

const INIT_STATE = {
    chosen: {},
    chosenLength: 0,

}

const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case "CHANGE_CART_COUNT":
            return { ...state, chosenLength: action.payload }
        case "GET_CART":
            return { ...state, chosen: action.payload }
        default: return state
    }
}

const ChosenContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, INIT_STATE)
    const history = useHistory()

    const addProductInChosen = (product) => {
        let chosen = JSON.parse(localStorage.getItem('chosen'))
        if (!chosen) {
            chosen = {
                products: [],
                totalPrice: 0
            }
        }

        let newProduct = {
            item: product,
            count: 1,
            subPrice: 0
        }

        let filteredChosen = chosen.products.filter(elem => elem.item.id === product.id)
        if (filteredChosen.length > 0) {
            chosen.products = chosen.products.filter(elem => elem.item.id !== product.id)
        } else {
            chosen.products.push(newProduct)
        }
        newProduct.subPrice = calcChosenSubPrice(newProduct)
        chosen.totalPrice = calcChosenTotalPrice(chosen.products)
        localStorage.setItem('chosen', JSON.stringify(chosen))
        dispatch({
            type: "CHANGE_CART_COUNT",
            payload: chosen.products.length
        })
    }


    const getChosen = () => {
        let chosen = JSON.parse(localStorage.getItem('chosen'))
        if (!chosen) {
            chosen = {
                products: [],
                totalPrice: 0
            }
        }
        dispatch({
            type: "GET_CART",
            payload: chosen
        })
    }

    const changeProductCountChosen = (count, id) => {
        let chosen = JSON.parse(localStorage.getItem('chosen'))
        chosen.products = chosen.products.map(elem => {
            if (elem.item.id === id) {
                elem.count = count
                elem.subPrice = calcChosenSubPrice(elem)
            }
            return elem
        })
        chosen.totalPrice = calcChosenTotalPrice(chosen.products)
        localStorage.setItem('chosen', JSON.stringify(chosen))
        getChosen()
    }

    const checkProductInChosen = (id) => {
        let chosen = JSON.parse(localStorage.getItem('chosen'))
        if (!chosen) {
            chosen = {
                products: [],
                totalPrice: 0
            }
        }
        let newChosen = chosen.products.filter(elem => elem.item.id === id)
        return newChosen.length > 0 ? true : false
    }


    return (
        <chosenContext.Provider value={{
            history,
            chosen: state.chosen,
            chosenLength: state.chosenLength,
            getChosen,
            addProductInChosen,
            changeProductCountChosen,
            checkProductInChosen,
        }}>
            {children}
        </chosenContext.Provider>
    )
}
export default ChosenContextProvider