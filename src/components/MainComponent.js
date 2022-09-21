import React from "react"

export default function MainComponent() {
    return (
        <div className="main-component">
            <h1>Fun facts about React</h1>
            <ul>
                <li>Was first released in 2012</li>
                <li>Was originally created by Jodrdan Walke</li>
                <li>Has well over 100K stars on Github</li> 
                <li>Is maintained by facebook</li> 
            </ul>
            <img src="./react-logo.png" className="big-picture" />
        </div>
    )
}