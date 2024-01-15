import React, { useEffect, useState } from 'react'
import { apiGetAllWishlistItemsByCustomerId } from '../utils/ApiHandler'
import '../styles/stylewish.css'
import Config from '../utils/Config'
import NavBar from './NavBar'
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min'
import AuthHandler from '../utils/AuthHandler'
import axios from 'axios'
function WishList() {

    const init = [{
        "id": 10,
        "name": "Chocobar",
        "price": 100.0,
        "stockquantity": 100,
        "description": "Sweet",
        "category": {
            "id": 13,
            "name": "Ice Creams",
            "image": "/media/category_images/CONE_ICE_CREAM.jpg"
        },
        "flavor": {
            "id": 4,
            "name": "Mango"
        },
        "unit": "pcs",
        "image": "/media/dessert_images/choco-bar-recipe-a_EYLqVJL.jpg"
    }
    ]

    const [wishlistItems, setwishlistItems] = useState(init)
    const [customerId, setCustomerId] = useState(localStorage.getItem("customerId"))

    const fetchWishlistItemsByCustomerIdAsync = async () => {
        try {
            const result = await apiGetAllWishlistItemsByCustomerId(customerId);
            console.log('respo', result)
            setwishlistItems(result)
            console.log("desserts", result)
        } catch (error) {
            console.log(error)
        }
    }
    const apiDeleteAllWishlistItemsByCustomerId = async (customerId) => {

        try {
            console.log(`${Config.wishlist}${customerId}/`)
        
            const response = await axios.delete(`${Config.wishlistsUrl}${customerId}/`);
            return response.data;
        } catch (error) {
            console.error('Error fetching data:', error);
            throw error;
        }
    };
    
    const deleteWish = (id) => {
console.log("asdas")
    }

    useEffect(() => {
        fetchWishlistItemsByCustomerIdAsync()
    }, [])
    return (
        (!AuthHandler.loggedIn()) ?
            (<Redirect to="/delicrave/home" />) :
            (
                <>
                    <div class="wrap">
                        <NavBar />
                        <div class="wishlist">
                            <h1 class="header">MY WISHLIST</h1>
                            <div class="card-main">

                                {wishlistItems.length === 0 ? (<h2 style={{ color: "white", textAlign: "center" }}>Empty</h2>) : (wishlistItems.map((wishlistItem) => (
                                    <div class="card" key={wishlistItem.id}>
                                        <div class="image">
                                            <img src={`${Config.img}${wishlistItem.image}`} />
                                        </div>
                                        <div class="title">
                                            <h1 id="dessert-name">{wishlistItem.name}</h1>
                                        </div>
                                        <div class="title-2">
                                            <h1 id="price">Rs {wishlistItem.price}</h1>
                                        </div>
                                        <div class="des">
                                            <i onClick={() => deleteWish(wishlistItem.id)} class="fa-solid fa-trash"></i>
                                            <button>ADD TO CART</button>
                                        </div>
                                    </div>
                                )))}
                            </div>
                        </div>
                    </div>
                </>
            ))
}

export default WishList