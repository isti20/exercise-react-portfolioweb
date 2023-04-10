import React from "react";
import logo from '../../../assets/logo.png';

const Header = () => {
    return (
        <>
            <header className="header">
                <div className="container flex">
                    <div className="log">
                        <img src={logo} alt="" />
                    </div>
                </div>

                <div className="nav">
                    <ul className="nav-links">
                        <a href="/">Home</a>
                    </ul>
                </div>
            </header>
        </>
    )
}

export default Header