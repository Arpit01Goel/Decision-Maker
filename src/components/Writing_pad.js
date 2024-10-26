import React from "react";
import ReactDOM from 'react-dom/client';
import { useState } from "react";
import ListItem from "./listItem";
export default function Pad() {
    const [task, setTask] = useState("");
    const [arr, setarr] = useState([]);
    function handleClick(e) {
        e.preventDefault();
        const newTask = {id:Date.now() , task: task}
        setarr([...arr, newTask]);
        setTask("")
    }
    function remove(id) {
        
        const removed = arr.filter((item)=>{
            return item.id !== (id)
        })
        setarr(removed)
    }
    const listItems = arr.map(point => <li key={point.id} className="text-center bg-white text-pink-400 my-1 flex flex-row justify-between">
            <div>{point.task}</div>
            <button onClick={() => remove(point.id)} >x</button>
        </li>)
    return (

        <>
            <div className="flex flex-col p-6 bg-slate-100 h-[100%] " >
                <div className="sticky top-14 my-2 z-10 " >
                <form action='' onSubmit={handleClick} >
                    <button onClick={handleClick}>

                        {/* <img src='./Assests/plus.png' alt='logo' className="max-h-3" /> */}
                    </button>

                    <input type="text" placeholder='Enter the point' className="borderp-2 rounded-sm text-blue-500"
                        value={task} onChange={(e) => setTask(e.target.value)} />
                </form>
                </div>
                <ol className="text-left  " >
                    {listItems}
                </ol>
            </div>
        </>
    )
}