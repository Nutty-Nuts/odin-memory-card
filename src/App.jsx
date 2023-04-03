import React, { useState, useEffect } from "react";
import Cards from "./components/Cards";

function App() {
    const [score, setScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);
    const [message, setMessage] = useState("Game!");
    const [pick, setPick] = useState({
        first: false,
        second: false,
        third: false,
        fourth: false,
    });

    function incrementScore() {
        setScore(score + 1);
    }

    function toggleCard(id) {
        setPick((pick) => ({
            ...pick,
            [id]: true,
        }));
    }

    function resetGame() {
        setBestScore(score);
        setScore(0);
        setPick((pick) => ({
            first: false,
            second: false,
            third: false,
            fourth: false,
        }));
    }

    function handleClick(e) {
        let id = [e.target.id];
        if (!pick[id]) {
            incrementScore();
            toggleCard(id);
            setMessage("Game!");
        } else {
            setMessage("Try Again!");
            resetGame();
        }
    }

    useEffect(() => {
        if (score == 4) {
            setBestScore(4);
            setMessage("You Win!");
        }
    });

    return (
        <div>
            <p>Best Score: {bestScore}</p>
            <p>Score: {score}</p>
            <p>{message}</p>
            <Cards click={handleClick} />
        </div>
    );
}

export default App;
