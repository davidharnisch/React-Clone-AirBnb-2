import React from "react"
import ReactDOM from "react-dom/client"
import Header from "./components/Header"
import MainComponent from "./components/MainComponent"
import Footer from "./components/Footer"


export default  function App() {
    return (
    <div className = "mainBody">
        <Header />
        <MainComponent />
        <Footer />
    </div>
    )
}