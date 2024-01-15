import React, { useEffect, useState } from 'react'
// import { useHistory } from 'react-router-dom/cjs/react-router-dom';
import { useHistory } from 'react-router-dom';
import { apiDeleteDessert, apiGetAllDessert } from '../utils/ApiHandler';

function Dessert() {

    const [desserts, setDesserrts] = useState([])


    const dessertHistory = useHistory()
    const handleAddDessertButtonClick = () => {
        dessertHistory.push('/admin/addproducts');
    };
    const handleEditDessertButtonClick = (id) => {
        dessertHistory.push(`/admin/editdessert/${id}`);
    };



    const fetchDessertsAsync = async () => {
        try {
            const result = await apiGetAllDessert();
            console.log('respo', result)
            setDesserrts(result)
        } catch (error) {
            console.log(error)
        }
    };

    const deleteDessertAsync = async (id) => {
        try {
            const result = await apiDeleteDessert(id);
            console.log('respo', result)
            fetchDessertsAsync()
        } catch (error) {
            console.log(error)
        }
    };


   

    useEffect(() => {
        fetchDessertsAsync()
    }, [])





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
                                                <th scope="col">Image</th>
                                                <th scope="col">Dessert Name</th>
                                                <th scope="col">Category</th>
                                                <th scope="col">Unit</th>
                                                <th scope="col">Stock</th>
                                                <th scope="col">Sell Price</th>
                                                <th scope="col" >Edit</th>
                                                <th scope="col">Rem</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {desserts.map((dessert, index) => (
                                                <tr key={dessert.id}>
                                                    <th scope="row">{index + 1}</th>
                                                    <td><img src={dessert.image} width={'50px'} height={"30px"}></img></td>
                                                    <td>{dessert.name}</td>
                                                    <td>{dessert.category.name}</td>
                                                    <td>{dessert.unit}</td>
                                                    <td>{dessert.stockquantity}</td>
                                                    <td>{dessert.price}</td>
                                                    <td onClick={() => handleEditDessertButtonClick(dessert.id)} style={{ paddingLeft: "18px", color: "green" }}><i className='fa-solid fa-edit'></i></td>
                                                    <td onClick={() => deleteDessertAsync(dessert.id)} style={{ paddingLeft: "22px", color: "red", fontWeight: '1000' }}><i className='fa-solid fa-trash-o'></i></td>
                                                </tr>
                                            ))}

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