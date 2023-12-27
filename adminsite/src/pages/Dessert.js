import React from 'react'
import AddProduct from './AddProduct'
// import { useHistory } from 'react-router-dom/cjs/react-router-dom';
import { useHistory } from 'react-router-dom';

function Dessert() {
    const dessertHistory = useHistory()
    const handleAddDessertButtonClick = () => {
        dessertHistory.push('/admin/addproducts');
    };
    const handleEditDessertButtonClick = () => {
        dessertHistory.push('/admin/editdesserts');
    };
    return (
        <>
            <div class="content">
                <div class="animated fadeIn">


                    <div class="row">

                        <div class="col-lg">
                            <div class="card">
                                <div class="card-header">
                                    <strong class="card-title">View Desserts</strong>
                                </div>
                                <div class="card-body">
                                    <div className='col-md-2 pb-3 float-right'>
                                        <button className='btn btn-primary px-4' onClick={handleAddDessertButtonClick}>
                                            Product +
                                        </button>
                                    </div>
                                    <table class="table table-striped">
                                        <thead>
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">Dessert Name</th>
                                                <th scope="col">Type</th>
                                                <th scope="col">Unit</th>
                                                <th scope="col">In Stock</th>
                                                <th scope="col">Sell Price</th>
                                                <th scope="col" >Edit</th>
                                                <th scope="col">Rem</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">1</th>
                                                <td>Chocobar</td>
                                                <td>Chocolate</td>
                                                <td>Cup</td>
                                                <td>3</td>
                                                <td>40</td>
                                                <td onClick={handleEditDessertButtonClick} style={{ paddingLeft: "18px", color: "green" }}><i className='fa-solid fa-edit'></i></td>
                                                <td style={{ paddingLeft: "22px", color: "red", fontWeight: '1000' }}><i className='fa-solid fa-trash-o'></i></td>
                                            </tr>
                                            <tr>
                                                <th scope="row">1</th>
                                                <td>Chocobar</td>
                                                <td>Chocolate</td>
                                                <td>Cup</td>
                                                <td>3</td>
                                                <td>40</td>
                                                <td onClick={handleEditDessertButtonClick} style={{ paddingLeft: "18px", color: "green" }}><i className='fa-solid fa-edit'></i></td>
                                                <td style={{ paddingLeft: "22px", color: "red", fontWeight: '1000' }}><i className='fa-solid fa-trash-o'></i></td>
                                            </tr>
                                            <tr>
                                                <th scope="row">1</th>
                                                <td>Chocobar</td>
                                                <td>Chocolate</td>
                                                <td>Cup</td>
                                                <td>3</td>
                                                <td>40</td>
                                                <td style={{ paddingLeft: "18px", color: "green" }}><i className='fa-solid fa-edit'></i></td>
                                                <td style={{ paddingLeft: "22px", color: "red", fontWeight: '1000' }}><i className='fa-solid fa-trash-o'></i></td>
                                            </tr><tr>
                                                <th scope="row">1</th>
                                                <td>Chocobar</td>
                                                <td>Chocolate</td>
                                                <td>Cup</td>
                                                <td>3</td>
                                                <td>40</td>
                                                <td style={{ paddingLeft: "18px", color: "green" }}><i className='fa-solid fa-edit'></i></td>
                                                <td style={{ paddingLeft: "22px", color: "red", fontWeight: '1000' }}><i className='fa-solid fa-trash-o'></i></td>
                                            </tr><tr>
                                                <th scope="row">1</th>
                                                <td>Chocobar</td>
                                                <td>Chocolate</td>
                                                <td>Cup</td>
                                                <td>3</td>
                                                <td>40</td>
                                                <td style={{ paddingLeft: "18px", color: "green" }}><i className='fa-solid fa-edit'></i></td>
                                                <td style={{ paddingLeft: "22px", color: "red", fontWeight: '1000' }}><i className='fa-solid fa-trash-o'></i></td>
                                            </tr>

                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Dessert