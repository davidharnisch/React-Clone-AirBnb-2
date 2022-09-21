import React from "react"
import ReactDOM from "react-dom/client"
import Header from "./Header"
import MainComponent from "./MainComponent"
import Footer from "./Footer"


function App() {
    return (
    <div className = "mainBody">
        <Header />
        <MainComponent />
        <Footer />
    </div>
    )
}
/*
ReactDOM.render(
    <Page />,
    document.getElementById("root")
)*/

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App />)

