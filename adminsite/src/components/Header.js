import React from 'react'
import logo from "ElaAdmin/images/logo.png"
// import logo from "ElaAdmin/images/delicravelogo.png"

import logo2 from "ElaAdmin/images/logo2.png"
import f1 from "ElaAdmin/images/avatar/1.jpg"
import f2 from "ElaAdmin/images/avatar/2.jpg"
import f3 from "ElaAdmin/images/avatar/3.jpg"
import f4 from "ElaAdmin/images/avatar/4.jpg"
import adminImg from "ElaAdmin/images/admin.jpg"

import "ElaAdmin/assets/css/style.css"

function Header({ onSidebarClick }) {
    return (
        <>
            <header id="header" class="header">
                <div class="top-left">
                    <div class="navbar-header">
                        <a class="navbar-brand" href="./">
                            {/* <img width={"60px"} src={logo} alt="Logo" /> */}
                            <a href="#"><img src="https://see.fontimg.com/api/renderfont4/EalOz/eyJyIjoiZnMiLCJoIjo3NCwidyI6MTUwMCwiZnMiOjQ5LCJmZ2MiOiIjMzA5OEY1IiwiYmdjIjoiI0ZGRkZGRiIsInQiOjF9/REVMSUNSQVZF/rustic-shine.png" alt="Pretty fonts" /></a></a>
                        <a class="navbar-brand hidden" href="./"><img src={logo2} alt="Logo" /></a>
                        <a id="menuToggle" class="menutoggle" onClick={onSidebarClick}><i class="fa fa-bars"></i></a>
                    </div>
                </div>

                <div class="top-right">
                    <div class="header-menu">
                        <div class="header-left">

                            <div class="dropdown for-message togg" onClick={() => {
                                for (let index = 0; index < 1; index++) {
                                    document.getElementsByClassName("togg")[index].classList.toggle("show")
                                }
                            }
                            }>
                                <div class="dropdown-menu togg">
                                    
                                </div>
                            </div>
                        </div>

                        <div class="user-area dropdown float-right togg" onClick={() => {
                            for (let index = 3; index < 4; index++) {
                                document.getElementsByClassName("togg")[index].classList.toggle("show")
                            }
                        }
                        }>
                            <a href="#" class="dropdown-toggle active" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <img class="user-avatar rounded-circle" src={adminImg} alt="User Avatar" />
                            </a>

                            <div class="user-menu dropdown-menu togg">

                                <a class="nav-link" href="#"><i class="fa fa-power -off"></i>Logout</a>
                            </div>
                        </div>

                    </div>
                </div>

            </header>
        </>
    )
}

export default Header