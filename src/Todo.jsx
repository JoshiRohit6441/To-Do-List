import React, { useState } from "react";
import Body from "./Body";

let Todo = () => {

    let [data, setData] = useState("")
    let [info, setInfo] = useState([])

    let inputinfo = (event) => {
        setData(event.target.value)
    }
    let addinfo = () => {
        setInfo((joshi) => {
            return [...joshi, data]
        })
        setData("");
    }

    let deleteData = (id) => {
        setInfo((joshi) => {
            return joshi.filter((arr, index) => {
                return index !== id
            })
        })
    }
    return (
        <>

            <div className="mainbody">
                <div className="heading">
                    <h1>To-Do List</h1>
                </div>
                <div className="input">
                    <input className="textarea" type="text" placeholder="enter task" onChange={inputinfo} name="info" value={data} />
                    <button onClick={addinfo}>+</button>
                </div>
                <div className="tasks">
                    <ol>
                        {info.map((cuData, index) => {
                            return (<Body
                                id={index}
                                key={index}
                                text={cuData}
                                rohit={deleteData}
                            />)
                        })}
                    </ol>
                </div>
            </div>
        </>
    )
}
export default Todo;