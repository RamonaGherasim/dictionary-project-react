import React from "react";
import "./Phonetic.css";

export default function Phonetic (props) {
    return (
    <div className="Phonetic">
        <a 
        rel="noreferrer"
        href={props.phonetic.audio} 
        target="_blank">Pronunciation</a>
        <span className="text">{props.phonetic.text}</span> 
    </div>
    );
}