import React from "react";
import '../styles/card.css'

export default function Card({id, imageUrl, title, onClick}) {
    return (
        <div className="card" onClick={onClick}>
            <img src={imageUrl} alt="title" />
            <p>{title}</p>
        </div>
    )
}