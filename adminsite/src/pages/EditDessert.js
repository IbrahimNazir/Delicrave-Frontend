import React, { useEffect, useState } from 'react'
import { apiEditDessert, apiGetAllCategory, apiGetAllFlavors, apiRetrieveDessert, apiSaveDessert } from '../utils/ApiHandler'
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';

function EditProduct() {

    const defaultDessert = { category: {}, id: "", flavor: {} }
    const [flavors, setFlavors] = useState([])
    const [categorys, setCategorys] = useState([])
    const [dessert, setDessert] = useState(defaultDessert)
    const { dessertId } = useParams();

    const editDessertHistory = useHistory()
    
    const handleGoBackButtonClick = () => {
        console.log("handleGoBackButtonClick")
        editDessertHistory.push(`/admin/desserts`);
    };


    const fetchFlavorsAsync = async () => {
        try {
            const result = await apiGetAllFlavors();
            console.log('respo', result)
            setFlavors(result)
            console.log("asd", flavors)
        } catch (error) {
            console.log(error)
        }
    };
    const fetchCategorysAsync = async () => {
        try {
            const result = await apiGetAllCategory();
            console.log('respo', result)
            setCategorys(result)
            console.log("asd", flavors)
        } catch (error) {
            console.log(error)
        }
    };
    const fetchDessertsAsync = async () => {
        try {
            const result = await apiRetrieveDessert(dessertId);
            console.log('single data', result)
            setDessert(result)
        } catch (error) {
            console.log(error)
        }
    };


    useEffect(() => {
        fetchDessertsAsync()
        fetchFlavorsAsync();
        fetchCategorysAsync();
        console.log("dessertId", dessertId)
    }, [dessertId]);


    

    // Edit product
    // name, stockquantity, description, category, flavor
    function dessertOnSubmit(event) {
        event.preventDefault()
        
        event.target.edit.innerHTML = "Saving"
        const putDessertAsync = async (event, dessertId, name, price, stockquantity, unit, description, category, flavor, editBtn) => {
            try {
                const result = await apiEditDessert(dessertId, name, price, stockquantity, unit, description, category, flavor);
                console.log("saved", result)
                setDessert(defaultDessert)
                editBtn.classList.add("btn-success")
                editBtn.type = "button"
                editBtn.addEventListener('click', handleGoBackButtonClick)
                console.log(editBtn.type)
                event.target.edit.innerHTML = "Saved Changes. Go back"
                event.target.reset()


            } catch (error) {
                console.log(error)
                editBtn.classList.add("btn-danger")
                event.target.edit.innerHTML = "Error Occured while saving"
            }


        };
        putDessertAsync(
            event,
            dessertId,
            event.target.name.value,
            event.target.price.value,
            event.target.stockquantity.value,
            event.target.unit.value,
            event.target.description.value,
            event.target.category.value,
            event.target.flavor.value,
            event.target.edit
        );

    }

    function handleInput(event) {
        if ((event.target.name == "price" || event.target.name == "stockquantity") && Number(event.target.value) < 0) {
            setDessert((prev) => ({ ...prev, [event.target.name]: "0" }))
        }
        else {
            setDessert((prev) => ({ ...prev, [event.target.name]: event.target.value }))
        }

    }



    return (
        <>
            <div class="content">
                <div class="animated fadeIn">
                    <div class="row">
                        <div class="col-lg">
                            <form class="card" onSubmit={(event) => dessertOnSubmit(event)}>
                                <div class="card-header"><strong>Edit Ice-Cream</strong></div>
                                <div class="card-body card-block">
                                    <div class="form-group"><label for="name" class=" form-control-label">Dessert Name</label>
                                        <input required onChange={(event) => handleInput(event)} name='name' type="text" id="name" placeholder="Enter dessert name" class="form-control" value={dessert.name} /></div>
                                    <div class="form-group"><label for="category" class=" form-control-label">Dessert Type</label>
                                        <select value={dessert.category.id} onChange={(event) => handleInput(event)} name="category" id="category" class="form-control">
                                            
                                            {categorys.map((category) => (
                                                <option value={category.id}>{category.name}</option>
                                            ))}
                                        </select>
                                    </div>

                                    <div class="form-group"><label for="flavor" class=" form-control-label">Flavour</label>
                                        <select value={dessert.flavor.id} onChange={(event) => handleInput(event)} name="flavor" id="flavor" class="form-control">
                                           
                                            {flavors.map((flavor) => (
                                                <option value={flavor.id}>{flavor.name}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div class="form-group"><label for="price" class=" form-control-label">Price</label><input value={dessert.price} onChange={(event) => handleInput(event)} name='price' type="number" id="price" placeholder="Enter price" class="form-control" /></div>
                                    <div class="form-group"><label for="stockquantity" class=" form-control-label">Quantity</label><input value={dessert.stockquantity} onChange={(event) => handleInput(event)} name='stockquantity' type="number" id="stockquantity" placeholder="Set stock" class="form-control" /></div>
                                    <div class="form-group"><label for="unit" class=" form-control-label">Unit</label><input required value={dessert.unit} onChange={(event) => handleInput(event)} name='unit' type="text" id="unit" placeholder="Enter unit" class="form-control" /></div>
                                    <div class="form-group"><label for="description" class=" form-control-label">Description</label><input required value={dessert.description} onChange={(event) => handleInput(event)} name='description' type="text" id="description" placeholder="Enter description" class="form-control" /></div>
                                    <button name='edit' id='edit' type="submit" class="btn btn-primary btn-block">Edit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EditProduct