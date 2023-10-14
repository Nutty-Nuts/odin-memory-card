import Card from "./Card";

export default function Cards({ characters, click }) {
    return <div>{mapCards(characters, click)}</div>;
}

function mapCards(characters, click) {
    const cards = Object.entries(characters).map((entry) => {
        const [key, value] = entry;

        return (
            <Card
                name={value.name}
                image={value.src}
                id={key}
                key={key}
                click={click}
            />
        );
    });

    return <>{shuffle(cards)}</>;
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}
