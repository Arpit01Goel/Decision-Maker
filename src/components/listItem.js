import React from "react";

export default function ListItem(props) {
    
    return (
        

        <li className="text-center bg-white text-pink-400 my-1 flex flex-row justify-between">
            <div>{props.content}</div>
            <button onClick={props.click}>x</button>
        </li>
    )
} 