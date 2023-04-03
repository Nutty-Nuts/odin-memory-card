import React, { useState } from "react";
import Card from "./Card";

function Cards(props) {
    const [order, setOrder] = useState(randomizeOrder());

    function randomizeOrder() {
        let values = ["first", "second", "third", "fourth"];
        let output = [];

        for (let index = values.length; index > 0; index--) {
            let random = Math.floor(Math.random() * values.length);
            output.push(values[random]);
            values.splice(random, 1);
        }
        return output;
    }

    function randomizeButtons() {
        setOrder(randomizeOrder());
    }

    return (
        <div onClick={randomizeButtons}>
            <Card id={order[0]} title={order[0]} click={props.click} />
            <Card id={order[1]} title={order[1]} click={props.click} />
            <Card id={order[2]} title={order[2]} click={props.click} />
            <Card id={order[3]} title={order[3]} click={props.click} />
        </div>
    );
}

export default Cards;
