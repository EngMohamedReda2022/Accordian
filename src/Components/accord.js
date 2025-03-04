import React from "react";
export default function Accord(props) {
    // style = {
    //     background:"red"
    // }

    return (
        <div className="accord-content">
            <h1 onClick={props.fun}>{props.q}<span>+</span></h1> 
            {props.hide&&<p>{props.ans}</p>}
        </div>
    )
}