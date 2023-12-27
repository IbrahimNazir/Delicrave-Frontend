import React, { useState } from 'react'

function AddProduct() {

    const [product, setProduct] = useState({
        icecream_name: "" ,
        type_id: "",
        flavour_id: "",
        purchase_price: "",
        sell_price: "",
    })

    return (
        <>
            <div class="content">
                <div class="animated fadeIn">


                    <div class="row">

                        <div class="col-lg">
                            <div class="card">
                                <div class="card-header"><strong>Add Ice-Cream</strong></div>
                                <div class="card-body card-block">
                                    <div class="form-group"><label for="company" class=" form-control-label">Ice-Cream Name</label><input type="text" id="company" placeholder="Enter your product name" class="form-control" /></div>
                                    <div class="form-group"><label for="vat" class=" form-control-label">Dessert Type</label><select name="select" id="select" class="form-control">
                                        <option value="0">Please select</option>
                                        <option value="1">Ice Cream</option>
                                        <option value="2">Milk Shake</option>
                                        <option value="3">Cake</option>
                                        <option value="4">Cookie</option>
                                    </select></div>
                                    <div class="form-group"><label for="vat" class=" form-control-label">Unit Type</label><select name="select" id="select" class="form-control">
                                        <option value="0" >Please select</option>
                                        <option value="1">Cone</option>
                                        <option value="2">Cup</option>
                                        <option value="3">1 liter Bucket</option>
                                        <option value="4">2 liters Bucket</option>
                                        <option value="5">2 Pond</option>
                                        <option value="6">3 Ponds</option>
                                        <option value="7">4 Ponds</option>
                                        <option value="8">200 gm</option>
                                        <option value="9">250 ml</option>
                                    </select></div>
                                    <div class="form-group"><label for="vat" class=" form-control-label">Flavour</label><select name="select" id="select" class="form-control">
                                        <option value="0" disabled={true} >Please select</option>
                                        <option value="1">Vanilla</option>
                                        <option value="2">Chocolate</option>
                                        <option value="3">Mint Chocolate Chip</option>
                                        <option value="4">Cookies and Cream</option>
                                        <option value="5">Rocky Road</option>
                                        <option value="6">Butter Pecan</option>
                                        <option value="7">Neapolitan</option>
                                        <option value="8">Butter Pecan</option>
                                        <option value="9">Coffee</option>
                                        <option value="10">Pistachio</option>
                                    </select></div>
                                    <div class="form-group"><label for="street" class=" form-control-label">Quantity</label><input type="number" id="street" placeholder="Enter street name" class="form-control" /></div>
                                    <div class="form-group"><label for="street" class=" form-control-label">Sell Price</label><input type="number" id="street" placeholder="Enter street name" class="form-control" /></div>
                                    <div class="form-group"><label for="city" class=" form-control-label">Description</label><input type="text" id="city" placeholder="Enter your city" class="form-control" /></div>
                                    <button type="button" class="btn btn-primary btn-block">Add</button>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddProduct