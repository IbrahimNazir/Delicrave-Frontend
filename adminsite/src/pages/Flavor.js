import React from 'react'

function Flavor() {
    return (
        <>
            <div class="content">
                <div class="animated fadeIn">


                    <div class="row">

                        <div class="col-lg">
                            <div class="card">
                                <div class="card-header">
                                    <strong class="card-title">View Flavors</strong>
                                </div>
                                <div class="card-body">
                                    <table class="table table-striped">
                                        <thead>
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">Flavor Name</th>
                                                <th scope="col"></th>
                                                <th scope="col"></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">1</th>
                                                <td>Vanilla</td>
                                                <td style={{textAlign:'right', color:"green"}}><i className='fa-solid fa-edit'></i></td>
                                                <td style={{color:"red", fontWeight:'1000'}} className='text-center'><i className='fa-solid fa-trash-o'></i></td>
                                            </tr>
                                            <tr>
                                                <th scope="row">2</th>
                                                <td>Chocolate</td>
                                                <td style={{textAlign:'right', color:"green"}}><i className='fa-solid fa-edit'></i></td>
                                                <td style={{color:"red", fontWeight:'1000'}} className='text-center'><i className='fa-solid fa-trash-o'></i></td>
                                            </tr>
                                            <tr>
                                                <th scope="row">3</th>
                                                <td>Mint Chocolate Chip</td>
                                                <td style={{textAlign:'right', color:"green"}}><i className='fa-solid fa-edit'></i></td>
                                                <td style={{color:"red", fontWeight:'1000'}} className='text-center'><i className='fa-solid fa-trash-o'></i></td>
                                            </tr>
                                            <tr>
                                                <th scope="row">4</th>
                                                <td>Cookie & Cream</td>
                                                <td style={{textAlign:'right', color:"green"}}><i className='fa-solid fa-edit'></i></td>
                                                <td style={{color:"red", fontWeight:'1000'}} className='text-center'><i className='fa-solid fa-trash-o'></i></td>
                                            </tr>
                                            <tr>
                                                <th scope="row">5</th>
                                                <td>Coffie</td>
                                                <td style={{textAlign:'right', color:"green"}}><i className='fa-solid fa-edit'></i></td>
                                                <td style={{color:"red", fontWeight:'1000'}} className='text-center'><i className='fa-solid fa-trash-o'></i></td>
                                            </tr>
                                            <tr>
                                                <th scope="row">6</th>
                                                <td>Pistachio</td>
                                                <td style={{textAlign:'right', color:"green"}}><i className='fa-solid fa-edit'></i></td>
                                                <td style={{color:"red", fontWeight:'1000'}} className='text-center'><i className='fa-solid fa-trash-o'></i></td>
                                            </tr>
                                           
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-5">
                            <div class="card">
                                <div class="card-header"><strong>Add Flavors</strong></div>
                                <div class="card-body card-block">
                                    <div class="form-group"><label for="company" class=" form-control-label">Flavor Name</label><input type="text" id="company" placeholder="Enter category name" class="form-control" /></div>
                                    <button type="button" class="btn btn-primary btn-block">Add</button>

                                </div>
                            </div>
                            <div class="card">
                                <div class="card-header"><strong>Edit Flavors</strong></div>
                                <div class="card-body card-block">
                                    <div class="form-group"><label for="company" class=" form-control-label">Flavor Name</label><input type="text" id="company" placeholder="Enter category name" class="form-control" /></div>
                                    <button type="button" class="btn btn-primary btn-block">Edit</button>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Flavor