import React from 'react'

function Category() {
    return (
        <>
            <div class="content">
                <div class="animated fadeIn">


                    <div class="row">

                        <div class="col-lg-7">
                            <div class="card">
                                <div class="card-header">
                                    <strong class="card-title">View Categories</strong>
                                </div>
                                <div class="card-body">
                                    <table class="table table-striped">
                                        <thead>
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">Caregory Name</th>
                                                <th scope="col"></th>
                                                <th scope="col"></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">1</th>
                                                <td>Ice Cream</td>
                                                <td style={{textAlign:'right', color:"green"}}><i className='fa-solid fa-edit'></i></td>
                                                <td style={{color:"red", fontWeight:'1000'}} className='text-center'><i className='fa-solid fa-trash-o'></i></td>
                                            </tr>
                                            <tr>
                                                <th scope="row">2</th>
                                                <td>Milk Shake</td>
                                                <td style={{textAlign:'right', color:"green"}}><i className='fa-solid fa-edit'></i></td>
                                                <td style={{color:"red", fontWeight:'1000'}} className='text-center'><i className='fa-solid fa-trash-o'></i></td>
                                            </tr>
                                            <tr>
                                                <th scope="row">3</th>
                                                <td>Cookies</td>
                                                <td style={{textAlign:'right', color:"green"}}><i className='fa-solid fa-edit'></i></td>
                                                <td style={{color:"red", fontWeight:'1000'}} className='text-center'><i className='fa-solid fa-trash-o'></i></td>
                                            </tr>
                                            <tr>
                                                <th scope="row">4</th>
                                                <td>Cake</td>
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
                                <div class="card-header"><strong>Add Categories</strong></div>
                                <div class="card-body card-block">
                                    <div class="form-group"><label for="company" class=" form-control-label">Category Name</label><input type="text" id="company" placeholder="Enter category name" class="form-control" /></div>
                                    <button type="button" class="btn btn-primary btn-block">Add</button>

                                </div>
                            </div>
                            <div class="card">
                                <div class="card-header"><strong>Edit Categories</strong></div>
                                <div class="card-body card-block">
                                    <div class="form-group"><label for="company" class=" form-control-label">Category Name</label><input type="text" id="company" placeholder="Enter category name" class="form-control" /></div>
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

export default Category