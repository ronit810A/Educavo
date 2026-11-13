

import React from "react";
import {logo} from "./image"

import "../Css/header.css"

import Navbar from "./navbar";

function Header() {


    return (
        <header className="main-header">
            <div className="container">
                <div className="nav-bar">
                    <div className="row">
                        <div className="col-md-2">
                            <div className="nav-img">
                                <img src={logo} alt="Logo" />
                            </div>
                        </div>
                        <div className="col-md-8">
                            <Navbar/>
                        </div>
                        <div className="col-md-2"></div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
