import React, { useEffect } from 'react'
import "../styles/style.css"
import "../styles/styleCatalog.css"
import { apiGetAllDessertsByCategory } from '../utils/ApiHandler';
import cake from "../images/CAKE.jpg"
import cater1 from "../images/cater-1.jpg"
import cater2 from "../images/cater-2.jpg"
import cater3 from "../images/cater-3.jpg"
import cater4 from "../images/cater-4.jpg"
import background from "../images/background.jpg"
import cookie from "../images/COOKIE.jpg"
import delicrave from "../images/delicrave.png"
import dessert from "../images/desserts.png"
import logo from "../images/logo.png"
import dess from "../images/dess.png"
import milkshake from "../images/MILKSHAKE.jpg"
import cone from "../images/cone.jpg"
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import Config from '../utils/Config';

function CatalogItem() {
    const init = []
    const [desserts, setDesserts] = useState(init)
    const { catId } = useParams()
    const [filterForm, setFilterForm] = useState({
        min_price: "",
        max_price: "",

    })
    const fetchDessertsByCategoryAsync = async () => {
        try {
            const result = await apiGetAllDessertsByCategory(catId);
            console.log('respo', result)
            setDesserts(result)
            console.log("desserts", desserts)
        } catch (error) {
            console.log(error)
        }
    }
    // const filterDessertsByPriceAsync = async () => {
    //     try {
    //         const result = await apiGetAllDessertsByCategory(catId);
    //         console.log('respo', result)
    //         setDesserts(result)
    //         console.log("desserts", desserts)
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    const sortByPrice = (order) => {
        if (order === "asc") {
            console.log(order)
            setDesserts([...desserts].sort((a, b) => Number(a.price) - Number(b.price)))
            console.log(desserts)

        }
        else if (order === "desc") {
            setDesserts([...desserts].sort((a, b) => Number(b.price) - Number(a.price)))
            console.log(desserts)

        }
    }



    
    const searchProduct = async (event) => {
        event.preventDefault()
        const apiUrl = `${Config.search}?name=${event.target.search.value}`;
        try {

            const response = await axios.get(apiUrl);
            setDesserts(response.data)

            console.log('Filter Response:', response.data);
        } catch (error) {
            // Handle errors
            console.error('Filter Error:', error);
        }
    };

    // const handleInput = (e) => {
    //     const { name, value } = e.target
    //     se  tFilterForm({
    //         ...filterForm,
    //         [name]: value
    //     }) 
    // } 
    const disable = (event) => {
        event.target.firstChild.disabled = "true"
    }

    // for fetching data
    useEffect(() => {
        console.log(catId)
        fetchDessertsByCategoryAsync();
        console.log("desserts", desserts)

    }, [catId]);


    return (
        <>
            <div class="wrap">
                <nav class="nav">
                    <div class="nav-logo">
                        <img src={delicrave} width="200px" alt="Delicrave logo" />
                    </div>
                    <div class="nav-menu" id="navMenu">
                        <ul>
                            <li><a href="index.html" class="link" id="homeLink">HOME</a></li>
                            <li class="dropdown">
                                <a href="index.html" class="link dropbtn">PRODUCTS</a>
                                <div class="dropdown-content">
                                    <a href="icecream.html">ICE CREAMS</a>
                                    <a href="cake.html">CAKES</a>
                                    <a href="cookie.html">COOKIES</a>
                                    <a href="shake.html">MILK SHAKES</a>
                                </div>
                            </li>
                            <li class="dropdown">
                                <a href="#" class="link dropbtn">SERVICES</a>
                                <div class="dropdown-content">
                                    <a href="cart.html">VIEW CART</a>
                                    <a href="wishlist.html">WISHLIST</a>
                                    <a href="trackOrder.html">TRACK ORDER</a>
                                    <a href="orderhistory.html">ORDER HISTORY</a>
                                    <a href="index.html">CATERING</a>
                                </div>
                            </li>
                            <li><a href="index.html" class="link">ABOUT</a></li>
                            <li><a href="index.html" class="link">CONTACT</a></li>
                        </ul>
                        <div class="icon">
                            <i class="fa-solid fa-heart" onclick="openPage('wishlist.html')"></i>
                            <i class="fa-solid fa-cart-shopping" onclick="openPage('cart.html')"></i>
                        </div>
                        <div class="nav-buttons">
                            <div id="name">UserName</div>
                            <button class="btn" id="logout-btn">LOGOUT</button>
                        </div>

                    </div>
                    <div class="nav-menu-btn">
                        <i class="bx bx-menu" onclick="myMenuFunction()"></i>
                    </div>
                </nav>
                <form class="search-container" onSubmit={(e)=>searchProduct(e)}>
                    {/* <!--search func create hoga--> */}
                    <input type="text" class="search" placeholder="Search Dessert" name='search'/>
                    <button type='submit' className='fa-solid fa-magnifying-glass' width="1000px"></button>
                </form>
                {/* <form method="post" class="price-filter" onSubmit={(event) => fitlerByPrice(event)}>
                    <div class="min-price">
                        <label for="min-price">Min Price:</label>
                        <input type="number" id="min-price" min="0" name='min_price' onChange={(e) => handleInput(e)} />
                    </div>
                    <div class="max-price">
                        <label for="max-price">Max Price:</label>
                        <input type="number" id="max-price" min="0" name='max_price' onChange={(e) => handleInput(e)} />
                    </div>
                    <button type='submit' id="apply">Apply Filter</button>
                </form> */}
                <div class="sort-filter">
                    {/* <label for="sort"><div>Sort by Price:</div></label> */}
                    {/* <!--sortItems ka func banega--> */}
                    <select id="sort" onClick={(e) => disable(e)} onChange={(event) => sortByPrice(event.target.value)}>
                        <option value="0">Sort by</option>
                        <option value="asc">Low to High</option>
                        <option value="desc">High to Low</option>
                    </select>
                </div>
                <div class="menu" id="Menu">

                    <div class="menu_box" style={{color:"red"}}>

                        {desserts.length === 0? (<h3 className='menu_card'>Could Not Find Dessert</h3>) : (desserts.map((dessert) => (
                            <div key={dessert.id} class="menu_card">
                                <div class="menu_image">
                                    <img src={cone} />
                                </div>

                                <div class="small_card">
                                    <i class="fa-solid fa-heart"></i>
                                </div>

                                <div class="menu_info">
                                    <h2>{dessert.name}</h2>
                                    <h3>{dessert.price}</h3>
                                    <a href="#" class="menu_btn">Add to Cart</a>
                                </div>

                            </div>
                        )))}
                        {/* <div class="menu_card">

                            <div class="menu_image">
                                <img src={cone} />
                            </div>

                            <div class="small_card">
                                <i class="fa-solid fa-heart"></i>
                            </div>

                            <div class="menu_info">
                                <h2>CHOCOLATE</h2>
                                <h3>200 Rs.</h3>
                                <a href="#" class="menu_btn">Add to Cart</a>
                            </div>

                        </div>
                        <div class="menu_card">

                            <div class="menu_image">
                                <img src={cone} />
                            </div>

                            <div class="small_card">
                                <i class="fa-solid fa-heart"></i>
                            </div>

                            <div class="menu_info">
                                <h2>PINEAPPLE</h2>
                                <h3>200 Rs.</h3>
                                <a href="#" class="menu_btn">Add to Cart</a>
                            </div>

                        </div>
                        <div class="menu_card">

                            <div class="menu_image">
                                <img src={cone} />
                            </div>

                            <div class="small_card">
                                <i class="fa-solid fa-heart"></i>
                            </div>

                            <div class="menu_info">
                                <h2>PISTACHIO</h2>
                                <h3>200 Rs.</h3>
                                <a href="#" class="menu_btn">Add to Cart</a>
                            </div>

                        </div>
                        <div class="menu_card">

                            <div class="menu_image">
                                <img src={cone} />
                            </div>

                            <div class="small_card">
                                <i class="fa-solid fa-heart"></i>
                            </div>

                            <div class="menu_info">
                                <h2>MANGO</h2>
                                <h3>200 Rs.</h3>
                                <a href="#" class="menu_btn">Add to Cart</a>
                            </div>

                        </div>
                        <div class="menu_card">

                            <div class="menu_image">
                                <img src={cone} />
                            </div>

                            <div class="small_card">
                                <i class="fa-solid fa-heart"></i>
                            </div>

                            <div class="menu_info">
                                <h2>BLUEBERRY</h2>
                                <h3>200 Rs.</h3>
                                <a href="#" class="menu_btn">Add to Cart</a>
                            </div>

                        </div>
                        <div class="menu_card">

                            <div class="menu_image">
                                <img src={cone} />
                            </div>

                            <div class="small_card">
                                <i class="fa-solid fa-heart"></i>
                            </div>

                            <div class="menu_info">
                                <h2>VANILLA</h2>
                                <h3>200 Rs.</h3>
                                <a href="#" class="menu_btn">Add to Cart</a>
                            </div>

                        </div> */}

                    </div>

                </div>
            </div>
        </>
    )
}

export default CatalogItem