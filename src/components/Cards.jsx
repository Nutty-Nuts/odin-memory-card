import PropTypes from "prop-types";
import Card from "./Card";
import "../styles/Cards.css";

export default function Cards({ characters, click }) {
    return <div className="cards">{mapCards(characters, click)}</div>;
}

Cards.propTypes = {
    characters: PropTypes.object,
    click: PropTypes.func,
};

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
