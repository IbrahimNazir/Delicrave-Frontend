import React from 'react'
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
import "../styles/stylecart.css"

function Cart() {
    const init = []
    const [cartItems, setCartItems] = useState(init)
    const [customerId, setCustomerId] = useState("1")

    const fetchCartItemsByCustomerIdAsync = async () => {
        try {
            const result = await apiGetAllCartItemsByCustomerId(customerId);
            console.log('respo', result)
            setCartItems(result)
            console.log("desserts", cartItems)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchCartItemsByCustomerIdAsync()
    }, [])
    return (
        <>
            <div class="cart">
                <h1 class="header">MY CART</h1>
                <div class="item-body">
                    {cartItems.map((cartItem) => (
                        <div class="flex-container">
                            <div class="image">
                                <img src="./images/CAKE.jpg" alt="Dessert" width="100px" />
                            </div>
                            <div class="flex-item product">
                                <strong>{cartItem.category.name}</strong>
                                <p>Vanilla  and candy</p>
                            </div>
                            <div class="flex-item styled-select unit">
                                <select name="unit" id="unit">
                                    <option value="1">Cup</option>
                                    <option value="2">Cone</option>
                                    <option value="3">1 pond</option>
                                    <option value="4">1 litre</option>
                                </select>
                            </div>
                            <div class="flex-item quantity">
                                <div class="addsub">
                                    <span>−</span>
                                    <label>1</label>
                                    <span>+</span>
                                </div>
                            </div>
                            <div class="flex-item price">
                                <div>
                                    <span>Rs.1234</span>
                                </div>
                            </div>
                            <div class="flex-item delete">
                                <div>
                                    <i class="fa-solid fa-trash"></i>
                                </div>
                            </div>
                        </div>

                    ))}

                    <div class="flex-container">
                        <div class="image">
                            <img src="./images/COOKIE.jpg" alt="Dessert" width="100px" />
                        </div>
                        <div class="flex-item product">
                            <strong>COOKIES</strong>
                            <p>Chocolate chip Crunch Cookies</p>
                        </div>
                        <div class="flex-item styled-select unit">
                            <select name="unit" id="unit">
                                <option value="1">Cup</option>
                                <option value="2">Cone</option>
                                <option value="3">1 pond</option>
                                <option value="4">1 litre</option>
                            </select>
                        </div>
                        <div class="flex-item quantity">
                            <div class="addsub">
                                <span>−</span>
                                <label>1</label>
                                <span>+</span>
                            </div>
                        </div>
                        <div class="flex-item price">
                            <div>
                                <span>Rs.1234</span>
                            </div>
                        </div>
                        <div class="flex-item delete">
                            <div>
                                <i class="fa-solid fa-trash"></i>
                            </div>
                        </div>
                    </div>

                    <div class="flex-container">
                        <div class="image">
                            <img src="./images/CAKE.jpg" alt="Dessert" width="100px" />
                        </div>
                        <div class="flex-item product">
                            <strong>CAKE</strong>
                            <p>Vanilla cake with sprinkles and candy</p>
                        </div>
                        <div class="flex-item styled-select unit">
                            <select name="unit" id="unit">
                                <option value="1">Cup</option>
                                <option value="2">Cone</option>
                                <option value="3">1 pond</option>
                                <option value="4">1 litre</option>
                            </select>
                        </div>
                        <div class="flex-item quantity">
                            <div class="addsub">
                                <span>−</span>
                                <label>1</label>
                                <span>+</span>
                            </div>
                        </div>
                        <div class="flex-item price">
                            <div>
                                <span>Rs.1234</span>
                            </div>
                        </div>
                        <div class="flex-item delete">
                            <div>
                                <i class="fa-solid fa-trash"></i>
                            </div>
                        </div>
                    </div>

                    <div class="flex-container">
                        <div class="image">
                            <img src="./images/CAKE.jpg" alt="Dessert" width="100px" />
                        </div>
                        <div class="flex-item product">
                            <strong>CAKE</strong>
                            <p>Vanilla cake with sprinkles and candy</p>
                        </div>
                        <div class="flex-item styled-select unit">
                            <select name="unit" id="unit">
                                <option value="1">Cup</option>
                                <option value="2">Cone</option>
                                <option value="3">1 pond</option>
                                <option value="4">1 litre</option>
                            </select>
                        </div>
                        <div class="flex-item quantity">
                            <div class="addsub">
                                <span>−</span>
                                <label>1</label>
                                <span>+</span>
                            </div>
                        </div>
                        <div class="flex-item price">
                            <div>
                                <span>Rs.1234</span>
                            </div>
                        </div>
                        <div class="flex-item delete">
                            <div>
                                <i class="fa-solid fa-trash"></i>
                            </div>
                        </div>
                    </div>

                    <div class="flex-container">
                        <div class="image">
                            <img src="./images/CAKE.jpg" alt="Dessert" width="100px" />
                        </div>
                        <div class="flex-item product">
                            <strong>CAKE</strong>
                            <p>Vanilla cake with sprinkles and candy</p>
                        </div>
                        <div class="flex-item styled-select unit">
                            <select name="unit" id="unit">
                                <option value="1">Cup</option>
                                <option value="2">Cone</option>
                                <option value="3">1 pond</option>
                                <option value="4">1 litre</option>
                            </select>
                        </div>
                        <div class="flex-item quantity">
                            <div class="addsub">
                                <span>−</span>
                                <label>1</label>
                                <span>+</span>
                            </div>
                        </div>
                        <div class="flex-item price">
                            <div>
                                <span>Rs.1234</span>
                            </div>
                        </div>
                        <div class="flex-item delete">
                            <div>
                                <i class="fa-solid fa-trash"></i>
                            </div>
                        </div>
                    </div>

                    <div class="flex-container">
                        <div class="image">
                            <img src="./images/CAKE.jpg" alt="Dessert" width="100px" />
                        </div>
                        <div class="flex-item product">
                            <strong>CAKE</strong>
                            <p>Vanilla cake with sprinkles and candy</p>
                        </div>
                        <div class="flex-item styled-select unit">
                            <select name="unit" id="unit">
                                <option value="1">Cup</option>
                                <option value="2">Cone</option>
                                <option value="3">1 pond</option>
                                <option value="4">1 litre</option>
                            </select>
                        </div>
                        <div class="flex-item quantity">
                            <div class="addsub">
                                <span>−</span>
                                <label>1</label>
                                <span>+</span>
                            </div>
                        </div>
                        <div class="flex-item price">
                            <div>
                                <span>Rs.1234</span>
                            </div>
                        </div>
                        <div class="flex-item delete">
                            <div>
                                <i class="fa-solid fa-trash"></i>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="flex-item box">
                    <div class="item-body">
                        <div class="item-header row">
                            <h2>ORDER SUMMARY</h2>
                        </div>
                        <div class="item-body-body">
                            <hr />
                            <div class="item-header row">
                                <span>Subtotal</span>
                                <label>123.34</label>
                            </div>
                            <div class="item-header row">
                                <span><strong>Shipping
                                    Fee</strong></span>
                                <label>123.34</label>
                            </div>
                            <div class="item-header row">
                                <span><strong>Total</strong></span>
                                <label><strong>Rs
                                    12323</strong></label>
                            </div>
                            <div class="row">
                                <a class="sharp-button" onclick="openPage('confirmOrder.html')">Proceed
                                    to
                                    checkout</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cart