import React, { createContext, useContext, useState } from 'react'

export const darkmode = createContext();

export default function Navbar() {

    const [mystyle, setmystyle] = useState({
        color: "white",
        backgroundColor: "black"
    })

    const [mode, setMode] = useState("light")

    const toggle = () => {
        if (mystyle.color === "white") {
            setmystyle({
                color: "black",
                backgroundColor: "white",
            })
            document.getElementsByClassName("dark")[0].style.background = "black"
            document.getElementsByClassName("dark")[0].style.color = "white"
            document.getElementsByClassName("dark")[1].style.background = "black"
            document.getElementsByClassName("dark")[1].style.color = "white"
            document.getElementsByClassName("dark")[2].style.background = "black"
            document.getElementsByClassName("dark")[2].style.color = "white"
        }
        else {
            setmystyle({
                color: "white",
                backgroundColor: "black",
                border: "1px solid white"

            })
            document.getElementsByClassName("dark")[0].style.background = "white"
            document.getElementsByClassName("dark")[0].style.color = "black"
            document.getElementsByClassName("dark")[1].style.background = "white"
            document.getElementsByClassName("dark")[1].style.color = "black"
            document.getElementsByClassName("dark")[2].style.background = "white"
            document.getElementsByClassName("dark")[2].style.color = "black"

        }
        if (mode == "light") {
            setMode("dark")
            document.body.style.background = "gray"
        }
        else {
            setMode("light")
            document.body.style.background = "white"

        }
    }




    return (
        <>
            <darkmode.Provider value={[mode, setMode]}>
                <nav className={`navbar navbar-expand-lg navbar-${mode} bg-${mode}`} >
                    <div className="container-fluid" >
                        <a className="navbar-brand" href="/" >Navbar</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0" >
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="/" >Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/">About</a>
                                </li>
                            </ul>
                            <div className={`form-check form-switch text-${mode === "light" ? "dark" : "light"}`}>
                                <input className="form-check-input" onClick={toggle} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                                <label className="form-check-label" type="checkbox" role="switch" id="flexSwitchCheckDefault" />Enable Dark mode
                            </div>


                        </div>
                    </div>
                </nav>
            </darkmode.Provider>
        </>
    )
}
