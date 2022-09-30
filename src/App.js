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
        img={cardData.coverImg}
        rating={cardData.stats.rating}
        reviewCount={cardData.stats.reviewCount}
        location={cardData.location}
        title={cardData.title}
        price={cardData.price}
    />
    })
    return (
    <div className = "mainBody">
        <Header />
        <Hero />
        <div className="all-card">
            {cardElements}
        </div>
        <Footer />
    </div>
    )
}


export default App