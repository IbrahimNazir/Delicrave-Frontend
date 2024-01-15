import React from 'react'
// import '../styles/styletrack.css'
import NavBar from './NavBar'
import { apiGetAllOrderHistoryItemsByCustomerId } from '../utils/ApiHandler'
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min'
import AuthHandler from '../utils/AuthHandler'

function TrackOrder() {
    // const init = [
    //     {
    //         "id": 1,
    //         "date": "2024-01-14",
    //         "status": "Delivered",
    //         "totalamount": 100.0,
    //         "paymethod": "COD",
    //         "rating": null,
    //         "review": "",
    //         "customer": {
    //             "id": 1,
    //             "username": "Ibrahim",
    //             "name": "Ibrahim Nazir",
    //             "contact": "0305123123",
    //             "email": "ibrahim@ned.com",
    //             "address": "ABC Road Karachi"
    //         }
    //     }
    // ]

    // const [wishlistItems, setwishlistItems] = useState(init)
    // const [customerId, setCustomerId] = useState("1")

    // const fetchOrderHistoryItemsByCustomerIdAsync = async () => {
    //     try {
    //         const result = await apiGetAllOrderHistoryItemsByCustomerId(customerId);
    //         console.log('respo', result)
    //         setwishlistItems(result)
    //         console.log("desserts", result)
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    // useEffect(() => {
    //     fetchOrderHistoryItemsByCustomerIdAsync()
    // }, [])


    return (
        !AuthHandler.loggedIn() ?
            (<Redirect to="/delicrave/home" />) :
            (
                <>
                    <div className='wrap'>
                        <NavBar />
                        <div class="track">
                            <h1 class="header">TRACK ORDER</h1>
                            <div class="card-main">
                                <div class="card">
                                    <h1>YOUR ORDER IS CONFIRMED</h1>
                                </div>
                                <div class="card card-2">
                                    <div class="header-row">
                                        <p>Order for: Waliya Noor <br />
                                            03022591396 | Gulshan-e-Jamal Block #2, Sindh, Karachi<br />
                                            Payement: Cash On Delivery</p>
                                    </div>
                                    <hr />
                                    <div class="flex-container">
                                        <div class="product">
                                            <strong>CAKES</strong>
                                            <p>Vanilla cake with sprinkles and wipped cream</p>
                                        </div>
                                        <div class="flex-item">
                                            <span><span>×</span> 1</span>
                                            <span>Rs.1234</span>
                                        </div>
                                    </div>
                                    <div class="flex-container">
                                        <div class="product">
                                            <strong>CAKES</strong>
                                            <p>Vanilla cake with sprinkles and wipped cream</p>
                                        </div>
                                        <div class="flex-item">
                                            <span><span>×</span> 1</span>
                                            <span>Rs.1234</span>
                                        </div>
                                    </div>
                                    <div class="flex-container">
                                        <div class="product">
                                            <strong>CAKES</strong>
                                            <p>Vanilla cake with sprinkles and wipped cream</p>
                                        </div>
                                        <div class="flex-item">
                                            <span><span>×</span> 1</span>
                                            <span>Rs.1234</span>
                                        </div>
                                    </div>
                                    <div class="flex-container">
                                        <div class="product">
                                            <strong>CAKES</strong>
                                            <p>Vanilla cake with sprinkles and wipped cream</p>
                                        </div>
                                        <div class="flex-item">
                                            <span><span>×</span> 1</span>
                                            <span>Rs.1234</span>
                                        </div>
                                    </div>
                                    <hr />
                                    <div class="box-2">
                                        <div class="item-body">
                                            <div class="item-body-body">
                                                <div class="item-header row">
                                                    <span>Subtotal</span>
                                                    <label>123.34</label>
                                                </div>
                                                <div class="item-header row">
                                                    <span>Shipping Fee</span>
                                                    <label>123.34</label>
                                                </div>
                                                <div class="item-header row">
                                                    <span><strong>Total</strong></span>
                                                    <label><strong>Rs.12323</strong></label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            ))
}

export default TrackOrder