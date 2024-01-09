import React, { useEffect, useState } from 'react'
import { apiEditOrders, apiGetAllOrderItems } from '../utils/ApiHandler';
import { Redirect, useParams } from 'react-router-dom/cjs/react-router-dom';
import Error404 from './Error404';

function OrderItem() {

    const { orderId } = useParams();
    const [status, setStatus] = useState("1")
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
    const statuss = { "Pending": "1", "Confirmed": "2", "On The Way": "3", "Delivered": "4", "Cancel": "5" }
    const statusz = { "1": "Pending", "2": "Confirmed", "3": "On The Way", "4": "Delivered", "5": "Cancel" }
    const fetchOrderDetailsAsync = async () => {
        try {
            console.log("param:", orderId)
            const result = await apiGetAllOrderItems(orderId);
            console.log('respo', result.length)

            setorderItems(result)
            setStatus(statuss[orderItems[0].order.status])
        } catch (error) {
            console.log(error)
        }
    };
    useEffect(() => {
        fetchOrderDetailsAsync()
    }
        , [orderId])

    useEffect(() => {
        // ('id', 'date', 'status', 'totalamount','paymethod', 'rating', 'review', 'customer')
        // console.log(orderId, orderItems[0].order.date, status, orderItems[0].order.totalamount, orderItems[0].order.paymethod, orderItems[0].order.rating, orderItems.order.review, orderItems.order.customer)
        console.log(orderId, orderItems[0].order.date, statusz[status], orderItems[0].order.totalamount, orderItems[0].order.paymethod, orderItems[0].order.rating, orderItems[0].order.review, orderItems[0].order.customer.id)
        apiEditOrders(orderId, orderItems[0].order.date, statusz[status], orderItems[0].order.totalamount, orderItems[0].order.paymethod, orderItems[0].order.rating, orderItems[0].order.review, orderItems[0].order.customer.id)
        console.log("i havebeen called")
    }, [status])
    
    
    const totalCalculator = (deliveryCharges) => {
        let total = 0
        for (const order of orderItems) {
            total += order.dessert.price * order.quantity
        }
        return total + deliveryCharges
    } 



    return (
        (orderItems.length == 0) ? (<Redirect to="/" />) : (<>
            <div class="content">
                <div class="animated fadeIn">


                    <div class="row">

                        <div class="col-lg">
                            <div class="card">
                                <div class="card-header">
                                    <strong class="card-title">Order Details</strong>
                                </div>
                                <div class="card-body">
                                    <div className='row py-2'>
                                        <div class="col-lg-6 row">
                                            <div class="col-lg-5">
                                                <strong>Order ID:</strong>
                                            </div>
                                            <div class="col-lg-7">
                                                {orderItems[0].order.id}
                                            </div>
                                        </div>
                                        <div class="col-lg-6 row">
                                            <div class="col-lg-5">
                                                <strong>Order Date:</strong>
                                            </div>
                                            <div class="col-lg-7">
                                                {orderItems[0].order.date}
                                            </div>
                                        </div>
                                    </div>
                                    <div className='row py-2'>
                                        <div class="col-lg-6 row">
                                            <div class="col-lg-5">
                                                <strong>Customer Name:</strong>
                                            </div>
                                            <div class="col-lg-7">
                                                {orderItems[0].order.customer.name}
                                            </div>
                                        </div>
                                        <div class="col-lg-6 row">
                                            <div class="col-lg-5">

                                                <strong>Contact #:</strong>

                                            </div>
                                            <div class="col-lg-7">
                                                {orderItems[0].order.customer.contact}
                                            </div>
                                        </div>

                                    </div>
                                    <div className='row py-2'>
                                        <div class="col-lg-6 row">
                                            <div class="col-lg-5">
                                                <strong>Shipping Address:</strong>

                                            </div>
                                            <div class="col-lg-7">
                                                {orderItems[0].order.customer.address}
                                            </div>
                                        </div>
                                        <div class="col-lg-6 row">
                                            <div class="col-lg-5">
                                                <strong>Payment Method:</strong>

                                            </div>
                                            <div class="col-lg-7">
                                                {orderItems[0].order.paymethod}
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div class="card-body">
                                    <table class="table table-striped">
                                        <thead>
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">Dessert Name</th>
                                                <th scope="col">Flavor</th>
                                                <th scope="col">Category</th>
                                                <th scope="col">Unit</th>
                                                <th scope="col">Price</th>
                                                <th scope="col">Qty</th>
                                                <th scope="col">Total</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {orderItems.map((orderItem, index) => (
                                                <tr key={index}>
                                                    <th scope="row">{index + 1}</th>
                                                    <td>{orderItem.dessert.name}</td>
                                                    <td>{orderItem.dessert.flavor.name}</td>
                                                    <td>{orderItem.dessert.category.name}</td>
                                                    <td>{orderItem.dessert.unit}</td>
                                                    <td>{orderItem.dessert.price}</td>
                                                    <td>{orderItem.quantity}</td>
                                                    <td>{Number(orderItem.quantity) * Number(orderItem.dessert.price)}</td>
                                                </tr>
                                            ))}

                                        </tbody>
                                    </table>
                                </div>
                                <div>
                                    <div className='col-lg-7 ml-auto'>
                                        <tr className='row py-2'>
                                            <div class="col-lg-6 px-5">
                                                Sub Total
                                            </div>
                                            <div class="col-lg-6 ml-auto text-right px-5">
                                                {totalCalculator(0)}
                                            </div>
                                        </tr>
                                        <tr className='row py-2'>
                                            <div class="col-lg-6 px-5">
                                                Delivery Charges
                                            </div>
                                            <div class="col-lg-6 ml-auto text-right px-5">
                                                Free
                                            </div>
                                        </tr>
                                        <div class="col-lg lg-auto py-1">
                                            <section class="card">
                                                <div class="card-body">
                                                    <div className='row'>
                                                        <div class="col-lg-6">
                                                            <strong>Total</strong>
                                                        </div>
                                                        <div class="col-lg-6 ml-auto text-right">
                                                            <strong>{totalCalculator(0)}</strong>
                                                        </div>

                                                    </div>

                                                </div>
                                            </section>
                                            <div className='px-3 py-2'>
                                                <label for="cc-name" class="control-label mb-1">Status</label>

                                                <select onChange={(e) => setStatus(e.target.value)} value={status} name="select" id="select" class="form-control">
                                                    {/* <option value="0">Please select</option> */}
                                                    <option value="1">Pending</option>
                                                    <option value="2">Confirmed</option>
                                                    <option value="3">Dispatch</option>
                                                    <option value="4">Delivered</option>
                                                    <option value="5">Cancel</option>
                                                </select>
                                            </div>

                                        </div>

                                    </div>

                                </div>
                                <div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>)


    )
}

export default OrderItem