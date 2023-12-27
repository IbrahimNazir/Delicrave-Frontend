import React from 'react'

function OrderItem() {
    return (
        <>
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
                                                2423424
                                            </div>
                                        </div>
                                        <div class="col-lg-6 row">
                                            <div class="col-lg-5">
                                                <strong>Order Date:</strong>
                                            </div>
                                            <div class="col-lg-7">
                                                12-02-2023
                                            </div>
                                        </div>
                                    </div>
                                    <div className='row py-2'>
                                        <div class="col-lg-6 row">
                                            <div class="col-lg-5">
                                            <strong>Customer Name:</strong>
                                            </div>
                                            <div class="col-lg-7">
                                                Ibrahim Nazir
                                            </div>
                                        </div>
                                        <div class="col-lg-6 row">
                                            <div class="col-lg-5">
                                                
                                                <strong>Contact #:</strong>

                                            </div>
                                            <div class="col-lg-7">
                                                03057382341
                                            </div>
                                        </div>

                                    </div>
                                    <div className='row py-2'>
                                        <div class="col-lg-6 row">
                                            <div class="col-lg-5">
                                                <strong>Shipping Address:</strong>
                                                
                                            </div>
                                            <div class="col-lg-7">
                                                A-16, Sec 9, Block C, Nazimabad
                                            </div>
                                        </div>
                                        <div class="col-lg-6 row">
                                            <div class="col-lg-5">
                                                <strong>Payment Method:</strong>
                                                
                                            </div>
                                            <div class="col-lg-7">
                                                Card
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
                                            <tr>
                                                <th scope="row">1</th>
                                                <td>Gingerbread Loaf</td>
                                                <td>Vanilla</td>
                                                <td>Cake</td>
                                                <td>1 pond</td>
                                                <td>950</td>
                                                <td>2</td>
                                                <td>1900</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">2</th>
                                                <td>Gingerbread Loaf</td>
                                                <td>Vanilla</td>
                                                <td>Cake</td>
                                                <td>1 pond</td>
                                                <td>950</td>
                                                <td>2</td>
                                                <td>1900</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">3</th>
                                                <td>Chocolate chip Ice Cream</td>
                                                <td>Chocolate</td>
                                                <td>Ice Cream</td>
                                                <td>Cup</td>
                                                <td>350</td>
                                                <td>1</td>
                                                <td>350</td>
                                            </tr>

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
                                                2250
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
                                        <div class="col-lg lg-auto py-2">
                                            <section class="card">
                                                <div class="card-body">
                                                    <div className='row'>
                                                        <div class="col-lg-6">
                                                            <strong>Total</strong>
                                                        </div>
                                                        <div class="col-lg-6 ml-auto text-right">
                                                            <strong>2250</strong>
                                                        </div>

                                                    </div>

                                                </div>
                                            </section>
                                            <div className='px-3 py-2'>
                                                <label for="cc-name" class="control-label mb-1">Delivery Date</label>
                                                <input id="cc-name" name="cc-name" type="date" class="form-control cc-name valid" />
                                            </div>
                                            <div className='px-3 py-2'>
                                                <label for="cc-name" class="control-label mb-1">Status</label>
                                                <select name="select" id="select" class="form-control">
                                                    <option value="0">Please select</option>
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
        </>
    )
}

export default OrderItem