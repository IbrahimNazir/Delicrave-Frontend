import React, { useEffect, useState } from 'react'
import cake from "../images/CAKE.jpg"
import cater1 from "../images/cater-1.jpg"
import cater2 from "../images/cater-2.jpg"
import cater3 from "../images/cater-3.jpg"
import cater4 from "../images/cater-4.jpg"
import background from "../images/background.jpg"
import cookie from "../images/COOKIE.jpg"
import delicrave from "../images/delicrave.png"
import dessert from "../images/desserts.png"
import logo from "../images/logo.png"
import dess from "../images/dess.png"
import milkshake from "../images/MILKSHAKE.jpg"
import cone from "../images/cone.jpg"
import "../styles/stylecart.css"
import { apiGetAllCartItemsByCustomerId } from '../utils/ApiHandler'
import Config from '../utils/Config'
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min'
import AuthHandler from '../utils/AuthHandler'

function Cart() {
    const init = [{
        "id": "",
        "dessert": {
            "id": "",
            "name": "",
            "price": "",
            "stockquantity": "",
            "description": "",
            "category": {
                "id": "",
                "name": "",
                "image": ""
            },
            "flavor": {
                "id": "",
                "name": ""
            },
            "unit": "",
            "image": ""
        },
        "cart": {
            "id": "",
            "customer": {
                "id": "",
                "username": "",
                "name": "",
                "contact": "",
                "email": "",
                "address": ""
            }
        },
        "quantity": 2
    },]
    const [cartItems, setCartItems] = useState(init)
    const [customerId, setCustomerId] = useState(localStorage.getItem("customerId"))

    const fetchCartItemsByCustomerIdAsync = async () => {
        try {
            const result = await apiGetAllCartItemsByCustomerId(customerId);
            console.log('respo', result)
            setCartItems(result)
            console.log("desserts", cartItems)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchCartItemsByCustomerIdAsync()
    }, [])
    return (

        (!AuthHandler.loggedIn()) ?

            (<Redirect to="/delicrave/home" />) :
            (
                <>
                    <div className='wrapper'>
                        <div class="cart">
                            <h1 class="header">MY CART</h1>
                            <div class="item-body">
                                {cartItems.length === 0 ? (<h2 style={{color:"white",textAlign:"center"}}>Empty</h2>) : (cartItems.map((cartItem) => (
                                    <div class="flex-container">
                                        <div class="image">
                                            <img src={`${Config.img}${cartItem.dessert.image}`} alt="Dessert" width="100px" />
                                        </div>
                                        <div class="flex-item product">
                                            <strong>{cartItem.dessert.category.name}</strong>
                                            <p>{cartItem.dessert.name}</p>
                                        </div>
                                        <div class="flex-item styled-select unit">
                                            <label style={{ color: 'white' }}>{cartItem.dessert.unit}</label>
                                        </div>
                                        <div class="flex-item quantity">
                                            <div class="addsub">
                                                <span>-</span>
                                                <label>1</label>
                                                <span>+</span>
                                            </div>
                                        </div>
                                        <div class="flex-item price">
                                            <div>
                                                <span>{cartItem.dessert.price}</span>
                                            </div>
                                        </div>
                                        <div class="flex-item delete">
                                            <div>
                                                <i class="fa-solid fa-trash"></i>
                                            </div>
                                        </div>
                                    </div>

                                )))}
                            </div>
                            <div class="flex-item box">
                                <div class="item-body">
                                    <div class="item-header row">
                                        <h2>ORDER SUMMARY</h2>
                                    </div>
                                    <div class="item-body-body">
                                        <hr />
                                        <div class="item-header row">
                                            <span>Subtotal</span>
                                            <label>123.34</label>
                                        </div>
                                        <div class="item-header row">
                                            <span><strong>Shipping
                                                Fee</strong></span>
                                            <label>123.34</label>
                                        </div>
                                        <div class="item-header row">
                                            <span><strong>Total</strong></span>
                                            <label><strong>Rs
                                                12323</strong></label>
                                        </div>
                                        <div class="row">
                                            <a class="sharp-button" onclick="openPage('confirmOrder.html')">Proceed
                                                to
                                                checkout</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            ))
}

export default Cart