import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Config from '../utils/Config'
import api, { apiDeleteFlavor, apiEditFlavor, apiGetAllFlavors, apiSaveFlavor } from '../utils/ApiHandler'

function Flavor() {
    const [flavors, setFlavors] = useState([])
    const [flavorName, setFlavorName] = useState("")
    const [editflavorName, setEditFlavorName] = useState("")
    const [editflavorId, setEditFlavorId] = useState("")



    console.log(flavorName)

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
    // for fetching data

    useEffect(() => {
        fetchFlavorsAsync();
    }, []);

    //   for adding data
    function flavorOnSubmit(event) {
        event.preventDefault()
        const putFlavorAsync = async () => {
            try {
                const result = await apiSaveFlavor(flavorName);
                console.log("saved", flavors)
            } catch (error) {
                console.log(error)
            }
            setFlavorName("")
            fetchFlavorsAsync();

        };
        putFlavorAsync();
    }
    //   for removing data
    function flavorOnDeleteClickHandler(id) {
        const deleteFlavorAsync = async (id) => {
            console.log('id', id)
            try {
                const result = await apiDeleteFlavor(id);

                console.log("saved", id)
            } catch (error) {
                console.log(error)
            }
            fetchFlavorsAsync(id);
            setEditFlavorId("")
            setEditFlavorName("")
        };
        deleteFlavorAsync(id);
    }
    //   for edit data
    function flavorOnEditClickHandler(event) {
        event.preventDefault()
        const editFlavorAsync = async () => {
            console.log('id', editflavorId, editflavorName)
            try {
                const result = await apiEditFlavor(editflavorId, editflavorName);

                console.log("saved", editflavorId)
            } catch (error) {
                console.log(error)
            }
            fetchFlavorsAsync();
            setEditFlavorName("")
            setEditFlavorId("")
        };
        editFlavorAsync();
    }
    function flavorIdGetterOnClick(id, name) {
        setEditFlavorName(name)
        setEditFlavorId(id)
    }



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
                                            {flavors.map((flavor) => (
                                                <tr key={flavor.id}>
                                                    <th scope="row">{flavor.id}</th>
                                                    <td>{flavor.name}</td>
                                                    <td onClick={() => flavorIdGetterOnClick(flavor.id, flavor.name)} style={{ textAlign: 'right', color: "green" }}><i className='fa-solid fa-edit'></i></td>
                                                    <td onClick={() => flavorOnDeleteClickHandler(flavor.id)} style={{ color: "red", fontWeight: '1000' }} className='text-center'><i className='fa-solid fa-trash-o'></i></td>
                                                </tr>
                                            ))}


                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-5">
                            <form class="card" onSubmit={flavorOnSubmit}>
                                <div class="card-header"><strong>Add Flavor</strong></div>
                                <div class="card-body card-block">
                                    <div class="form-group"><label for="company" class=" form-control-label">Flavor Name</label><input value={flavorName} onChange={(event) => setFlavorName(event.target.value)} type="text" id="company" placeholder="Enter category name" class="form-control" /></div>
                                    <button type="submit" class="btn btn-primary btn-block">Add</button>

                                </div>
                            </form>
                            <form class="card" onSubmit={(event) => flavorOnEditClickHandler(event)} >
                                <div class="card-header"><strong>Edit Flavor {editflavorId == "" ? "" : `# ${editflavorId}`} </strong></div>
                                <div class="card-body card-block">
                                    <div class="form-group"><label for="company" class=" form-control-label">Flavor Name</label><input type="text" id="company" placeholder="Enter category name" class="form-control" value={editflavorName} onChange={(e) => setEditFlavorName(e.target.value)} disabled={editflavorId === "" ? true : false} /></div>
                                    <button type="submit" class="btn btn-primary btn-block" disabled={editflavorId === "" ? true : false} >Edit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Flavor