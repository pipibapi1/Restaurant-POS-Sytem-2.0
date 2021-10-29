import React from 'react'
import FoodList from './FoodList/FoodList'
import Cart from './Cart/Cart'
import {BrowserRouter as Router} from 'react-router-dom';

function Menu() {
    return (
        <Router>
            <FoodList />
            <Cart />
        </Router>
    )
}

export default Menu
