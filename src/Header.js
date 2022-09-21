import React from "react"

export default function Header() {
    return (
        <header>
            <nav className="navigation">
                <div className="navigation-logo-div">
                    <img src="./react-logo.png" className="logo" />
                    <h1>ReactFacts</h1>
                </div>
                <div className="nav-items">
                    <h3>React Course - Project First</h3>
                </div>
            </nav>
        </header>
    )
}