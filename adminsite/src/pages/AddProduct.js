import React, { useEffect, useState } from 'react'
import { apiGetAllCategory, apiGetAllFlavors, apiGetAllUnit, apiSaveDessert } from '../utils/ApiHandler'
import { useHistory } from 'react-router-dom/cjs/react-router-dom'

function AddProduct() {

    const [flavors, setFlavors] = useState([])
    const [categorys, setCategorys] = useState([])
    const [imgName, setImgName] = useState("Choose Image")
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

    useEffect(() => {
        fetchFlavorsAsync();
        fetchCategorysAsync();
    }, []);


    // add product
    // name, stockquantity, description, category, flavor
    function dessertOnSubmit(event) {
        event.preventDefault()
        if (event.target.category.value === "0") {
            event.target.category.classList.add('is-invalid');
            if (event.target.flavor.value === "0") {
                event.target.flavor.classList.add('is-invalid');
            }
            return
        }
        const putDessertAsync = async (name, price, stockquantity, unit, description, category, flavor, image, addBtn) => {
            try {
                const result = await apiSaveDessert(name, price, stockquantity, unit, description, category, flavor, image);
                addBtn.classList.add("btn-success")
                addBtn.type = "button"
                addBtn.addEventListener('click', handleGoBackButtonClick)
                console.log(addBtn.type)
                event.target.addBtn.innerHTML = "Saved Changes. Go back"
                event.target.reset()
                setImgName("Choose Image")


            } catch (error) {
                console.log(error)
                addBtn.classList.add("btn-danger")
                event.target.addBtn.innerHTML = "Error occured while saving"

            }
            event.target.reset()

        };
        putDessertAsync(
            event.target.name.value,
            event.target.price.value,
            event.target.stockquantity.value,
            event.target.unit.value,
            event.target.description.value,
            event.target.category.value,
            event.target.flavor.value,
            event.target.image.files[0],
            event.target.addBtn
        );

    }

    function handleInput(event) {
        event.target.classList.remove('is-invalid');
        if ((event.target.name == "price" || event.target.name == "stockquantity") && Number(event.target.value) < 0) {
            event.target.value = "0"

        } else if ((event.target.name == "flavor" || event.target.name == "category") && event.target.value == "0") {
            event.target.firstElementChild.disabled = "true"
        }

        else {
            console.log("else")
        }

    }


    function imageNameShower(event) {
        // let imagePath = event.files[0].split("\\")
        // setImgName(imagePath[imagePath.lenght-1])
        console.log("ImageName", event.target.files[0].name)
        setImgName(event.target.files[0].name)
    }


    return (
        <>
            <div class="content">
                <div class="animated fadeIn">
                    <div class="row">
                        <div class="col-lg">
                            <form class="card" onSubmit={(event) => dessertOnSubmit(event)}>
                                <div class="card-header"><strong>Add Ice-Cream</strong></div>
                                <div class="card-body card-block">
                                    <div class="form-group"><label for="name" class=" form-control-label">Dessert Name</label>
                                        <input required name='name' type="text" id="name" placeholder="Enter dessert name" class="form-control" /></div>
                                    <div class="form-group"><label for="category" class=" form-control-label">Dessert Category</label>
                                        <select required onClick={(e) => handleInput(e)} name="category" id="category" class="form-control">
                                            <option value="0">Select category</option>
                                            {categorys.map((category) => (
                                                <option key={category.id} value={category.id}>{category.name}</option>
                                            ))}
                                        </select>
                                    </div>

                                    <div class="form-group"><label for="flavor" class=" form-control-label">Flavour</label>
                                        <select required onClick={(e) => handleInput(e)} name="flavor" id="flavor" class="form-control">
                                            <option value="0">Select flavor</option>
                                            {flavors.map((flavor) => (
                                                <option key={flavor.id} value={flavor.id}>{flavor.name}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div class="form-group"><label for="price" class=" form-control-label">Price</label><input required name='price' type="number" id="price" placeholder="Enter price" class="form-control" onChange={(e) => handleInput(e)} /></div>
                                    <div class="form-group"><label for="stockquantity" class=" form-control-label">Quantity</label><input required name='stockquantity' type="number" id="stockquantity" placeholder="Enter Quantity" class="form-control" onChange={(e) => handleInput(e)} /></div>
                                    <div class="form-group"><label for="unit" class=" form-control-label">Unit</label><input required name='unit' type="text" id="unit" placeholder="Enter unit" class="form-control" /></div>
                                    <div class="form-group"><label for="description" class=" form-control-label">Description</label><input required type="text" id="description" placeholder="Enter Description" class="form-control" /></div>
                                    <div class="form-group"><label for="image" class=" form-control-label">Image</label>
                                        <div class="custom-file">
                                            <input type="file" class="custom-file-input" id="image" onChange={(e) => imageNameShower(e)} />
                                            <label class="custom-file-label" for="image">{imgName}</label>
                                        </div>
                                    </div>

                                    <button name='addBtn' id='addBtn' type="submit" class="btn btn-primary btn-block">Add</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddProduct