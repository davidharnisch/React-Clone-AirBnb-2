import React from "react"
import ReactDOM from "react-dom/client"

export default function Card(props) {
    return (
        <div className="card">
            <img src={`../images/${props.img}`} className="card--image" />
            <div className="card--stats">
                <img src="../images/Star-1.png"  className="card--star"/>
                <span>{props.rating}</span>
                <span className="gray">{props.reviewCount} • </span>
                <span className="gray">{props.location}</span>
            </div>
            <p>{props.title}</p>
            <p><span className="bold">From ${props.price}</span> / person</p>
        </div>
    )
}