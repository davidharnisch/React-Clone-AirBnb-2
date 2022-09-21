import React from "react"

export default function Footer() {
    return (
        <footer className = "footer">
            <p>© {(new Date().getFullYear())} Harn development. All rights reserved.</p>
        </footer>
    )
}