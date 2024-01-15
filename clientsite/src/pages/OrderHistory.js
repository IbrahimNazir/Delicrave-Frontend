import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import { apiGetAllOrderHistoryItemsByCustomerId } from '../utils/ApiHandler'
import '../styles/stylehistory.css'
import AuthHandler from '../utils/AuthHandler'
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min'
import axios from 'axios'
import Config from '../utils/Config'

function OrderHistory() {
    const init = [
        {
            "id": 1,
            "date": "2024-01-14",
            "status": "Delivered",
            "totalamount": 100.0,
            "paymethod": "COD",
            "rating": null,
            "review": "",
            "customer": {
                "id": 1,
                "username": "Ibrahim",
                "name": "Ibrahim Nazir",
                "contact": "0305123123",
                "email": "ibrahim@ned.com",
                "address": "ABC Road Karachi"
            }
        }
    ]

    const [orderHistoryItems, setorderHistoryItems] = useState(init)
    const [orderItems, setorderItems] = useState([{
        "id": 1,
        "dessert": {
            "id": 2,
            "name": "Chocobar",
            "price": 50.0,
            "stockquantity": 100,
            "description": "Sweet",
            "category": {
                "id": 2,
                "name": "Ice Cream"
            },
            "flavor": {
                "id": 2,
                "name": "Chocolate"
            },
            "unit": "pcs"
        },
        "order": {
            "id": 1,
            "date": "2024-01-06",
            "status": "Pending",
            "totalamount": 500.0,
            "paymethod": "COD",
            "rating": 5,
            "review": "Best",
            "customer": {
                "id": 1,
                "username": "Ibrahim",
                "name": "Ibrahim Nazir",
                "contact": "030020067",
                "email": "ibrahim@gmail.com",
                "address": "A-55, Sector 5"
            }
        },
        "quantity": 2
    }])
    const [customerId, setCustomerId] = useState(localStorage.getItem("customerId"))

    const fetchOrderHistoryByCustomerIdAsync = async () => {
        try {
            const result = await apiGetAllOrderHistoryItemsByCustomerId(customerId);
            console.log('OrderHistory', result)
            setorderHistoryItems(result)
            const res = await apiGetAllOrderItems(result[0].id)
            console.log("desserts", result)
        } catch (error) {
            console.log(error)
        }
    }


    const apiGetAllOrderItems = async (orderId) => {
        try {
            const response = await axios.get(`${Config.orderItemsUrl}${orderId}/`);
            setorderItems(response.data);
            console.log("apiGetAllOrderItems", response.data)
        } catch (error) {
            console.error('Error fetching data:', error);
            throw error;
        }
    };

    useEffect(() => {
        fetchOrderHistoryByCustomerIdAsync()
        
    }, [])




    return (

        (!AuthHandler.loggedIn()) ?

            (<Redirect to="/delicrave/home" />) :
            (
                <>
                    <NavBar />
                    <div class="Orders">
                        <h1 class="header">ORDER HISTORY</h1>
                        <div class="column-2">
                            {orderHistoryItems.length === 0 ? ("No Orders Placed Yet") :
                                (<p>Order ID #{orderHistoryItems[0].id}<br />
                                    Placed On:{orderHistoryItems[0].date}</p>)}

                            <br /><hr /><br />

                            {orderItems.map((orderItem, index) => (
                                <>
                                    <div class="flex-container" key={orderItem.index}>
                                        <div class="image">
                                            <img src={`${Config.img}${orderItem.dessert.image}`} alt="Dessert" width="100px" />
                                        </div>
                                        <div class="product">
                                            <strong>{orderItem.dessert.name}</strong>
                                            <p>{orderItem.dessert.description}</p>
                                        </div>
                                        <div class="flex-item">
                                            <span><span>×</span> 1</span>
                                            <span>Rs.{orderItem.dessert.price}</span>
                                            <label>{orderItem.order.status}</label>
                                        </div>
                                    </div>
                                    <hr />
                                    <br />
                                </>
                            ))}
                            {/* <div class="flex-container">
                                <div class="image">
                                    <img src="./images/COOKIE.jpg" alt="Dessert" width="100px" />
                                </div>
                                <div class="product">
                                    <strong>CHOCOLATE CAKE</strong>
                                    <p>Vanilla cake with sprinkles and wipped cream</p>
                                </div>
                                <div class="flex-item">
                                    <span><span>×</span> 1</span>
                                    <span>Rs.1234</span>
                                    <label>pending</label>
                                </div>
                            </div>
                            <hr /><br /> */}
                            {/* <div class="flex-container">
                                <div class="image">
                                    <img src="./images/MILKSHAKE.jpg" alt="Dessert" width="100px" />
                                </div>
                                <div class="product">
                                    <strong>CHOCOLATE CAKE</strong>
                                    <p>Vanilla cake with sprinkles and wipped cream</p>
                                </div>
                                <div class="flex-item">
                                    <span><span>×</span> 1</span>
                                    <span>Rs.1234</span>
                                    <label>pending</label>
                                </div>
                            </div>

                        </div>
                        <div class="column-2">
                            <p>Order ID #8639826520875013<br />
                                Placed On: 17 Jan 2023</p>
                            <br /><hr /><br />
                            <div class="flex-container">
                                <div class="image">
                                    <img src="./images/CONE ICE CREAM.jpg" alt="Dessert" width="100px" />
                                </div>
                                <div class="product">
                                    <strong>CHOCOLATE CAKE</strong>
                                    <p>Vanilla cake with sprinkles and wipped cream</p>
                                </div>
                                <div class="flex-item">
                                    <span><span>×</span> 1</span>
                                    <span>Rs.1234</span>
                                    <label>pending</label>
                                </div>
                            </div>
                            <hr /><br />
                            <div class="flex-container">
                                <div class="image">
                                    <img src="./images/COOKIE.jpg" alt="Dessert" width="100px" />
                                </div>
                                <div class="product">
                                    <strong>CHOCOLATE CAKE</strong>
                                    <p>Vanilla cake with sprinkles and wipped cream</p>
                                </div>
                                <div class="flex-item">
                                    <span><span>×</span> 1</span>
                                    <span>Rs.1234</span>
                                    <label>pending</label>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </>
            ))
}

export default OrderHistory