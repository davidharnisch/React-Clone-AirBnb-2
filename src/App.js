import React from "react"
import ReactDOM from "react-dom/client"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Card from "./components/Card"
import data from "./data"
import Footer from "./components/Footer"


function App() {
    const cardElements = data.map(cardData => {
        return <Card
        key={cardData.id}
        item={cardData}
    />
    })
    return (
    <div className = "mainBody">
        <Header />
        <Hero />
        <section className="cards-list">
            {cardElements}
        </section>
        <Footer />
    </div>
    )
}


export default App