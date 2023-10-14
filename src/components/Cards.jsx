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

    return <>{cards}</>;
}
