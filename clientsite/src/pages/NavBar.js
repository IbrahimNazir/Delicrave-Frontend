import React, { useEffect, useState } from 'react'
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
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import { apiGetAllCategory } from '../utils/ApiHandler'
import AuthHandler from '../utils/AuthHandler'
function NavBar() {

    const [userName, setUserName] = useState("LOGIN")
    const catalogIdHistory = useHistory()
    const [categories, setCategories] = useState([{}])
    const fetchCategorysAsync = async () => {
        try {
            const result = await apiGetAllCategory();
            console.log('respo', result)
            setCategories(result)
            setUserName(localStorage.getItem("customerName"))
            console.log("asd", categories)
        } catch (error) {
            console.log(error)
        }
    };
    // for fetching data

    useEffect(() => {
        fetchCategorysAsync();
    }, []);

    const goToCatalog = (categoryId) => {
        if (AuthHandler.loggedIn()) {
            catalogIdHistory.push(`/delicrave/catalog/${categoryId}`)
        } else {
            login()
        }
    }


    const gotoHome = () => {
        catalogIdHistory.push(`/delicrave/home`)
    }
    const gotoCart = () => {
        if (AuthHandler.loggedIn()) {
            catalogIdHistory.push(`/delicrave/cart/${localStorage.getItem("customerId")}`)
        } else {
            login()
        }
    }
    const gotoWishlist = () => {
        if (AuthHandler.loggedIn()) {

            catalogIdHistory.push(`/delicrave/wishlist/${localStorage.getItem("customerId")}`)
        } else {
            login()
        }
    }
    const gotoOrderHistory = () => {
        if (AuthHandler.loggedIn()) {

            catalogIdHistory.push(`/delicrave/orderhistory/${localStorage.getItem("customerId")}`)
        } else {
            login()
        }
    }


    // style
    function myMenuFunction() {
        var i = document.getElementById("navMenu");

        if (i.className === "nav-menu") {
            i.className += " responsive";
        } else {
            i.className = "nav-menu";
        }
    }
    function openPage(url) {
        window.location.href = url;
    }
    var a = document.getElementById("login-btn")
    var b = document.getElementById("signup-btn")
    var c = document.getElementById("home")
    var x = document.getElementById("login")
    var y = document.getElementById("signup")
    var m = document.getElementById("navbar")
    var n = document.getElementById("footer")

    function login() {
        console.log("sdsdlsnfdl")
        x.style.left = "5px";
        y.style.right = "-520px";
        c.style.right = "-700px";
        a.className += " white-btn";
        b.className = "btn";
        x.style.opacity = 1;
        y.style.opacity = 0;
        c.style.opacity = 0;
        m.style.display = "none";
        n.style.display = "none";
    }

    function signup() {
        x.style.left = "-510px";
        c.style.right = "-700px";
        y.style.right = "6px";
        a.className = "btn";
        b.className += " white-btn";
        x.style.opacity = 0;
        y.style.opacity = 1;
        c.style.opacity = 0;
        m.style.display = "none";
        n.style.display = "none";
    }

    function home() {
        x.style.left = "500px";
        y.style.right = "-500px";
        c.style.right = "4px";
        x.style.opacity = 0;
        y.style.opacity = 0;
        c.style.opacity = 1;
    }
    document.addEventListener("DOMContentLoaded", function () {
        home();

        var homeLink = document.getElementById("homeLink");
        homeLink.addEventListener("click", function (event) {
            event.preventDefault();
            home();
        });
    });





    return (
        <nav class="nav" id="navbar">
            <div class="nav-logo">
                <img src={delicrave} width="200px" alt="Delicrave logo" />
            </div>
            <div class="nav-menu" id="navMenu">
                <ul>
                    <li><a onClick={gotoHome} class="link" id="homeLink">HOME</a></li>
                    <li class="dropdown">
                        <a href="#products" class="link dropbtn">PRODUCTS</a>
                        <div class="dropdown-content">
                            {categories.map((category) => (
                                <a onClick={() => goToCatalog(category.id)}>{category.name}</a>
                            ))}
                            {/* <a href="icecream.html">ICE CREAMS</a>
                  <a href="cake.html">CAKES</a>
                  <a href="cookie.html">COOKIES</a>
                  <a href="shake.html">MILK SHAKES</a> */}
                        </div>
                    </li>
                    <li class="dropdown">
                        <a href="#" class="link dropbtn">SERVICES</a>
                        <div class="dropdown-content">
                            <a onClick={gotoCart}>VIEW CART</a>
                            <a onClick={gotoWishlist}>WISHLIST</a>
                            <a href="trackOrder.html">TRACK ORDER</a>
                            <a onClick={gotoOrderHistory}>ORDER HISTORY</a>
                            {/* <a href="#catering-services">CATERING</a> */}
                        </div>
                    </li>
                    <li><a href="#about-us" class="link">ABOUT</a></li>
                    <li><a href="#footer" class="link">CONTACT</a></li>
                </ul>

                <div class="nav-buttons">
                    <button class="btn white-btn" id="login-btn" onClick={login}>{AuthHandler.loggedIn() ? userName.toUpperCase() : "LOGIN"}</button>
                    <button class="btn" id="signup-btn" onClick={signup}>{AuthHandler.loggedIn() ? "LOGOUT" : "SIGNUP"}</button>
                </div>
            </div>
            <div class="nav-menu-btn">
                <i class="bx bx-menu" onClick={myMenuFunction}></i>
            </div>
        </nav>
    )
}

export default NavBar