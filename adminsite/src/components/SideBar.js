import React from 'react'
import Config from '../utils/Config'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'


function SideBar({ asideClass, setAsideDisplay, asideDisplay, activepage }) {
    const sidebarItems = Config.sidebarItem
    var leftPanel = document.getElementById("left-panel")

    const onSideBarItemClick = () => {
        if (window.screen.width<=768) {
            setAsideDisplay("none")
        }

    }

    const sidebar = sidebarItems.map(
        (sidebarItem) => {
            return (

                <li key={sidebarItem.index} onClick={onSideBarItemClick} className={sidebarItem.index == activepage ? "active" : ""} >
                    {/* {if (sidebarItem)} */}
                    <Link to={sidebarItem.url} class="dropdown-toggle" >
                        <i class={"menu-icon fa " + sidebarItem.icon.toString()} > </i>{sidebarItem.title}
                    </Link>
                </li>

            )
        })
    return (
        <>
            <aside id="left-panel" class={asideClass} style={{ display: asideDisplay }}>
                <nav class="navbar navbar-expand-sm navbar-default">
                    <div id="main-menu" class="main-menu collapse navbar-collapse">
                        <ul class="nav navbar-nav">
                            {/* <li>
                                <a href="index.html"><i class="menu-icon fa fa-laptop"></i>Dashboard </a>
                            </li> */}
                            {sidebar[0]}
                            <li class="menu-title">Manage Products</li>
                            {sidebar.slice(1)}
                        </ul>
                    </div>
                </nav>
            </aside>
        </>
    )
}

export default SideBar