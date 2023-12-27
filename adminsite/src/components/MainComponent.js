import React, { useEffect, useState, useMemo } from 'react'
import SideBar from './SideBar'
import RightPanel from './RightPanel'

import "ElaAdmin/assets/css/style.css"

function MainComponent({page, activepage}) {
    const [asideClass, setAsideClass] = useState("left-panel")
    const [screenWidth, setScreenWidth] = useState(window.screen.width)
    const [asideDisplay, setAsideDisplay] = useState("block")

    // sets the screen size as screenWidth
    function onscreenresize() {
        setScreenWidth(window.screen.width)
    }
    useEffect(() => {
        window.addEventListener("resize", onscreenresize)
        return () => { window.removeEventListener("resize", onscreenresize) }
    }, [])


    // set body class
    useMemo(() => {
        console.log(screenWidth)
        if (screenWidth < 1000) {
            document.body.className = 'small-device'
        }
        else {
            document.body.classList.remove("small-device")
        }
        if (screenWidth <= 768) {
            setAsideDisplay("none")
        }
        else{
            setAsideDisplay("block")
        }
    }, [screenWidth])



    // sidebar open close funtion

    // 1010>width ? {body class: open} : {""}
    // 1010<width ? {aside class:"left-panel open-menu"} : {"left-panel"}
    // 768<width ? {display:block} : {display:none}

    function onSidebarClick() {
        if ((document.body.className === "small-device") && screenWidth <= 768) {
            switch (asideDisplay) {
                case "block":
                    setAsideDisplay("none")
                    break;

                default:
                    setAsideDisplay("block")
                    break;
            }
        }
        else if (document.body.className === "small-device") {
            document.body.classList.remove("open")
            switch (asideClass) {
                case "left-panel":
                    setAsideClass("left-panel open-menu")
                    break;
                default:
                    setAsideClass("left-panel")
                    break;
            }
        }
        else {
            document.body.classList.toggle("open")
        }
    }


    return (
        <>
            <SideBar asideClass={asideClass} setAsideDisplay={setAsideDisplay} asideDisplay={asideDisplay} activepage={activepage} />
            <RightPanel onSidebarClick={onSidebarClick} Page={page} />
        </>
    )
}

export default MainComponent