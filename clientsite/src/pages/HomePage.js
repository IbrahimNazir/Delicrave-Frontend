import React, { useEffect, useState } from 'react'
import "../styles/style.css"
import { apiGetAllCategory } from '../utils/ApiHandler';
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
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function HomePage() {
  const catalogIdHistory = useHistory()
  const [categories, setCategories] = useState([{}])
  const fetchCategorysAsync = async () => {
    try {
      const result = await apiGetAllCategory();
      console.log('respo', result)
      setCategories(result)
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
    catalogIdHistory.push(`catalog/${categoryId}`)
  }


  return (
    <>
      <div class="wrap">
        <nav class="nav" id="navbar">
          <div class="nav-logo">
            <img src={delicrave} width="200px" alt="Delicrave logo" />
          </div>
          <div class="nav-menu" id="navMenu">
            <ul>
              <li><a href="#" class="link" id="homeLink">HOME</a></li>
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
                  <a href="cart.html">VIEW CART</a>
                  <a href="wishlist.html">WISHLIST</a>
                  <a href="trackOrder.html">TRACK ORDER</a>
                  <a href="orderhistory.html">ORDER HISTORY</a>
                  <a href="#catering-services">CATERING</a>
                </div>
              </li>
              <li><a href="#about-us" class="link">ABOUT</a></li>
              <li><a href="#footer" class="link">CONTACT</a></li>
            </ul>

            <div class="nav-buttons">
              <button class="btn white-btn" id="login-btn" onclick="login()">LOGIN</button>
              <button class="btn" id="signup-btn" onclick="signup()">SIGNUP</button>
            </div>
          </div>
          <div class="nav-menu-btn">
            <i class="bx bx-menu" onclick="myMenuFunction()"></i>
          </div>
        </nav>
        {/* <!----------------------------------home page-----------------------------> */}
        <div class="home-container" id="home">
          <div class="slogan">
            <h1 class="head_slogan anim">DELIGHT<br />IN EVERY BITE!</h1>
            <p class="slogan_content anim">Satisfy your sweet cravings at Delicrave - where cakes, cookies, ice creams, and milkshakes dance together to create a symphony of indulgence in every delicious bite!</p>
            <div class="buy_btn anim">
              <button class="btn" onclick="scrollToElement('products')">BUY NOW</button>
            </div>
          </div>
          <img src={dessert} alt="desserts" class="dessert_img" />

          <div class="desserts-container" id="products">
            <h1>Categories</h1>
            <div class="card-main">
              {categories.map((category,index) => (
                <div key={category.id} class="card" id={`crd-${index}`}>
                  <div class="image">
                    <img src={cone} />
                  </div>
                  <div class="title">
                    <h1>{category.name}</h1>
                  </div>
                  <div class="des">
                    <p>Indulge in pure bliss with our ice creams - where every scoop is a taste of happiness!</p>
                    <button onClick={()=>goToCatalog(category.id)}>ORDER</button>
                  </div>
                </div>
              ))}


{/*              

              <div class="card" id="crd-3">
                <div class="image">
                  <img src={milkshake} />
                </div>
                <div class="title">
                  <h1>MILKSHAKES</h1>
                </div>
                <div class="des">
                  <p>Sip the pure sweetness - our milkshakes are a delightful creamy blend in every gulp!</p>
                  <button onclick="openPage('shake.html')">ORDER</button>
                </div>
              </div> */}

              <div class="card" id="crd-4">
                <div class="image">
                  <img src={cookie} />
                </div>
                <div class="title">
                  <h1>COOKIES</h1>
                </div>
                <div class="des">
                  <p>Crunch perfection in every <br /> bite – our cookies, a flavor symphony!</p>
                  <button onclick="openPage('cookie.html')">ORDER</button>
                </div>
              </div>
            </div>
          </div>
          <div class="contact" id="catering-services">
            <h1>CATERING SERVICES</h1>
            <div class="catering">
              <form action="mailto:waliyan451@gmail.com" method="post" enctype="text/plain">
                <div class="input-box">
                  <input type="text" class="input-field" name="name" placeholder="Full Name" required />
                  <i class="bx bx-user"></i>
                </div>

                <div class="input-box">
                  <textarea class="input-field" name="message" id="message" placeholder="Email us for catering services" required></textarea>
                  <i class="bx bx-envelope" id="message-icon"></i>
                </div>
                <input type="submit" class="submit" value="Submit" />
              </form>
            </div>
            <div class="cater-imgs">
              <img src={cater1} alt="catering image 1" width="180" height="180" class="cater-img" />
              <img src={cater2} alt="catering image 2" width="180" height="180" class="cater-img" />
              <img src={cater3} alt="catering image 3" width="180" height="180" class="cater-img" />
              <img src={cater4} alt="catering image 4" width="180" height="180" class="cater-img" />
            </div>
          </div>
          <div class="about" id="about-us">
            <h1>ABOUT US</h1>
            <div class="about-text">
              <p>Delicrave is like a magical place for dessert lovers! <br />Imagine walking in,
                and the smell of freshly baked cookies mixes with the sweet scent of
                ice cream. They've got amazing flavors, from chocolatey goodness to fruity
                happiness. The milkshakes are like tasty art, blending yummy ingredients
                into a creamy treat. And the cakes? They're tall, delicious towers.
                Delicrave isn't just a dessert spot; it's where you can escape into a world
                of sweet dreams and tasty bites!</p>
            </div>
          </div>
        </div>
        {/* <!-------------------------------form---------------------------------------> */}
        <div class="form-box">

          {/* <!------------------Login form---------------------------> */}
          <div class="login-container" id="login">
            <div class="top">
              <span>Don't have an account? <a href="#" onclick="signup()">SignUp</a></span>
              <header>Login</header>
            </div>
            <form id="log-form">
              <div class="input-box">
                <input type="text" class="input-field" placeholder="Username or Email" required />
                <i class="bx bx-user"></i>
              </div>
              <div class="input-box">
                <input type="password" class="input-field" placeholder="Password" required />
                <i class="bx bx-lock-alt"></i>
              </div>
              <div class="input-box">
                <input type="submit" class="submit" value="Sign In" />
              </div>
            </form>
            <div class="two-col">
              <div class="one">
                <input type="checkbox" id="login-check" />
                <label for="login-check">Remember Me</label>
              </div>
              <div class="two">
                <label><a href="#">Forgot Password?</a></label>
              </div>
            </div>
          </div>

          {/* <!------------------Signup form---------------------------> */}
          <div class="signup-container" id="signup">
            <div class="top">
              <span>Have an account? <a href="#" onclick="login()">Login</a></span>
              <header>Registration</header>
            </div>
            <form id="reg-form">
              <div class="two-forms">
                <div class="input-box inputControl" >
                  <input type="text" class="input-field" id="firstname" placeholder="Firstname" />
                  <i class="bx bx-user"></i>
                  <div class="error"></div>
                </div>
                <div class="input-box inputControl">
                  <input type="text" class="input-field" id="lastname" placeholder="Lastname" />
                  <i class="bx bx-user"></i>
                  <div class="error"></div>
                </div>
              </div>
              <div class="two-forms">
                <div class="input-box inputControl">
                  <input type="text" class="input-field" id="gender" placeholder="Gender" />
                  <i class="bx bx-user"></i>
                  <div class="error"></div>
                </div>
                <div class="input-box inputControl">
                  <input type="number" class="input-field" id="age" placeholder="Age" />
                  <i class="bx bx-user"></i>
                  <div class="error"></div>
                </div>
              </div>
              <div class="input-box inputControl">
                <input type="text" class="input-field" id="email" placeholder="Email Address" />
                <i class="bx bx-envelope"></i>
                <div class="error"></div>
              </div>
              <div class="input-box inputControl">
                <input type="password" class="input-field" id="password" placeholder="Password" />
                <i class="bx bx-lock-alt"></i>
                <div class="error"></div>
              </div>
              <div class="input-box">
                <input type="submit" class="submit" value="Register" />
              </div>
            </form>
            <div class="two-col">
              <div class="one">
                <input type="checkbox" id="register-check" />
                <label for="register-check">Remember Me</label>
              </div>
              <div class="two">
                <label><a href="#">Terms & Conditions</a></label>
              </div>
            </div>
          </div>
        </div>
      </div >
      <div class="footer-div">
        <footer id="footer">
          <div class="container">
            <div class="footer-content">
              <h3>CONTACT US</h3>
              <p>Email: Info@delicrave.com</p>
              <p>Phone: +021 25618787</p>
              <p>Address: Gulshan-e-Iqbal block#2 123 street</p>
            </div>
            <div class="footer-content">
              <h3>QUICK LINKS</h3>
              <ul class="list">
                <li><a href="#">Home</a></li>
                <li><a href="#about-us">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#products">Products</a></li>
                <li><a href="#catering-services">Contact</a></li>
              </ul>
            </div>
            <div class="footer-content">
              <h3>FOLLOW US</h3>
              <ul class="social-icons">
                <li><a href=""><i class="fab fa-facebook"></i></a></li>
                <li><a href=""><i class="fab fa-twitter"></i></a></li>
                <li><a href=""><i class="fab fa-instagram"></i></a></li>
                <li><a href=""><i class="fab fa-linkedin"></i></a></li>
              </ul>
            </div>
          </div>
          <div class="bottom-bar">
            <p>&copy; 2023 Delicrave . All rights reserved</p>
          </div>
        </footer>
      </div>
    </>
  )
}

export default HomePage