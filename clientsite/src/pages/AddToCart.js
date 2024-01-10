import React, { useEffect, useState } from 'react'
import d1 from '../images/CAKE.jpg'
import { apiGetAllDessertsByCategory } from '../utils/ApiHandler'

function AddToCart() {
    const init = []
    const [cartItems, setCartItems] = useState(init)
    const [customerId, setCustomerId] = useState("1")
    
    const fetchCartItemsByCustomerIdAsync = async () => {
        try {
            const result = await apiGetAllCartItemsByCustomerId(customerId);
            console.log('respo', result)
            cartItems(result)
            console.log("desserts", cartItems)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        fetchCartItemsByCustomerIdAsync()
    },[])
    return (
        <div className='container py-5'>
            <div className='d-flex gap-0 flex-column flex-md-row'>
                <div className='card card-sm col col-md-8 border-primary border-end-0'>
                    <div className='card-body display-25 text-sm-center'>
                        <div className='card-title'>
                            <div className='row'>
                                <div className='col col-6'>
                                    <h4>Sweet Bucket</h4>
                                </div>
                                <div className='col col-3 text-right'>
                                    <span className='ml-auto'>5 items</span>
                                </div>
                            </div>
                        </div>
                        <div className='card-body'>
                            <hr />
                            <div className='row '>
                                <div className='col col-2'>
                                    <img src={d1} width={"120%"} />
                                </div>
                                <div className='col col-3 text-sm'>
                                    <h6 style={{ color: "#be4f60", fontWeight: '800' }}>Category</h6>
                                    <span>Chocobar csd sdcsdijc sdijoes scnjkzd</span>
                                </div>
                                <div className='col px-sm-1'>
                                    <div class="form-group-sm  py-3">
                                        {/* <label for="exampleDropdown">Select Option:</label> */}
                                        <select class="form-control-sm" id="exampleDropdown" style={{ width: "60px" }}>
                                            <option value="1">Cup</option>
                                            <option value="2">1 litre</option>
                                            <option value="3">1 pound</option>
                                        </select>
                                    </div>
                                    <div className='row' >
                                        <button className='btn btn-danger col' style={{ padding: "4px 6px" }}>-</button>
                                        <label className='px-1 col'>1</label>
                                        <button className='btn btn-danger col' style={{ padding: "4px 6px" }}>+</button>
                                    </div>
                                </div>
                                <div className='col col-2'>

                                </div>
                                <div className='col px-0'>
                                    <label className='px-0 py-2'>1400</label>
                                    <div className='row' >
                                        {/* <button className='btn btn-danger col' style={{ width: "5px", padding: "4px 6px" }}>-</button> */}
                                        <a className='btn btn-danger' style={{ width: "40%", padding: "4px 6px" }}>x</a>
                                    </div>
                                </div>
                                <div className='col'>

                                </div>

                            </div>
                            <hr />
                            <div className='row '>
                                <div className='col col-2'>
                                    <img src={d1} width={"120%"} />
                                </div>
                                <div className='col text-sm'>
                                    <h6 style={{ color: "#be4f60", fontWeight: '800' }}>Category</h6>
                                    <span>Chocobar </span>
                                </div>
                                <div className='col  px-sm-1'>
                                    <div class="form-group-sm">
                                        {/* <label for="exampleDropdown">Select Option:</label> */}
                                        <select class="form-control-sm" id="exampleDropdown" style={{ width: "60px" }}>
                                            <option value="1">Cup</option>
                                            <option value="2">1 litre</option>
                                            <option value="3">1 pound</option>
                                        </select>
                                    </div>
                                </div>
                                <div className='col col-2'>
                                    <div className='row' >
                                        <button className='btn btn-danger col' style={{ width: "5px", padding: "4px 6px" }}>-</button>
                                        <label className='px-1 col'>1</label>
                                        <button className='btn btn-danger col' style={{ width: "5px", padding: "4px 6px" }}>+</button>
                                    </div>
                                </div>
                                <div className='col px-0'>
                                    <label className='px-0'>1400</label>
                                </div>
                                <div className='col'>
                                    <div className='row' >
                                        {/* <button className='btn btn-danger col' style={{ width: "5px", padding: "4px 6px" }}>-</button> */}
                                        <a className='btn btn-danger col' style={{ width: "5px", padding: "4px 6px" }}>-</a>
                                    </div>
                                </div>



                            </div>
                            <hr />
                            <div className='row '>
                                <div className='col col-2'>
                                    <img src={d1} width={"120%"} />
                                </div>
                                <div className='col text-sm'>
                                    <h6 style={{ color: "#be4f60", fontWeight: '800' }}>Category</h6>
                                    <span>Chocobar </span>
                                </div>
                                <div className='col  px-sm-1'>
                                    <div class="form-group-sm">
                                        {/* <label for="exampleDropdown">Select Option:</label> */}
                                        <select class="form-control-sm" id="exampleDropdown" style={{ width: "60px" }}>
                                            <option value="1">Cup</option>
                                            <option value="2">1 litre</option>
                                            <option value="3">1 pound</option>
                                        </select>
                                    </div>
                                </div>
                                <div className='col col-2'>
                                    <div className='row' >
                                        <button className='btn btn-danger col' style={{ width: "5px", padding: "4px 6px" }}>-</button>
                                        <label className='px-1 col'>1</label>
                                        <button className='btn btn-danger col' style={{ width: "5px", padding: "4px 6px" }}>+</button>
                                    </div>
                                </div>
                                <div className='col px-0'>
                                    <label className='px-0'>1400</label>
                                </div>
                                <div className='col'>
                                    <div className='row' >
                                        {/* <button className='btn btn-danger col' style={{ width: "5px", padding: "4px 6px" }}>-</button> */}
                                        <a className='btn btn-danger col' style={{ width: "5px", padding: "4px 6px" }}>-</a>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className='card col' style={{ backgroundColor: "#be4f60" }}>
                    <div className='card-body'>

                    </div>
                </div>
            </div>
            orderItemsUrl
        </div >
    )
}

export default AddToCart