import { useState } from "react";
import { useEffect } from "react";

import genshintcg from "./modules/genshintcg.js";

import "./styles/App.css";

import Cards from "./components/Cards";

const gameStates = {
    play: "",
    win: "You Win!",
    lose: "You Lose!",
};

export default function App() {
    const [characters, setCharacters] = useState(genshintcg);
    const [score, setScore] = useState(0);
    const [gameState, setGameState] = useState(gameStates.play);

    const handleClick = ({ currentTarget }) => {
        const id = currentTarget.id;
        const rest = characters[id];

        setGameState(() => "");
        setCharacters((prev) => ({
            ...prev,
            [id]: { ...rest, clicked: true },
        }));

        handleGameLogic(characters[id].clicked);
    };

    const handleGameLogic = (clicked) => {
        if (clicked) {
            changeGameState(gameStates.lose);
            console.log("You Lose");

            return;
        }

        if (!clicked) {
            incrementScore();
            console.log("You Get a Point");

            return;
        }
    };

    const incrementScore = () => {
        setScore(() => score + 1);
    };

    const changeGameState = (state) => {
        setGameState(() => state);
    };

    const resetGame = () => {
        setScore(() => 0);
        setCharacters(() => genshintcg);
    };

    useEffect(() => {
        if (score == Object.keys(characters).length) {
            changeGameState(gameStates.win);
        }
    }, [score, characters]);

    return (
        <div className="app">
            <h1>{gameState}</h1>
            <h2>{score}</h2>
            <div className="card-area">
                <Cards characters={genshintcg} click={handleClick} />
            </div>
            <div className="background"></div>
        </div>
    );
}
