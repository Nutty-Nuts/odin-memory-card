import { useState } from "react";
import { useEffect } from "react";

import genshintcg from "./modules/genshintcg.js";

import "./styles/App.css";

import Cards from "./components/Cards";

export default function App() {
    const [characters, setCharacters] = useState(genshintcg);
    const [score, setScore] = useState(0);
    const [gameState, setGameState] = useState("");

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
            resetScore();
            gameLose();
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

    const resetScore = () => {
        setScore(() => 0);
    };

    const gameWin = () => {
        setGameState(() => "You Win!");
    };

    const gameLose = () => {
        setGameState(() => "You Lose!");
    };

    useEffect(() => {
        if (score == Object.keys(characters).length) {
            gameWin();
        }
    }, [score, characters]);

    return (
        <div className="app">
            <h1>{gameState}</h1>
            <h2>{score}</h2>
            <div className="card-area">
                <Cards characters={genshintcg} click={handleClick} />
            </div>
        </div>
    );
}
