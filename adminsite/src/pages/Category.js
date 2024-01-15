import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Config from '../utils/Config'
import api, { apiDeleteCategory, apiEditCategory, apiGetAllCategory, apiSaveCategory } from '../utils/ApiHandler'


function Category() {
    const [Categorys, setCategorys] = useState([{image:""}])
    const [CategoryName, setCategoryName] = useState("")
    const [editCategoryName, setEditCategoryName] = useState("")
    const [editCategoryId, setEditCategoryId] = useState("")
    const [imgName, setImgName] = useState("Choose Image")
    const [editImgName, setEditImgName] = useState("Choose Image")
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
        const putCategoryAsync = async (image) => {
            try {
                const result = await apiSaveCategory(CategoryName , image);
                console.log("saved", Categorys)
                setImgName("Choose Image")

            } catch (error) {
                console.log(error)
            }
            setCategoryName("")
            fetchCategorysAsync();

        };
        putCategoryAsync(event.target.image.files[0]);
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
        const editCategoryAsync = async (image) => {
            console.log('id', editCategoryId, editCategoryName)
            try {
                const result = await apiEditCategory(editCategoryId, editCategoryName, image);
                setEditImgName("Choose Image")

                console.log("saved", editCategoryId)
            } catch (error) {
                console.log(error)
            }
            fetchCategorysAsync()
            setEditCategoryName("")
            setEditCategoryId("");

        };
        editCategoryAsync(event.target.image.files[0]);
    }
    function CategoryIdGetterOnClick(id, name, imgname) {
        let imagePath = imgname.split("/")
        setEditCategoryName(name)
        setEditCategoryId(id)
        setEditImgName(imagePath[imagePath.length-1])
    }

    function onChangeImage(event){
        if(event.target.files && event.target.files[0]){
            setImgName(event.target.files[0].name)
            console.log(event.target.files[0].name)
        }else{
            setImgName("Choose Image")
            console.log("else")
        }
    }
    function onChangeEditImage(event){
        if(event.target.files && event.target.files[0]){
            setEditImgName(event.target.files[0].name)
            console.log(event.target.files[0].name)
        }else{
            console.log("else")
        }
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
                                                <th scope="col">Image</th>
                                                <th scope="col">Category Name</th>
                                                <th scope="col"></th>
                                                <th scope="col"></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {Categorys.map((Category) => (
                                                <tr key={Category.id}>
                                                    <th scope="row">{Category.id}</th>
                                                    <td><img src={Category.image} height={'30px'}/></td>
                                                    <td>{Category.name}</td>
                                                    <td onClick={() => CategoryIdGetterOnClick(Category.id, Category.name, Category.image)} style={{ textAlign: 'right', color: "green" }}><i className='fa-solid fa-edit'></i></td>
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
                                    <div class="form-group"><label for="company" class=" form-control-label">Category Name</label><input required value={CategoryName} onChange={(event) => setCategoryName(event.target.value)} type="text" id="company" placeholder="Enter category name" class="form-control" /></div>
                                    <div class="form-group"><label for="image" class=" form-control-label">Category Image</label>
                                        <div class="custom-file">
                                            <input required onChange={(e)=>onChangeImage(e)} type="file" class="custom-file-input" id="image" name='image' />
                                            <label class="custom-file-label" for="image">{imgName}</label>
                                        </div>
                                    </div>
                                    <button type="submit" class="btn btn-primary btn-block">Add</button>

                                </div>
                            </form>
                            <form class="card" onSubmit={(event) => CategoryOnEditClickHandler(event)} >
                                <div class="card-header"><strong>Edit Category {editCategoryId == "" ? "" : `# ${editCategoryId}`} </strong></div>
                                <div class="card-body card-block">
                                    <div class="form-group"><label for="company" class=" form-control-label">Category Name</label><input type="text" id="company" placeholder="Enter category name" class="form-control" value={editCategoryName} onChange={(e) => setEditCategoryName(e.target.value)} disabled={editCategoryId === "" ? true : false} /></div>
                                    <div class="form-group"><label for="image" class=" form-control-label">Category Image</label>
                                        <div class="custom-file">
                                            <input onChange={(e)=>onChangeEditImage(e)} type="file" class="custom-file-input" id="image" name='image' />
                                            <label class="custom-file-label" for="image">{editImgName}</label>
                                        </div>
                                    </div>
                                    <button type="submit" class="btn btn-primary btn-block" disabled={editCategoryId === "" ? true : false} >Edit</button>
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