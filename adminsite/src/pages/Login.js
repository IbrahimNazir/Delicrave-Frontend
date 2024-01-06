import React, { useContext, useEffect, useMemo, useRef, useState } from 'react'
import "ElaAdmin/assets/css/style.css"
import logooo from "ElaAdmin/images/logo2.png"


function Login() {
  //states
  const [screenWidth, setScreenWidth] = useState(window.screen.width)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [btnDisabled, setBtnDisabled] = useState(true)
  const [loginStatus, setLoginStatus] = useState(0)
  const refe = useRef(null)

  // sets the screen size as screenWidth
  function onscreenresize() {
    setScreenWidth(window.screen.width)
  }
  useEffect(() => {
    window.addEventListener("resize", onscreenresize)
    refe.current.focus()
    return () => { window.removeEventListener("resize", onscreenresize) }
  }, [])
  // calls the function if screenWidth changes
  useMemo(() => {
    console.log(screenWidth)
    if (screenWidth < 1000) {
      document.body.className = 'small-device'
    }
    else {
      document.body.classList.remove("small-device")
    }
  }, [screenWidth])


  // check validity
  useMemo(() => {
    if (email && password) {
      setBtnDisabled(false)
    } else {
      setBtnDisabled(true)
    }
  }, [email, password])


  // form submit
  function formSubmit(event){
    console.log(email,password)
    event.preventDefault()
    setEmail("")
    setPassword("")
    setLoginStatus(1)
    //AuthHandler.Login(email, password, handleAjaxResponse)
  }

  function handleAjaxResponse(data){
    console.log(data)
    if (data.error) {
      this.setState({ loginStatus: 4 });
    }
    else {
      this.setState({ loginStatus: 3 });
      // window.location = Config.homeUrl
    }
  }


  // formSubmit = (event) => {
  //   event.preventDefault()
  //   setLoginStatus(1)
  //   //AuthHandler.Login(email, password, handleAjaxResponse)
  // }
  // handleAjaxResponse = (data) => {
  //   console.log(data)
  //   if (data.error) {
  //     this.setState({ loginStatus: 4 });
  //   }
  //   else {
  //     this.setState({ loginStatus: 3 });
  //     window.location = Config.homeUrl
  //   }
  // };





  return (
    <>
      <div class="sufee-login d-flex align-content-center flex-wrap">
        <div class="container">
          <div class="login-content">
            <div class="login-logo">
              <a href="index.html">
              <img className='align-content' src="https://see.fontimg.com/api/renderfont4/EalOz/eyJyIjoiZnMiLCJoIjo3NCwidyI6MTUwMCwiZnMiOjQ5LCJmZ2MiOiIjMzA5OEY1IiwiYmdjIjoiI0ZGRkZGRiIsInQiOjF9/REVMSUNSQVZF/rustic-shine.png" alt="Pretty fonts" />
              </a>
            </div>
            <div class="login-form">
              <form onSubmit={formSubmit}>
                <div class="form-group">
                  <label>Username</label>
                  <input type="text" class="form-control" ref={refe} placeholder="Email" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                </div>
                <div class="form-group">
                  <label>Password</label>
                  <input type="password" class="form-control" placeholder="Password" value={password} onChange={(e) => { setPassword(e.target.value) }} />
                </div>
                <div class="checkbox">
                  {/* <label>
                    <input type="checkbox" /> Remember Me
                  </label>
                  <label class="pull-right">
                    <a href="#">Forgotten Password?</a>
                  </label> */}
                </div>
                <button style={{backgroundColor: "#3098f5"}} type="submit" class="btn btn-success btn-flat m-b-30 m-t-30" disabled={btnDisabled}>Sign in</button>

                {/* <div class="register-link m-t-15 text-center">
                  <p>Don't have account ? <a href="#"> Sign Up Here</a></p>
                </div> */}
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login