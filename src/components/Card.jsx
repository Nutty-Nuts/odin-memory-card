import React from "react";

function Card(props) {
    return (
        <button id={props.id} value={props.title} onClick={props.click}>
            {props.title}
        </button>
    );
}
export default Card;
