import { useState } from "react";

import genshintcg from "./modules/genshintcg.js";

import Cards from "./components/Cards";

export default function App() {
    const [count, setCount] = useState(0);
    const [characters, setCharacters] = useState(genshintcg);

    const handleClick = ({ currentTarget }) => {
        const id = currentTarget.id;
        const rest = characters[id];

        setCharacters((prev) => ({
            ...prev,
            [id]: { ...rest, clicked: true },
        }));

        handleGameLogic(characters[id].clicked);
    };

    const handleGameLogic = (clicked) => {
        if (clicked) {
            console.log("You Lose");
        } else {
            console.log("You Get a Point");
        }
    };

    return (
        <div>
            <Cards characters={genshintcg} click={handleClick} />
        </div>
    );
}
