import characters from "../modules/characters";

import Card from "./Card";

export default function Cards() {
    return <div>{mapCards()}</div>;
}

function mapCards() {
    const cards = Object.entries(characters).map((entry) => {
        const [key, value] = entry;

        return <Card name={value.name} image={value.src} id={key} />;
    });

    return <>{cards}</>;
}
