import { useState } from "react";
import Cards from "./components/Cards";

export default function App() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <Cards />
        </div>
    );
}
