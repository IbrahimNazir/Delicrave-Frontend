import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Config from '../utils/Config'
import api, { apiDeleteCategory, apiEditCategory, apiGetAllCategory, apiSaveCategory } from '../utils/ApiHandler'


function Category() {
    const [Categorys, setCategorys] = useState([])
    const [CategoryName, setCategoryName] = useState("")
    const [editCategoryName, setEditCategoryName] = useState("")
    const [editCategoryId, setEditCategoryId] = useState("")
    console.log(CategoryName)

    const fetchCategorysAsync = async () => {
        try {
            const result = await apiGetAllCategory();
            console.log('respo', result)
            setCategorys(result)
            console.log("asd", Categorys)
        } catch (error) {
            console.log(error)
        }
    };
    // for fetching data

    useEffect(() => {
        fetchCategorysAsync();
    }, []);

    //   for adding data
    function CategoryOnSubmit(event) {
        event.preventDefault()
        const putCategoryAsync = async () => {
            try {
                const result = await apiSaveCategory(CategoryName);
                console.log("saved", Categorys)
            } catch (error) {
                console.log(error)
            }
            setCategoryName("")
            fetchCategorysAsync();

        };
        putCategoryAsync();
    }
    //   for removing data
    function CategoryOnDeleteClickHandler(id) {
        const deleteCategoryAsync = async (id) => {
            console.log('id', id)
            try {
                const result = await apiDeleteCategory(id);

                console.log("saved", id)
            } catch (error) {
                console.log(error)
            }
            fetchCategorysAsync(id);
            setEditCategoryId("")
            setEditCategoryName("")
        };
        deleteCategoryAsync(id);
    }
    //   for edit data
    function CategoryOnEditClickHandler(event) {
        event.preventDefault()
        const editCategoryAsync = async () => {
            console.log('id', editCategoryId, editCategoryName)
            try {
                const result = await apiEditCategory(editCategoryId, editCategoryName);

                console.log("saved", editCategoryId)
            } catch (error) {
                console.log(error)
            }
            fetchCategorysAsync()
            setEditCategoryName("")
            setEditCategoryId("");

        };
        editCategoryAsync();
    }
    function CategoryIdGetterOnClick(id, name) {
        setEditCategoryName(name)
        setEditCategoryId(id)
    }



    return (
        <>
            <div class="content">
                <div class="animated fadeIn">
                    <div class="row">
                        <div class="col-lg">
                            <div class="card">
                                <div class="card-header">
                                    <strong class="card-title">View Categories</strong>
                                </div>
                                <div class="card-body">
                                    <table class="table table-striped">
                                        <thead>
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">Category Name</th>
                                                <th scope="col"></th>
                                                <th scope="col"></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {Categorys.map((Category) => (
                                                <tr key={Category.id}>
                                                    <th scope="row">{Category.id}</th>
                                                    <td>{Category.name}</td>
                                                    <td onClick={() => CategoryIdGetterOnClick(Category.id, Category.name)} style={{ textAlign: 'right', color: "green" }}><i className='fa-solid fa-edit'></i></td>
                                                    <td onClick={() => CategoryOnDeleteClickHandler(Category.id)} style={{ color: "red", fontWeight: '1000' }} className='text-center'><i className='fa-solid fa-trash-o'></i></td>
                                                </tr>
                                            ))}


                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-5">
                            <form class="card" onSubmit={CategoryOnSubmit}>
                                <div class="card-header"><strong>Add Category</strong></div>
                                <div class="card-body card-block">
                                    <div class="form-group"><label for="company" class=" form-control-label">Category Name</label><input value={CategoryName} onChange={(event) => setCategoryName(event.target.value)} type="text" id="company" placeholder="Enter category name" class="form-control" /></div>
                                    <button type="submit" class="btn btn-primary btn-block">Add</button>

                                </div>
                            </form>
                            <form class="card" onSubmit={(event) => CategoryOnEditClickHandler(event)} >
                                <div class="card-header"><strong>Edit Category {editCategoryId == "" ? "" :`# ${editCategoryId}` } </strong></div>
                                <div class="card-body card-block">
                                    <div class="form-group"><label for="company" class=" form-control-label">Category Name</label><input type="text" id="company" placeholder="Enter category name" class="form-control" value={editCategoryName} onChange={(e) => setEditCategoryName(e.target.value)} disabled={editCategoryId === "" ? true : false} /></div>
                                    <button type="button" class="btn btn-primary btn-block" disabled={editCategoryId === "" ? true : false} >Edit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Category